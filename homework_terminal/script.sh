#!/bin/bash
cd hw_dir/
mkdir dir_1 dir_2 dir_3
cd dir_1
touch file_1.txt file_2.txt file_3.txt my_1.json my_2.json
mkdir new_1 new_2 new_3
ls -la
mv file_1.txt file_2.txt new_2/
