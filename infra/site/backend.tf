# Keep this module's state in the bucket that `infra/bootstrap/` creates.
#
# Scaleway Object Storage speaks the S3 API, so we point the `s3` backend at
# Scaleway. Set a Scaleway API key pair as `AWS_ACCESS_KEY_ID` and
# `AWS_SECRET_ACCESS_KEY`: the writer pair to apply, or the reader pair to plan
# with `-lock=false`, because the reader can't write the lock file.
terraform {
  backend "s3" {
    bucket = "cariad-earth-20261022" # Copy from `infra/bootstrap/main.tf`

    endpoints = {
      s3 = "https://s3.fr-par.scw.cloud"
    }

    key    = "site/terraform.tfstate"
    region = "fr-par"

    # Skip the checks that only work in AWS:
    skip_credentials_validation = true # Scaleway has no AWS STS
    skip_metadata_api_check     = true # Scaleway has no AWS EC2 metadata service
    skip_region_validation      = true # Scaleway uses different region codes
    skip_requesting_account_id  = true # Scaleway has no AWS account ID

    use_lockfile = true
  }
}
