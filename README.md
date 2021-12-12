# GET_SEIKYO_ITEM
生協の学食メニューの各情報をCSV形式で取得します。
取得する情報は次のとおりです。
```
内部id,名前,税込価格,エネルギー(kcal),タンパク質(g),脂質(g),炭水化物(g),塩分(g),3群点数(赤),3群点数(緑),3群点数(黄)
```
## REQUIREMENT
```
Python 3.X
requests
tqdm
```
不足しているモジュールは次のようにダウンロード出来ます。
```bash
pip3 install requests
```

## Usage
1. このリポジトリをコピーする。
    ### for git user
    ```
    git clone https://github.com/tuat_yate/get_seikyo_item
    ```
    ### for zip install
    ページ上部の`Code`の`Download ZIP`からどうぞ。


2. 学食データのダウンロード
    1. [学食どっとコープ](https://gakushoku.coop/)の[条件から検索ページ](https://gakushoku.coop/conditions/)より、条件を指定して検索します。
    2. 出力されたWebページを`.html`形式で保存します。デフォルトの状態では、`条件から検索 _ 学食どっとコープ.html`という名前で保存されます。
    3. 保存したWebページをコピーしたリポジトリと同じフォルダ内に移動させます。
    4. ターミナル上で、  
        ```
        python get_seikyo_item.py
        ```
        を実行します。
        
## Licence
このリポジトリはMITライセンスで提供されています。
東京農工大学の学生がレポート等で利用する場合は[引用情報](https://docs.google.com/document/d/1yo0YidOwGtKGDvlT7qRfkEAtj1czMCUe9kYoj8akp24/edit?usp=sharing)を参考にして参考文献に記述してください。
