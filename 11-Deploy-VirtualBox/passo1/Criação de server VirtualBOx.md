---------------------Deploy sem um dominio usando VirtualBox--------------------------

# Criação de um server no ubuntu passo a passo.

Colocar a maquina virtual com a rede em modo Bridge

//Terminal Máquina virtual
ip address show = pegar o ip da máquina virtual, śo procurar

//Terminal SO
ping ip-da-máquina-virtual = pra testar conexão

//Terminal Máquina Virtual
sudo apt install ssh

//Terminal SO
ssh ip-máquina-virtual

//Terminal Máquina Virtual
sudo nano /etc/ssh/sshd_config

Tirar o # do PasswordAuthentication e em seguida colocar no
MaxAuthTries colocar o número de chaves ssh que o S0 tem, se é a primeira vez coloca 6

Ctrl + O 
Enter 
Ctrl + x

sudo systemctl restart ssh

//Terminal SO
ssh-keygen -f ~/.ssh/keyServer -t rsa -b 4096

Logo em seguida não precisa colocar senha se tu quiser
copiar caminho da publick key

cat caminho-da-public-key

copiar a chave ssh que foi gerada

//Terminal Máquina virtual
nano ~/.ssh/authorized_keys

colar a chave ssh

Ctrl + o
Enter
Ctrl + x

//Terminal SO
ssh ip_da_maquina_virtual

**Se der public key acess denied 

//Terminal Máquina virtual
sudo nano /etc/ssh/sshd_config

alterar PermitRootLogin prohibit-password para PermitRootLogin yes 
alterar PasswordAuthentication no para PasswordAuthentication yes

**Ou seja, a partir de agora pra conectar na máquina virtual, vai ter que colocar a senha de root da máquina virutal.

sudo systemctl restart ssh

//Terminal SO
ssh ip_da_maquina_virtual

######################################################################################## <br>
Welcome to Ubuntu 20.04.3 LTS (GNU/Linux 5.11.0-38-generic x86_64)

 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/advantage

0 as atualizações podem ser aplicadas imediatamente.

Your Hardware Enablement Stack (HWE) is supported until April 2025.
Last login: Wed Nov  3 06:10:20 2021 from 10.0.0.102
########################################################################################

Se aparecer isso ai encima, então voce está conectado na máquina virtual, se não, verificar o nome da public key e a chave ssh se está correta.


# Em caso de erro mesmo verificando a public key, assistir esser vídeo https://www.youtube.com/watch?v=Wm9N6SpAsqA















































































