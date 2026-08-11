# Portfolio Deployment — GitHub to AWS EC2

## Architecture

```text
Developer
   |
   | Git push
   v
GitHub
   |
   | git clone
   v
AWS EC2
   |
   | Amazon Linux 2023
   v
Apache HTTP Server
   |
   v
/var/www/html
   |
   v
Portfolio Website