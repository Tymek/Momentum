CREATE TABLE "public"."lyric" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), "song_id" uuid NOT NULL, "header" varchar null, "content" text NOT NULL, "order" integer not null, PRIMARY KEY ("id") , FOREIGN KEY ("song_id") REFERENCES "public"."song"("id") ON UPDATE no action ON DELETE cascade);

CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE OR REPLACE TRIGGER "set_public_lyric_updated_at"
BEFORE UPDATE ON "public"."lyric"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_lyric_updated_at" ON "public"."lyric"
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE EXTENSION IF NOT EXISTS pgcrypto;
