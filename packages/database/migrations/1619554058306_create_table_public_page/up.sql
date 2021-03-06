CREATE TABLE "public"."page" (
  "title" Text NOT NULL,
  "created_at" timestamptz NOT NULL DEFAULT now(),
  "updated_at" timestamptz NOT NULL DEFAULT now(),
  "content" Text,
  "meta" jsonb NOT NULL DEFAULT jsonb_build_object(),
  PRIMARY KEY ("title"),
  UNIQUE ("title")
);
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
CREATE TRIGGER "set_public_page_updated_at"
BEFORE UPDATE ON "public"."page"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_page_updated_at" ON "public"."page" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
