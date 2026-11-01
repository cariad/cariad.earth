# The bunnynet provider reads its API key from `BUNNYNET_API_KEY`.
module "site" {
  # `d5633600e4d83e7669176b535523caeecbc7302e` is a pre-release commit.
  # I'm eating my own dog food before I tell everyone it's delicious.
  source = "git::https://github.com/cariad/terraform-bunnynet-static-site.git?ref=d5633600e4d83e7669176b535523caeecbc7302e"

  # The module adds the website's records to the `cariad.earth` zone in Bunny
  # DNS, but doesn't create the zone. The zone must already exist.
  domain     = "cariad.earth"
  prefer_www = false
  zone_name  = "cariad-earth-20261022"
}
