# Fazer uma cópia da pasta que deseja upar
# Abrir essa pasta no terminal e digitar os seguintes comandos:
git config --global user.email "seuemail@email.com"
git config --global user.name "nomeNoGit"
git init
git add .
git commit -m 'Frase do commit'

## 

#No servidor:
sudo apt install git
mkidr repo-agenda
mkdir agenda
cd repo-agenda
git init --bare
cd ..
cd agenda
git init
git remote add agenda /home/server/repo-agenda

##

#No computador:
git remote add agenda ip_do_server:repo-agenda


