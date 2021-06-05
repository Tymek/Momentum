alter table "public"."session"
  add constraint "session_speaker_fkey"
  foreign key ("speaker")
  references "public"."speaker"
  ("id") on update set null on delete set null;
