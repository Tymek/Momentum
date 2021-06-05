alter table "public"."topic"
  add constraint "topic_speaker_fkey"
  foreign key ("speaker")
  references "public"."speaker"
  ("id") on update set null on delete set null;
