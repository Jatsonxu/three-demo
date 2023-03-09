#!/bin/bash
git checkout main
git pull origin main
read -p "请输入你的分支名字:" BranchName
git push origin HEAD:$BranchName
git checkout -b $BranchName origin/$BranchName

echo Create New Branch Success: $BranchName


# 基于master创建新分支并同步到远程分支

# webpack/0.0.1 第一次打包尝试