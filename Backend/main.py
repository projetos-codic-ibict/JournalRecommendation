from typing import Union
import json
from fastapi import FastAPI
import pandas as pd
import json

app = FastAPI()

@app.get("/works")
def get_works():
    # get_category()
    get_main_categories()
    # lines = []
    # with open("./updated_date=2023-02-07/part_001.txt",'r') as data_file:
    #     for line in data_file:
    #         lines.append(line)

    # return lines


@app.get("/countries")
def read_root():
    countries = [
        'Brasil',
        'Estados Unidos',
        'Colombia',
        'Uruguai'
    ]

    return countries

def get_main_categories():
    with open('./concepts.json') as json_data:
        data = json.load(json_data)
        df = pd.DataFrame(data['results'])
        print(df.to_string())

def get_category():
    values = []
    with open("./updated_date=2023-02-07/part_000.txt",'r') as data_file:
        # data_file2 = [data_file[0]]
        # print(data_file[0])
        for line in data_file:
            source = json.loads(line)
            big_qty = ["",-1]
            for concept in source['x_concepts']:
                if concept['score'] > big_qty[1]:
                    big_qty = [concept['display_name'],concept['score']]
                elif concept['score'] == big_qty[1]:
                    source['category'] = None
                    big_qty[0] = None
                    break
            if big_qty[0] is not None:
                source['category'] = big_qty[0]
            
            print(source)
            values.append(str(source))
            break
        data_file.close()

    print(values)

    # with open("./updated_date=2023-02-07/part_000.txt",'w') as data_file:
    #     data_file.writelines(values)
    #     data_file.close()
    
    # return values

@app.get("/sources")
def read_root():
    # get_category()
    # with open("./updated_date=2023-02-07/part_000.txt",'r') as data_file:
    #     for line in data_file:
    #         print(line)

    return [{"id": 1234, "name": "test"}]


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}