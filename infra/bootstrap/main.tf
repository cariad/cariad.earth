module "state" {
  # `ba10ad04ecf4207b0e0b115c787da08233cd5754` is a pre-release commit.
  # I'm eating my own dog food before I tell everyone it's delicious.
  source = "git::https://github.com/cariad/terraform-scaleway-tofu-state.git?ref=ba10ad04ecf4207b0e0b115c787da08233cd5754"

  bucket   = "cariad-earth-20261022"
  workload = "cariad.earth"
}
