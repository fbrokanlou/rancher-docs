---
title: Restoring Rancher
---

This page outlines how to perform a restore with Rancher.

:::note Important:

* Follow the instructions from this page for restoring rancher on the same cluster where it was backed up from. In order to migrate rancher to a new cluster, follow the steps to [migrate rancher.](migrate-rancher-to-new-cluster.md)
* While restoring rancher on the same setup, the operator will scale down the rancher deployment when restore starts, and it will scale back up the deployment once restore completes. So Rancher will be unavailable during the restore.
* If you need to restore Rancher to a previous version after an upgrade, see the [rollback documentation.](../../../getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rollbacks.md)

:::

## Additional Steps for Rollbacks with Rancher v2.6.4+

Rancher v2.6.4 upgrades the cluster-api module from v0.4.4 to v1.0.2. Version v1.0.2 of the cluster-api, in turn, upgrades the Cluster API's  Custom Resource Definitions (CRDs) from `cluster.x-k8s.io/v1alpha4` to `cluster.x-k8s.io/v1beta1`. The CRDs upgrade to v1beta1 causes rollbacks to fail when you attempt to move from Rancher v2.6.4 to any previous version of Rancher v2.6.x. This is because CRDs that use the older apiVersion (v1alpha4) are incompatible with v1beta1.

To avoid rollback failure, the following Rancher scripts should be run **before** you attempt a restore operation or rollback: 

* `verify.sh`:  Checks for any Rancher-related resources in the cluster. 
*  `cleanup.sh`: Cleans up the cluster.

See the [rancher/rancher-cleanup repo](https://github.com/rancher/rancher-cleanup) for more details and source code.

:::caution

 There will be downtime while `cleanup.sh` runs, since the script deletes resources created by Rancher.

:::

### Rolling back from v2.6.4+ to lower versions of v2.6.x

1. Follow these [instructions](https://github.com/rancher/rancher-cleanup/blob/main/README.md) to run the scripts.
1. Follow these [instructions](https://rancher.com/docs/rancher/v2.6/en/backups/migrating-rancher/) to install the rancher-backup Helm chart on the existing cluster and restore the previous state.
    1. Omit Step 3.
    1. When you reach Step 4, install the Rancher v2.6.x version on the local cluster you intend to roll back to.

### Create the Restore Custom Resource

A restore is performed by creating a Restore custom resource.

1. In the upper left corner, click **☰ > Cluster Management**.
1. On the **Clusters** page, go to the `local` cluster and click **Explore**. The `local` cluster runs the Rancher server.
1. In the left navigation bar, click **Rancher Backups > Restores**.
1. Click **Create**.
1. Create the Restore with the form, or with YAML.  For creating the Restore resource using form, refer to the [configuration reference](../../../reference-guides/backup-restore-configuration/restore-configuration.md) and to the [examples.](../../../reference-guides/backup-restore-configuration/examples.md)
1. For using the YAML editor, we can click **Create > Create from YAML**. Enter the Restore YAML.

    ```yaml
    apiVersion: resources.cattle.io/v1
    kind: Restore
    metadata:
      name: restore-migration
    spec:
      backupFilename: backup-b0450532-cee1-4aa1-a881-f5f48a007b1c-2020-09-15T07-27-09Z.tar.gz
      encryptionConfigSecretName: encryptionconfig
      storageLocation:
        s3:
          credentialSecretName: s3-creds
          credentialSecretNamespace: default
          bucketName: rancher-backups
          folder: rancher
          region: us-west-2
          endpoint: s3.us-west-2.amazonaws.com
    ```

      For help configuring the Restore, refer to the [configuration reference](../../../reference-guides/backup-restore-configuration/restore-configuration.md) and to the [examples.](../../../reference-guides/backup-restore-configuration/examples.md)

1. Click **Create**.

**Result:** The rancher-operator scales down the rancher deployment during restore, and scales it back up once the restore completes. The resources are restored in this order:

1. Custom Resource Definitions (CRDs)
2. Cluster-scoped resources
3. Namespaced resources

### Logs

To check how the restore is progressing, you can check the logs of the operator. Run this command to follow the logs:

```
kubectl logs -n cattle-resources-system -l app.kubernetes.io/name=rancher-backup -f
```

### Cleanup

If you created the restore resource with kubectl, remove the resource to prevent a naming conflict with future restores.

### Known Issues
In some cases, after restoring the backup, Rancher logs will show errors similar to the following:
```
2021/10/05 21:30:45 [ERROR] error syncing 'c-89d82/m-4067aa68dd78': handler rke-worker-upgrader: clusters.management.cattle.io "c-89d82" not found, requeuing
```
This happens because one of the resources that was just restored has finalizers, but the related resources have been deleted so the handler cannot find it.

To eliminate the errors, we need to find and delete the resource that causes the error. See more information [here](https://github.com/rancher/rancher/issues/35050#issuecomment-937968556)
