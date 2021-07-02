alter table "public"."session" add column "is_main_event" boolean
 not null default 'true';
ALTER TABLE "public"."session" ALTER COLUMN "is_main_event" drop default;
