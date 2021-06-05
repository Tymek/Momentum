alter table "public"."session" alter column "speaker" drop not null;
alter table "public"."session" add column "speaker" text;
