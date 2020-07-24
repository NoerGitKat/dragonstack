#!/bin/bash 

# Put user password in env variables
export PGPASSWORD='node_password'

# Log to terminal start operation
echo "Configuring dragonstackdb..."

# 1. Delete database
dropdb -U node_user dragonstackdb

# 2. Recreate database
createdb -U node_user dragonstackdb

# 3. Open database and execute SQL files
psql -U node_user dragonstackdb < ./bin/sql/generation.sql
psql -U node_user dragonstackdb < ./bin/sql/dragon.sql

# Log to terminal finish operation
echo "dragonstackdb is configured!"