# Git
Git có 4 vùng 
Working directory => Staging => Repository => Remote repository 
                 (add)       (commit)     (push)
## git clone
```
git clone <(ssh/https) url>
```
## Git branch
```
- git branch <branch_name> : tạo 1 nhánh mới
- git checkout < branch_name>: switch sang nhánh mong muốn
- git checkout -b <branch_name>: tạo nhánh mới và switch sang nhánh mới luôn
```
## git push 
```
git push <remote_name> <branch_name>
```
vd: git push origin main 
## git pull
- pull là bao gồm 2 hành động fetch và merge: đưa những cái thay đổi mới nhất ở remote repository về vùng working directory
- Fetch: chỉ lấy dữ liệu về vùng repository 
- Merge: Thực hiện hành động đưa dữ liệu từ vùng repository merge về cùng working directory

## git: merge request
- merge requets = gộp codee từ 1 nhánh sang nhánh còn lại 







