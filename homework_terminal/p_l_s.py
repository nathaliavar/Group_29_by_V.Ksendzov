import names
import time
from datetime import datetime


file_path = 'файл для записи'


while True:

    with open(file_path, 'a+') as file_txt:
        now = datetime.now()

        user_name = names.get_first_name()
        dt_string = now.strftime("%d/%m/%Y %H:%M:%S")

        result_str = user_name + ' -- ' + str(dt_string) + '\n'

        file_txt.write(result_str)

        file_txt.close()

    time.sleep(0.5)
