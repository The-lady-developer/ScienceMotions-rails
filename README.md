# README

You should have installed

- Ruby & Rails
  http://guides.railsgirls.com/install

- sqlite3
  https://www.sqlite.org/index.html

- postgres
  https://www.postgresql.org/

ruby v 2.6.2

To run the project:

1. git clone git@github.com:JessicaML/ScienceMotions-rails.git
2. cd ScienceMotions-rails
3. bundle install
4. rake db:create
5. rake db:migrate
6. rails server

if you are having problems creating the db, try

- rake db:reset
- rake db:create
- rake db:migrate

Live site: https://scimo.herokuapp.com

run test: bundle exec rspec
