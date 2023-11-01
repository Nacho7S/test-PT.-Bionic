create table if not exists "USER"(user_id serial primary key, age int)

create table if not exists "ASSET"("item" varchar, "user_id" varchar)

insert into "ASSET"("item", "user_id") values ('mobile phone', 'zaki') returning *;

select distinct  "item" from "ASSET"

