---
title: Rancher Outscale 快速入门指南
description: 阅读此分步 Rancher Outscale 指南，以快速部署带有单节点下游 Kubernetes 集群的 Rancher Server。
---
你可以参考以下步骤，在 Outscale 的单节点 K3s Kubernetes 集群中快速部署 Rancher Server，并附加一个单节点下游 Kubernetes 集群。

:::note

本章节中提供的指南，旨在帮助你快速启动一个用于 Rancher 的沙盒，以评估 Rancher 是否能满足你的使用需求。快速入门指南不适用于生产环境。如果你需要获取生产环境的操作指导，请参见[安装](../../../pages-for-subheaders/installation-and-upgrade.md)。

:::

## 先决条件

:::caution

部署到 Outscale 会产生费用。

:::

- [Outscale 账号](https://en.outscale.com/)：用于运行服务器和集群。
- [Outscale 访问密钥](https://docs.outscale.com/en/userguide/About-Access-Keys.html)：如果你没有的话，请按照说明创建一个 Outscale 访问密钥。
- [Terraform](https://www.terraform.io/downloads.html)：用于在 Outscale 中配置服务器和集群。


## 开始使用

1. 使用命令行工具，执行 `git clone https://github.com/rancher/quickstart` 把 [Rancher Quickstart](https://github.com/rancher/quickstart) 克隆到本地。

2. 执行 `cd quickstart/rancher/outscale` 命令，进入包含 Terraform 文件的 Outscale 文件夹。

3. 把 `terraform.tfvars.example` 文件重命名为 `terraform.tfvars`。

4. 编辑 `terraform.tfvars` 文件，并替换以下变量：
   - `access_key_id` - 替换为 Outscale 访问密钥
   - `secret_key_id` - 替换为 Outscale 密文密钥
   - `rancher_server_admin_password` - 替换为创建 Rancher Server 的 admin 账号的密码（最少 12 字符）

5. **可选**：修改 `terraform.tfvars` 中的可选参数。
   参见 [Quickstart Readme](https://github.com/rancher/quickstart) 以及 [Outscale Quickstart Readme](https://github.com/rancher/quickstart/tree/master/rancher/outscale) 了解更多信息。
   建议包括：
   - `region` - Outscale 区域。Outscale 的默认区域不一定是距离你最近的区域。建议修改为距离你最近的区域（`eu-west-2`）。
   - `prefix` - 所有创建资源的前缀
   - `instance_type` - 实例类型，至少需要是 `tinav3.c2r4p3`。

6. 执行 `terraform init`。

7. 执行 `terraform apply --auto-approve` 以初始化环境。然后，等待命令行工具返回以下信息：

   ```
   Apply complete! Resources: 21 added, 0 changed, 0 destroyed.

   Outputs:

   rancher_node_ip = xx.xx.xx.xx
   rancher_server_url = https://rancher.xx.xx.xx.xx.sslip.io
   workload_node_ip = yy.yy.yy.yy
   ```

8. 将以上输出中的 `rancher_server_url` 粘贴到浏览器中。在登录页面中登录（默认用户名为 `admin`，密码为在 `rancher_server_admin_password` 中设置的密码）。
9. 使用 `quickstart/rancher/outscale` 中生成的 `id_rsa` 密钥 SSH 到 Rancher Server。

#### 结果

两个 Kubernetes 集群已部署到你的 Outscale 账户中，一个运行 Rancher Server，另一个为实验部署做好准备。请注意，虽然这种设置是探索 Rancher 功能的好方法，但在生产环境中，应遵循我们的高可用设置指南。用于虚拟机的 SSH 密钥是自动生成的，存储在模块目录中。

### 后续操作

使用 Rancher 创建 deployment。详情请参见[创建 Deployment](../../../pages-for-subheaders/deploy-rancher-workloads.md)。

## 销毁环境

1. 进入 `quickstart/rancher/outscale` 文件夹，然后执行 `terraform destroy --auto-approve`。

2. 等待命令行界面显示资源已删除的消息。
