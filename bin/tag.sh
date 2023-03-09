
# git tag -a <anotated_name> -m <tag_message>：为当前分支所在的提交记录打上附注标签。
# git tag 列出所有 tag 名称
# git push <remote> <tag_name>：推送某个标签到远程仓库。
# git push <remote> --tags 将所有标签推送到远程仓库
# git push <remote> --delete <tag_name>：删除远程仓库中的某个标签。
# git push <remote> :refs/tags/0.0.1
# git push :refs/tags/0.0.1
git tag -a v0.0.1.weppack -m "第一次打包尝试"
git push --tags