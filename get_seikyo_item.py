import requests
from bs4 import BeautifulSoup
import csv
import re
import readline
import os
import tqdm

class Completer:
    def __init__(self, words):
        self.words = words
        self.prefix = None
    def complete(self, prefix, index):
        if prefix != self.prefix:
            # we have a new prefix!
            # find all words that start with this prefix
            self.matching_words = [
                w for w in self.words if w.startswith(prefix)
                ]
            self.prefix = prefix
        try:
            return self.matching_words[index]
        except IndexError:
            return None

#商品idから各情報を出力
item_base_url = "https://gakushoku.coop"
def get_item(link):
    html = requests.get(item_base_url+link)
    soup = BeautifulSoup(html.content, "html.parser")
    if(soup.find("h2")):
        #各データを取得
        #id
        id = link.split("&c=")[1]
        #名前
        name = soup.find("h2").text
        #価格
        price = soup.findAll("table")[0].findAll("tr")[0].find("td").text.replace("円","")
        #エネルギー
        energy = soup.findAll("table")[0].findAll("tr")[1].find("td").text.replace("kcal","")
        #タンパク質
        protain = soup.findAll("table")[0].findAll("tr")[4].find("td").text.replace("g","")
        #脂質
        fat = soup.findAll("table")[0].findAll("tr")[5].find("td").text.replace("g","")
        #炭水化物
        carbohydrates = soup.findAll("table")[0].findAll("tr")[6].find("td").text.replace("g","")
        #塩分
        salt = soup.findAll("table")[0].findAll("tr")[7].find("td").text.replace("g","")
        #3群点数
        score = soup.findAll("table")[0].findAll("tr")[8].find("td").text
        #各スコアに分割・整形
        red,green,yellow = score.split("　 ")[:3]
        yellow = yellow.split("（")[0]
        red = red.split("：")[1]
        green = green.split("：")[1]
        yellow = yellow.split("：")[1]
        yellow = re.sub(r"[\u3000 \r \n \ ]", "", yellow)

        writer.writerow([id,name,price,energy,protain,fat,carbohydrates,salt,red,green,yellow])
if(__name__=='__main__'):
  # カレントディレクトリのファイルを取得
  filenames = [f.name for f in os.scandir() if f.is_file()]
  completer = Completer(filenames)

  readline.parse_and_bind("tab: complete")
  readline.set_completer(completer.complete)
  print("入力ファイルを選択(Tabで候補を表示)：")
  html_name = input(">>> ")

  with open(html_name) as f:
    base_html=f.read()

  print("出力ファイルを選択(.csv)：")
  out_name = input(">>> ")

  with open(out_name,"w") as f:
    writer = csv.writer(f)
    writer.writerow(["id","名前","税込価格","エネルギー","タンパク質","脂質","炭水化物","塩分","赤点","緑点","黄点"])

    #全メニュー取得
    soup = BeautifulSoup(base_html, "html.parser")
    found = soup.findAll("a", class_="fancybox fancybox.iframe")

    #iteration
    for item in tqdm.tqdm(found):
      link = item.get('href')
      get_item(link)
    print("finished!!")