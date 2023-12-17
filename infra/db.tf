resource "aws_dynamodb_table" "crcTable" {
  name           = "crcTable"
  billing_mode   = "PROVISIONED"
  read_capacity  = 5
  write_capacity = 5
  hash_key       = "id"

  attribute {
    name = "id"
    type = "S"
  }

}

resource "aws_dynamodb_table_item" "example" {
  table_name = aws_dynamodb_table.crcTable.name
  hash_key   = aws_dynamodb_table.crcTable.hash_key

  item = jsonencode(
    {
      "id" : { "S" : "1" },
      "views" : { "N" : "1" },
  })

}
