import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  jsonb: any;
  timestamptz: string;
  uuid: string;
};


/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>;
};

export type UserInfo = {
  id?: Maybe<Scalars['uuid']>;
  username?: Maybe<Scalars['String']>;
};


/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  /** is the column contained in the given json value */
  _contained_in?: Maybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: Maybe<Scalars['jsonb']>;
  _eq?: Maybe<Scalars['jsonb']>;
  _gt?: Maybe<Scalars['jsonb']>;
  _gte?: Maybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: Maybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: Maybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: Maybe<Array<Scalars['String']>>;
  _in?: Maybe<Array<Scalars['jsonb']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['jsonb']>;
  _lte?: Maybe<Scalars['jsonb']>;
  _neq?: Maybe<Scalars['jsonb']>;
  _nin?: Maybe<Array<Scalars['jsonb']>>;
};

/** columns and relationships of "lyric" */
export type Lyric = {
  content: Scalars['String'];
  created_at: Scalars['timestamptz'];
  header?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  order?: Maybe<Scalars['Int']>;
  /** An object relationship */
  song: Song;
  song_id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "lyric" */
export type Lyric_Aggregate = {
  aggregate?: Maybe<Lyric_Aggregate_Fields>;
  nodes: Array<Lyric>;
};

/** aggregate fields of "lyric" */
export type Lyric_Aggregate_Fields = {
  avg?: Maybe<Lyric_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Lyric_Max_Fields>;
  min?: Maybe<Lyric_Min_Fields>;
  stddev?: Maybe<Lyric_Stddev_Fields>;
  stddev_pop?: Maybe<Lyric_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Lyric_Stddev_Samp_Fields>;
  sum?: Maybe<Lyric_Sum_Fields>;
  var_pop?: Maybe<Lyric_Var_Pop_Fields>;
  var_samp?: Maybe<Lyric_Var_Samp_Fields>;
  variance?: Maybe<Lyric_Variance_Fields>;
};


/** aggregate fields of "lyric" */
export type Lyric_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Lyric_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "lyric" */
export type Lyric_Aggregate_Order_By = {
  avg?: Maybe<Lyric_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Lyric_Max_Order_By>;
  min?: Maybe<Lyric_Min_Order_By>;
  stddev?: Maybe<Lyric_Stddev_Order_By>;
  stddev_pop?: Maybe<Lyric_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Lyric_Stddev_Samp_Order_By>;
  sum?: Maybe<Lyric_Sum_Order_By>;
  var_pop?: Maybe<Lyric_Var_Pop_Order_By>;
  var_samp?: Maybe<Lyric_Var_Samp_Order_By>;
  variance?: Maybe<Lyric_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "lyric" */
export type Lyric_Arr_Rel_Insert_Input = {
  data: Array<Lyric_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Lyric_On_Conflict>;
};

/** aggregate avg on columns */
export type Lyric_Avg_Fields = {
  order?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "lyric" */
export type Lyric_Avg_Order_By = {
  order?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "lyric". All fields are combined with a logical 'AND'. */
export type Lyric_Bool_Exp = {
  _and?: Maybe<Array<Lyric_Bool_Exp>>;
  _not?: Maybe<Lyric_Bool_Exp>;
  _or?: Maybe<Array<Lyric_Bool_Exp>>;
  content?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  header?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  order?: Maybe<Int_Comparison_Exp>;
  song?: Maybe<Song_Bool_Exp>;
  song_id?: Maybe<Uuid_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "lyric" */
export enum Lyric_Constraint {
  /** unique or primary key constraint */
  LyricPkey = 'lyric_pkey',
  /** unique or primary key constraint */
  LyricSongIdOrderKey = 'lyric_song_id_order_key'
}

/** input type for incrementing numeric columns in table "lyric" */
export type Lyric_Inc_Input = {
  order?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "lyric" */
export type Lyric_Insert_Input = {
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  header?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  order?: Maybe<Scalars['Int']>;
  song?: Maybe<Song_Obj_Rel_Insert_Input>;
  song_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Lyric_Max_Fields = {
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  header?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  order?: Maybe<Scalars['Int']>;
  song_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "lyric" */
export type Lyric_Max_Order_By = {
  content?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  header?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
  song_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Lyric_Min_Fields = {
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  header?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  order?: Maybe<Scalars['Int']>;
  song_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "lyric" */
export type Lyric_Min_Order_By = {
  content?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  header?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
  song_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "lyric" */
export type Lyric_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Lyric>;
};

/** on conflict condition type for table "lyric" */
export type Lyric_On_Conflict = {
  constraint: Lyric_Constraint;
  update_columns?: Array<Lyric_Update_Column>;
  where?: Maybe<Lyric_Bool_Exp>;
};

/** Ordering options when selecting data from "lyric". */
export type Lyric_Order_By = {
  content?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  header?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
  song?: Maybe<Song_Order_By>;
  song_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: lyric */
export type Lyric_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "lyric" */
export enum Lyric_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Header = 'header',
  /** column name */
  Id = 'id',
  /** column name */
  Order = 'order',
  /** column name */
  SongId = 'song_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "lyric" */
export type Lyric_Set_Input = {
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  header?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  order?: Maybe<Scalars['Int']>;
  song_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Lyric_Stddev_Fields = {
  order?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "lyric" */
export type Lyric_Stddev_Order_By = {
  order?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Lyric_Stddev_Pop_Fields = {
  order?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "lyric" */
export type Lyric_Stddev_Pop_Order_By = {
  order?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Lyric_Stddev_Samp_Fields = {
  order?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "lyric" */
export type Lyric_Stddev_Samp_Order_By = {
  order?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Lyric_Sum_Fields = {
  order?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "lyric" */
export type Lyric_Sum_Order_By = {
  order?: Maybe<Order_By>;
};

/** update columns of table "lyric" */
export enum Lyric_Update_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Header = 'header',
  /** column name */
  Id = 'id',
  /** column name */
  Order = 'order',
  /** column name */
  SongId = 'song_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Lyric_Var_Pop_Fields = {
  order?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "lyric" */
export type Lyric_Var_Pop_Order_By = {
  order?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Lyric_Var_Samp_Fields = {
  order?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "lyric" */
export type Lyric_Var_Samp_Order_By = {
  order?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Lyric_Variance_Fields = {
  order?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "lyric" */
export type Lyric_Variance_Order_By = {
  order?: Maybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  /** delete data from the table: "lyric" */
  delete_lyric?: Maybe<Lyric_Mutation_Response>;
  /** delete single row from the table: "lyric" */
  delete_lyric_by_pk?: Maybe<Lyric>;
  /** delete data from the table: "notification" */
  delete_notification?: Maybe<Notification_Mutation_Response>;
  /** delete single row from the table: "notification" */
  delete_notification_by_pk?: Maybe<Notification>;
  /** delete data from the table: "page" */
  delete_page?: Maybe<Page_Mutation_Response>;
  /** delete single row from the table: "page" */
  delete_page_by_pk?: Maybe<Page>;
  /** delete data from the table: "session" */
  delete_session?: Maybe<Session_Mutation_Response>;
  /** delete single row from the table: "session" */
  delete_session_by_pk?: Maybe<Session>;
  /** delete data from the table: "song" */
  delete_song?: Maybe<Song_Mutation_Response>;
  /** delete single row from the table: "song" */
  delete_song_by_pk?: Maybe<Song>;
  /** delete data from the table: "speaker" */
  delete_speaker?: Maybe<Speaker_Mutation_Response>;
  /** delete single row from the table: "speaker" */
  delete_speaker_by_pk?: Maybe<Speaker>;
  /** delete data from the table: "topic" */
  delete_topic?: Maybe<Topic_Mutation_Response>;
  /** delete single row from the table: "topic" */
  delete_topic_by_pk?: Maybe<Topic>;
  /** delete data from the table: "user" */
  delete_user?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>;
  /** insert data into the table: "lyric" */
  insert_lyric?: Maybe<Lyric_Mutation_Response>;
  /** insert a single row into the table: "lyric" */
  insert_lyric_one?: Maybe<Lyric>;
  /** insert data into the table: "notification" */
  insert_notification?: Maybe<Notification_Mutation_Response>;
  /** insert a single row into the table: "notification" */
  insert_notification_one?: Maybe<Notification>;
  /** insert data into the table: "page" */
  insert_page?: Maybe<Page_Mutation_Response>;
  /** insert a single row into the table: "page" */
  insert_page_one?: Maybe<Page>;
  /** insert data into the table: "session" */
  insert_session?: Maybe<Session_Mutation_Response>;
  /** insert a single row into the table: "session" */
  insert_session_one?: Maybe<Session>;
  /** insert data into the table: "song" */
  insert_song?: Maybe<Song_Mutation_Response>;
  /** insert a single row into the table: "song" */
  insert_song_one?: Maybe<Song>;
  /** insert data into the table: "speaker" */
  insert_speaker?: Maybe<Speaker_Mutation_Response>;
  /** insert a single row into the table: "speaker" */
  insert_speaker_one?: Maybe<Speaker>;
  /** insert data into the table: "topic" */
  insert_topic?: Maybe<Topic_Mutation_Response>;
  /** insert a single row into the table: "topic" */
  insert_topic_one?: Maybe<Topic>;
  /** insert data into the table: "user" */
  insert_user?: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>;
  login?: Maybe<UserInfo>;
  logout?: Maybe<UserInfo>;
  /** update data of the table: "lyric" */
  update_lyric?: Maybe<Lyric_Mutation_Response>;
  /** update single row of the table: "lyric" */
  update_lyric_by_pk?: Maybe<Lyric>;
  /** update data of the table: "notification" */
  update_notification?: Maybe<Notification_Mutation_Response>;
  /** update single row of the table: "notification" */
  update_notification_by_pk?: Maybe<Notification>;
  /** update data of the table: "page" */
  update_page?: Maybe<Page_Mutation_Response>;
  /** update single row of the table: "page" */
  update_page_by_pk?: Maybe<Page>;
  /** update data of the table: "session" */
  update_session?: Maybe<Session_Mutation_Response>;
  /** update single row of the table: "session" */
  update_session_by_pk?: Maybe<Session>;
  /** update data of the table: "song" */
  update_song?: Maybe<Song_Mutation_Response>;
  /** update single row of the table: "song" */
  update_song_by_pk?: Maybe<Song>;
  /** update data of the table: "speaker" */
  update_speaker?: Maybe<Speaker_Mutation_Response>;
  /** update single row of the table: "speaker" */
  update_speaker_by_pk?: Maybe<Speaker>;
  /** update data of the table: "topic" */
  update_topic?: Maybe<Topic_Mutation_Response>;
  /** update single row of the table: "topic" */
  update_topic_by_pk?: Maybe<Topic>;
  /** update data of the table: "user" */
  update_user?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>;
};


/** mutation root */
export type Mutation_RootDelete_LyricArgs = {
  where: Lyric_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Lyric_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_NotificationArgs = {
  where: Notification_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Notification_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_PageArgs = {
  where: Page_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Page_By_PkArgs = {
  title: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_SessionArgs = {
  where: Session_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Session_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_SongArgs = {
  where: Song_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Song_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_SpeakerArgs = {
  where: Speaker_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Speaker_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_TopicArgs = {
  where: Topic_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Topic_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_LyricArgs = {
  objects: Array<Lyric_Insert_Input>;
  on_conflict?: Maybe<Lyric_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Lyric_OneArgs = {
  object: Lyric_Insert_Input;
  on_conflict?: Maybe<Lyric_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_NotificationArgs = {
  objects: Array<Notification_Insert_Input>;
  on_conflict?: Maybe<Notification_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Notification_OneArgs = {
  object: Notification_Insert_Input;
  on_conflict?: Maybe<Notification_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PageArgs = {
  objects: Array<Page_Insert_Input>;
  on_conflict?: Maybe<Page_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Page_OneArgs = {
  object: Page_Insert_Input;
  on_conflict?: Maybe<Page_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SessionArgs = {
  objects: Array<Session_Insert_Input>;
  on_conflict?: Maybe<Session_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Session_OneArgs = {
  object: Session_Insert_Input;
  on_conflict?: Maybe<Session_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SongArgs = {
  objects: Array<Song_Insert_Input>;
  on_conflict?: Maybe<Song_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Song_OneArgs = {
  object: Song_Insert_Input;
  on_conflict?: Maybe<Song_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SpeakerArgs = {
  objects: Array<Speaker_Insert_Input>;
  on_conflict?: Maybe<Speaker_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Speaker_OneArgs = {
  object: Speaker_Insert_Input;
  on_conflict?: Maybe<Speaker_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TopicArgs = {
  objects: Array<Topic_Insert_Input>;
  on_conflict?: Maybe<Topic_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Topic_OneArgs = {
  object: Topic_Insert_Input;
  on_conflict?: Maybe<Topic_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: Maybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: Maybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootLoginArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


/** mutation root */
export type Mutation_RootUpdate_LyricArgs = {
  _inc?: Maybe<Lyric_Inc_Input>;
  _set?: Maybe<Lyric_Set_Input>;
  where: Lyric_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Lyric_By_PkArgs = {
  _inc?: Maybe<Lyric_Inc_Input>;
  _set?: Maybe<Lyric_Set_Input>;
  pk_columns: Lyric_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_NotificationArgs = {
  _set?: Maybe<Notification_Set_Input>;
  where: Notification_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Notification_By_PkArgs = {
  _set?: Maybe<Notification_Set_Input>;
  pk_columns: Notification_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_PageArgs = {
  _append?: Maybe<Page_Append_Input>;
  _delete_at_path?: Maybe<Page_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Page_Delete_Elem_Input>;
  _delete_key?: Maybe<Page_Delete_Key_Input>;
  _prepend?: Maybe<Page_Prepend_Input>;
  _set?: Maybe<Page_Set_Input>;
  where: Page_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Page_By_PkArgs = {
  _append?: Maybe<Page_Append_Input>;
  _delete_at_path?: Maybe<Page_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Page_Delete_Elem_Input>;
  _delete_key?: Maybe<Page_Delete_Key_Input>;
  _prepend?: Maybe<Page_Prepend_Input>;
  _set?: Maybe<Page_Set_Input>;
  pk_columns: Page_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_SessionArgs = {
  _set?: Maybe<Session_Set_Input>;
  where: Session_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Session_By_PkArgs = {
  _set?: Maybe<Session_Set_Input>;
  pk_columns: Session_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_SongArgs = {
  _inc?: Maybe<Song_Inc_Input>;
  _set?: Maybe<Song_Set_Input>;
  where: Song_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Song_By_PkArgs = {
  _inc?: Maybe<Song_Inc_Input>;
  _set?: Maybe<Song_Set_Input>;
  pk_columns: Song_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_SpeakerArgs = {
  _inc?: Maybe<Speaker_Inc_Input>;
  _set?: Maybe<Speaker_Set_Input>;
  where: Speaker_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Speaker_By_PkArgs = {
  _inc?: Maybe<Speaker_Inc_Input>;
  _set?: Maybe<Speaker_Set_Input>;
  pk_columns: Speaker_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_TopicArgs = {
  _set?: Maybe<Topic_Set_Input>;
  where: Topic_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Topic_By_PkArgs = {
  _set?: Maybe<Topic_Set_Input>;
  pk_columns: Topic_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _set?: Maybe<User_Set_Input>;
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _set?: Maybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};

/** columns and relationships of "notification" */
export type Notification = {
  content?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  isRead?: Maybe<Scalars['Boolean']>;
  published_at?: Maybe<Scalars['timestamptz']>;
  title: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "notification" */
export type Notification_Aggregate = {
  aggregate?: Maybe<Notification_Aggregate_Fields>;
  nodes: Array<Notification>;
};

/** aggregate fields of "notification" */
export type Notification_Aggregate_Fields = {
  count: Scalars['Int'];
  max?: Maybe<Notification_Max_Fields>;
  min?: Maybe<Notification_Min_Fields>;
};


/** aggregate fields of "notification" */
export type Notification_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Notification_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "notification". All fields are combined with a logical 'AND'. */
export type Notification_Bool_Exp = {
  _and?: Maybe<Array<Notification_Bool_Exp>>;
  _not?: Maybe<Notification_Bool_Exp>;
  _or?: Maybe<Array<Notification_Bool_Exp>>;
  content?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  published_at?: Maybe<Timestamptz_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "notification" */
export enum Notification_Constraint {
  /** unique or primary key constraint */
  NotificationPkey = 'notification_pkey'
}

/** input type for inserting data into table "notification" */
export type Notification_Insert_Input = {
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  published_at?: Maybe<Scalars['timestamptz']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Notification_Max_Fields = {
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  published_at?: Maybe<Scalars['timestamptz']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Notification_Min_Fields = {
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  published_at?: Maybe<Scalars['timestamptz']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "notification" */
export type Notification_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Notification>;
};

/** on conflict condition type for table "notification" */
export type Notification_On_Conflict = {
  constraint: Notification_Constraint;
  update_columns?: Array<Notification_Update_Column>;
  where?: Maybe<Notification_Bool_Exp>;
};

/** Ordering options when selecting data from "notification". */
export type Notification_Order_By = {
  content?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  published_at?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: notification */
export type Notification_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "notification" */
export enum Notification_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PublishedAt = 'published_at',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "notification" */
export type Notification_Set_Input = {
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  published_at?: Maybe<Scalars['timestamptz']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "notification" */
export enum Notification_Update_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PublishedAt = 'published_at',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "page" */
export type Page = {
  content?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  meta: Scalars['jsonb'];
  title: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "page" */
export type PageMetaArgs = {
  path?: Maybe<Scalars['String']>;
};

/** aggregated selection of "page" */
export type Page_Aggregate = {
  aggregate?: Maybe<Page_Aggregate_Fields>;
  nodes: Array<Page>;
};

/** aggregate fields of "page" */
export type Page_Aggregate_Fields = {
  count: Scalars['Int'];
  max?: Maybe<Page_Max_Fields>;
  min?: Maybe<Page_Min_Fields>;
};


/** aggregate fields of "page" */
export type Page_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Page_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Page_Append_Input = {
  meta?: Maybe<Scalars['jsonb']>;
};

/** Boolean expression to filter rows from the table "page". All fields are combined with a logical 'AND'. */
export type Page_Bool_Exp = {
  _and?: Maybe<Array<Page_Bool_Exp>>;
  _not?: Maybe<Page_Bool_Exp>;
  _or?: Maybe<Array<Page_Bool_Exp>>;
  content?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  meta?: Maybe<Jsonb_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "page" */
export enum Page_Constraint {
  /** unique or primary key constraint */
  PagePkey = 'page_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Page_Delete_At_Path_Input = {
  meta?: Maybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Page_Delete_Elem_Input = {
  meta?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Page_Delete_Key_Input = {
  meta?: Maybe<Scalars['String']>;
};

/** input type for inserting data into table "page" */
export type Page_Insert_Input = {
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  meta?: Maybe<Scalars['jsonb']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Page_Max_Fields = {
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Page_Min_Fields = {
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "page" */
export type Page_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Page>;
};

/** on conflict condition type for table "page" */
export type Page_On_Conflict = {
  constraint: Page_Constraint;
  update_columns?: Array<Page_Update_Column>;
  where?: Maybe<Page_Bool_Exp>;
};

/** Ordering options when selecting data from "page". */
export type Page_Order_By = {
  content?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  meta?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: page */
export type Page_Pk_Columns_Input = {
  title: Scalars['String'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Page_Prepend_Input = {
  meta?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "page" */
export enum Page_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Meta = 'meta',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "page" */
export type Page_Set_Input = {
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  meta?: Maybe<Scalars['jsonb']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "page" */
export enum Page_Update_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Meta = 'meta',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Query_Root = {
  isDarkTheme?: Maybe<Scalars['Boolean']>;
  /** fetch data from the table: "lyric" */
  lyric: Array<Lyric>;
  /** fetch aggregated fields from the table: "lyric" */
  lyric_aggregate: Lyric_Aggregate;
  /** fetch data from the table: "lyric" using primary key columns */
  lyric_by_pk?: Maybe<Lyric>;
  me?: Maybe<UserInfo>;
  /** fetch data from the table: "notification" */
  notification: Array<Notification>;
  /** fetch aggregated fields from the table: "notification" */
  notification_aggregate: Notification_Aggregate;
  /** fetch data from the table: "notification" using primary key columns */
  notification_by_pk?: Maybe<Notification>;
  /** fetch data from the table: "page" */
  page: Array<Page>;
  /** fetch aggregated fields from the table: "page" */
  page_aggregate: Page_Aggregate;
  /** fetch data from the table: "page" using primary key columns */
  page_by_pk?: Maybe<Page>;
  /** fetch data from the table: "session" */
  session: Array<Session>;
  /** fetch aggregated fields from the table: "session" */
  session_aggregate: Session_Aggregate;
  /** fetch data from the table: "session" using primary key columns */
  session_by_pk?: Maybe<Session>;
  /** fetch data from the table: "song" */
  song: Array<Song>;
  /** fetch aggregated fields from the table: "song" */
  song_aggregate: Song_Aggregate;
  /** fetch data from the table: "song" using primary key columns */
  song_by_pk?: Maybe<Song>;
  /** fetch data from the table: "speaker" */
  speaker: Array<Speaker>;
  /** fetch aggregated fields from the table: "speaker" */
  speaker_aggregate: Speaker_Aggregate;
  /** fetch data from the table: "speaker" using primary key columns */
  speaker_by_pk?: Maybe<Speaker>;
  /** fetch data from the table: "topic" */
  topic: Array<Topic>;
  /** fetch aggregated fields from the table: "topic" */
  topic_aggregate: Topic_Aggregate;
  /** fetch data from the table: "topic" using primary key columns */
  topic_by_pk?: Maybe<Topic>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
};


export type Query_RootLyricArgs = {
  distinct_on?: Maybe<Array<Lyric_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Lyric_Order_By>>;
  where?: Maybe<Lyric_Bool_Exp>;
};


export type Query_RootLyric_AggregateArgs = {
  distinct_on?: Maybe<Array<Lyric_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Lyric_Order_By>>;
  where?: Maybe<Lyric_Bool_Exp>;
};


export type Query_RootLyric_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootNotificationArgs = {
  distinct_on?: Maybe<Array<Notification_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notification_Order_By>>;
  where?: Maybe<Notification_Bool_Exp>;
};


export type Query_RootNotification_AggregateArgs = {
  distinct_on?: Maybe<Array<Notification_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notification_Order_By>>;
  where?: Maybe<Notification_Bool_Exp>;
};


export type Query_RootNotification_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootPageArgs = {
  distinct_on?: Maybe<Array<Page_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Page_Order_By>>;
  where?: Maybe<Page_Bool_Exp>;
};


export type Query_RootPage_AggregateArgs = {
  distinct_on?: Maybe<Array<Page_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Page_Order_By>>;
  where?: Maybe<Page_Bool_Exp>;
};


export type Query_RootPage_By_PkArgs = {
  title: Scalars['String'];
};


export type Query_RootSessionArgs = {
  distinct_on?: Maybe<Array<Session_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Session_Order_By>>;
  where?: Maybe<Session_Bool_Exp>;
};


export type Query_RootSession_AggregateArgs = {
  distinct_on?: Maybe<Array<Session_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Session_Order_By>>;
  where?: Maybe<Session_Bool_Exp>;
};


export type Query_RootSession_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootSongArgs = {
  distinct_on?: Maybe<Array<Song_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Song_Order_By>>;
  where?: Maybe<Song_Bool_Exp>;
};


export type Query_RootSong_AggregateArgs = {
  distinct_on?: Maybe<Array<Song_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Song_Order_By>>;
  where?: Maybe<Song_Bool_Exp>;
};


export type Query_RootSong_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootSpeakerArgs = {
  distinct_on?: Maybe<Array<Speaker_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Speaker_Order_By>>;
  where?: Maybe<Speaker_Bool_Exp>;
};


export type Query_RootSpeaker_AggregateArgs = {
  distinct_on?: Maybe<Array<Speaker_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Speaker_Order_By>>;
  where?: Maybe<Speaker_Bool_Exp>;
};


export type Query_RootSpeaker_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootTopicArgs = {
  distinct_on?: Maybe<Array<Topic_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Topic_Order_By>>;
  where?: Maybe<Topic_Bool_Exp>;
};


export type Query_RootTopic_AggregateArgs = {
  distinct_on?: Maybe<Array<Topic_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Topic_Order_By>>;
  where?: Maybe<Topic_Bool_Exp>;
};


export type Query_RootTopic_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


export type Query_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


export type Query_RootUser_By_PkArgs = {
  id: Scalars['uuid'];
};

/** columns and relationships of "session" */
export type Session = {
  begins_at: Scalars['timestamptz'];
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  ends_at?: Maybe<Scalars['timestamptz']>;
  id: Scalars['uuid'];
  is_main_event: Scalars['Boolean'];
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  /** An object relationship */
  speaker?: Maybe<Speaker>;
  speaker_id?: Maybe<Scalars['uuid']>;
  /** An array relationship */
  topics: Array<Topic>;
  /** An aggregate relationship */
  topics_aggregate: Topic_Aggregate;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "session" */
export type SessionTopicsArgs = {
  distinct_on?: Maybe<Array<Topic_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Topic_Order_By>>;
  where?: Maybe<Topic_Bool_Exp>;
};


/** columns and relationships of "session" */
export type SessionTopics_AggregateArgs = {
  distinct_on?: Maybe<Array<Topic_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Topic_Order_By>>;
  where?: Maybe<Topic_Bool_Exp>;
};

/** aggregated selection of "session" */
export type Session_Aggregate = {
  aggregate?: Maybe<Session_Aggregate_Fields>;
  nodes: Array<Session>;
};

/** aggregate fields of "session" */
export type Session_Aggregate_Fields = {
  count: Scalars['Int'];
  max?: Maybe<Session_Max_Fields>;
  min?: Maybe<Session_Min_Fields>;
};


/** aggregate fields of "session" */
export type Session_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Session_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "session" */
export type Session_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Session_Max_Order_By>;
  min?: Maybe<Session_Min_Order_By>;
};

/** input type for inserting array relation for remote table "session" */
export type Session_Arr_Rel_Insert_Input = {
  data: Array<Session_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Session_On_Conflict>;
};

/** Boolean expression to filter rows from the table "session". All fields are combined with a logical 'AND'. */
export type Session_Bool_Exp = {
  _and?: Maybe<Array<Session_Bool_Exp>>;
  _not?: Maybe<Session_Bool_Exp>;
  _or?: Maybe<Array<Session_Bool_Exp>>;
  begins_at?: Maybe<Timestamptz_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  ends_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  is_main_event?: Maybe<Boolean_Comparison_Exp>;
  location?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  speaker?: Maybe<Speaker_Bool_Exp>;
  speaker_id?: Maybe<Uuid_Comparison_Exp>;
  topics?: Maybe<Topic_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "session" */
export enum Session_Constraint {
  /** unique or primary key constraint */
  SessionPkey = 'session_pkey'
}

/** input type for inserting data into table "session" */
export type Session_Insert_Input = {
  begins_at?: Maybe<Scalars['timestamptz']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  ends_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  is_main_event?: Maybe<Scalars['Boolean']>;
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  speaker?: Maybe<Speaker_Obj_Rel_Insert_Input>;
  speaker_id?: Maybe<Scalars['uuid']>;
  topics?: Maybe<Topic_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Session_Max_Fields = {
  begins_at?: Maybe<Scalars['timestamptz']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  ends_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  speaker_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "session" */
export type Session_Max_Order_By = {
  begins_at?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  ends_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  location?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  speaker_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Session_Min_Fields = {
  begins_at?: Maybe<Scalars['timestamptz']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  ends_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  speaker_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "session" */
export type Session_Min_Order_By = {
  begins_at?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  ends_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  location?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  speaker_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "session" */
export type Session_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Session>;
};

/** input type for inserting object relation for remote table "session" */
export type Session_Obj_Rel_Insert_Input = {
  data: Session_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Session_On_Conflict>;
};

/** on conflict condition type for table "session" */
export type Session_On_Conflict = {
  constraint: Session_Constraint;
  update_columns?: Array<Session_Update_Column>;
  where?: Maybe<Session_Bool_Exp>;
};

/** Ordering options when selecting data from "session". */
export type Session_Order_By = {
  begins_at?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  ends_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  is_main_event?: Maybe<Order_By>;
  location?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  speaker?: Maybe<Speaker_Order_By>;
  speaker_id?: Maybe<Order_By>;
  topics_aggregate?: Maybe<Topic_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: session */
export type Session_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "session" */
export enum Session_Select_Column {
  /** column name */
  BeginsAt = 'begins_at',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  EndsAt = 'ends_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsMainEvent = 'is_main_event',
  /** column name */
  Location = 'location',
  /** column name */
  Name = 'name',
  /** column name */
  SpeakerId = 'speaker_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "session" */
export type Session_Set_Input = {
  begins_at?: Maybe<Scalars['timestamptz']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  ends_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  is_main_event?: Maybe<Scalars['Boolean']>;
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  speaker_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "session" */
export enum Session_Update_Column {
  /** column name */
  BeginsAt = 'begins_at',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  EndsAt = 'ends_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsMainEvent = 'is_main_event',
  /** column name */
  Location = 'location',
  /** column name */
  Name = 'name',
  /** column name */
  SpeakerId = 'speaker_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "song" */
export type Song = {
  author: Scalars['String'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An array relationship */
  lyrics: Array<Lyric>;
  /** An aggregate relationship */
  lyrics_aggregate: Lyric_Aggregate;
  order: Scalars['Int'];
  original_title: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "song" */
export type SongLyricsArgs = {
  distinct_on?: Maybe<Array<Lyric_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Lyric_Order_By>>;
  where?: Maybe<Lyric_Bool_Exp>;
};


/** columns and relationships of "song" */
export type SongLyrics_AggregateArgs = {
  distinct_on?: Maybe<Array<Lyric_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Lyric_Order_By>>;
  where?: Maybe<Lyric_Bool_Exp>;
};

/** aggregated selection of "song" */
export type Song_Aggregate = {
  aggregate?: Maybe<Song_Aggregate_Fields>;
  nodes: Array<Song>;
};

/** aggregate fields of "song" */
export type Song_Aggregate_Fields = {
  avg?: Maybe<Song_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Song_Max_Fields>;
  min?: Maybe<Song_Min_Fields>;
  stddev?: Maybe<Song_Stddev_Fields>;
  stddev_pop?: Maybe<Song_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Song_Stddev_Samp_Fields>;
  sum?: Maybe<Song_Sum_Fields>;
  var_pop?: Maybe<Song_Var_Pop_Fields>;
  var_samp?: Maybe<Song_Var_Samp_Fields>;
  variance?: Maybe<Song_Variance_Fields>;
};


/** aggregate fields of "song" */
export type Song_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Song_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Song_Avg_Fields = {
  order?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "song". All fields are combined with a logical 'AND'. */
export type Song_Bool_Exp = {
  _and?: Maybe<Array<Song_Bool_Exp>>;
  _not?: Maybe<Song_Bool_Exp>;
  _or?: Maybe<Array<Song_Bool_Exp>>;
  author?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  lyrics?: Maybe<Lyric_Bool_Exp>;
  order?: Maybe<Int_Comparison_Exp>;
  original_title?: Maybe<String_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "song" */
export enum Song_Constraint {
  /** unique or primary key constraint */
  SongOrderKey = 'song_order_key',
  /** unique or primary key constraint */
  SongPkey = 'song_pkey'
}

/** input type for incrementing numeric columns in table "song" */
export type Song_Inc_Input = {
  order?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "song" */
export type Song_Insert_Input = {
  author?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  lyrics?: Maybe<Lyric_Arr_Rel_Insert_Input>;
  order?: Maybe<Scalars['Int']>;
  original_title?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Song_Max_Fields = {
  author?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  order?: Maybe<Scalars['Int']>;
  original_title?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Song_Min_Fields = {
  author?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  order?: Maybe<Scalars['Int']>;
  original_title?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "song" */
export type Song_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Song>;
};

/** input type for inserting object relation for remote table "song" */
export type Song_Obj_Rel_Insert_Input = {
  data: Song_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Song_On_Conflict>;
};

/** on conflict condition type for table "song" */
export type Song_On_Conflict = {
  constraint: Song_Constraint;
  update_columns?: Array<Song_Update_Column>;
  where?: Maybe<Song_Bool_Exp>;
};

/** Ordering options when selecting data from "song". */
export type Song_Order_By = {
  author?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lyrics_aggregate?: Maybe<Lyric_Aggregate_Order_By>;
  order?: Maybe<Order_By>;
  original_title?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: song */
export type Song_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "song" */
export enum Song_Select_Column {
  /** column name */
  Author = 'author',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Order = 'order',
  /** column name */
  OriginalTitle = 'original_title',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "song" */
export type Song_Set_Input = {
  author?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  order?: Maybe<Scalars['Int']>;
  original_title?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Song_Stddev_Fields = {
  order?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Song_Stddev_Pop_Fields = {
  order?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Song_Stddev_Samp_Fields = {
  order?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Song_Sum_Fields = {
  order?: Maybe<Scalars['Int']>;
};

/** update columns of table "song" */
export enum Song_Update_Column {
  /** column name */
  Author = 'author',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Order = 'order',
  /** column name */
  OriginalTitle = 'original_title',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Song_Var_Pop_Fields = {
  order?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Song_Var_Samp_Fields = {
  order?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Song_Variance_Fields = {
  order?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "speaker" */
export type Speaker = {
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  image?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  priority?: Maybe<Scalars['Int']>;
  /** An array relationship */
  sessions: Array<Session>;
  /** An aggregate relationship */
  sessions_aggregate: Session_Aggregate;
  /** An array relationship */
  topics: Array<Topic>;
  /** An aggregate relationship */
  topics_aggregate: Topic_Aggregate;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "speaker" */
export type SpeakerSessionsArgs = {
  distinct_on?: Maybe<Array<Session_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Session_Order_By>>;
  where?: Maybe<Session_Bool_Exp>;
};


/** columns and relationships of "speaker" */
export type SpeakerSessions_AggregateArgs = {
  distinct_on?: Maybe<Array<Session_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Session_Order_By>>;
  where?: Maybe<Session_Bool_Exp>;
};


/** columns and relationships of "speaker" */
export type SpeakerTopicsArgs = {
  distinct_on?: Maybe<Array<Topic_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Topic_Order_By>>;
  where?: Maybe<Topic_Bool_Exp>;
};


/** columns and relationships of "speaker" */
export type SpeakerTopics_AggregateArgs = {
  distinct_on?: Maybe<Array<Topic_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Topic_Order_By>>;
  where?: Maybe<Topic_Bool_Exp>;
};

/** aggregated selection of "speaker" */
export type Speaker_Aggregate = {
  aggregate?: Maybe<Speaker_Aggregate_Fields>;
  nodes: Array<Speaker>;
};

/** aggregate fields of "speaker" */
export type Speaker_Aggregate_Fields = {
  avg?: Maybe<Speaker_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Speaker_Max_Fields>;
  min?: Maybe<Speaker_Min_Fields>;
  stddev?: Maybe<Speaker_Stddev_Fields>;
  stddev_pop?: Maybe<Speaker_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Speaker_Stddev_Samp_Fields>;
  sum?: Maybe<Speaker_Sum_Fields>;
  var_pop?: Maybe<Speaker_Var_Pop_Fields>;
  var_samp?: Maybe<Speaker_Var_Samp_Fields>;
  variance?: Maybe<Speaker_Variance_Fields>;
};


/** aggregate fields of "speaker" */
export type Speaker_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Speaker_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Speaker_Avg_Fields = {
  priority?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "speaker". All fields are combined with a logical 'AND'. */
export type Speaker_Bool_Exp = {
  _and?: Maybe<Array<Speaker_Bool_Exp>>;
  _not?: Maybe<Speaker_Bool_Exp>;
  _or?: Maybe<Array<Speaker_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  image?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  priority?: Maybe<Int_Comparison_Exp>;
  sessions?: Maybe<Session_Bool_Exp>;
  topics?: Maybe<Topic_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "speaker" */
export enum Speaker_Constraint {
  /** unique or primary key constraint */
  SpeakerPkey = 'speaker_pkey'
}

/** input type for incrementing numeric columns in table "speaker" */
export type Speaker_Inc_Input = {
  priority?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "speaker" */
export type Speaker_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['Int']>;
  sessions?: Maybe<Session_Arr_Rel_Insert_Input>;
  topics?: Maybe<Topic_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Speaker_Max_Fields = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Speaker_Min_Fields = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "speaker" */
export type Speaker_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Speaker>;
};

/** input type for inserting object relation for remote table "speaker" */
export type Speaker_Obj_Rel_Insert_Input = {
  data: Speaker_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Speaker_On_Conflict>;
};

/** on conflict condition type for table "speaker" */
export type Speaker_On_Conflict = {
  constraint: Speaker_Constraint;
  update_columns?: Array<Speaker_Update_Column>;
  where?: Maybe<Speaker_Bool_Exp>;
};

/** Ordering options when selecting data from "speaker". */
export type Speaker_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  priority?: Maybe<Order_By>;
  sessions_aggregate?: Maybe<Session_Aggregate_Order_By>;
  topics_aggregate?: Maybe<Topic_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: speaker */
export type Speaker_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "speaker" */
export enum Speaker_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name',
  /** column name */
  Priority = 'priority',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "speaker" */
export type Speaker_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Speaker_Stddev_Fields = {
  priority?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Speaker_Stddev_Pop_Fields = {
  priority?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Speaker_Stddev_Samp_Fields = {
  priority?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Speaker_Sum_Fields = {
  priority?: Maybe<Scalars['Int']>;
};

/** update columns of table "speaker" */
export enum Speaker_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name',
  /** column name */
  Priority = 'priority',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Speaker_Var_Pop_Fields = {
  priority?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Speaker_Var_Samp_Fields = {
  priority?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Speaker_Variance_Fields = {
  priority?: Maybe<Scalars['Float']>;
};

export type Subscription_Root = {
  /** fetch data from the table: "lyric" */
  lyric: Array<Lyric>;
  /** fetch aggregated fields from the table: "lyric" */
  lyric_aggregate: Lyric_Aggregate;
  /** fetch data from the table: "lyric" using primary key columns */
  lyric_by_pk?: Maybe<Lyric>;
  /** fetch data from the table: "notification" */
  notification: Array<Notification>;
  /** fetch aggregated fields from the table: "notification" */
  notification_aggregate: Notification_Aggregate;
  /** fetch data from the table: "notification" using primary key columns */
  notification_by_pk?: Maybe<Notification>;
  /** fetch data from the table: "page" */
  page: Array<Page>;
  /** fetch aggregated fields from the table: "page" */
  page_aggregate: Page_Aggregate;
  /** fetch data from the table: "page" using primary key columns */
  page_by_pk?: Maybe<Page>;
  /** fetch data from the table: "session" */
  session: Array<Session>;
  /** fetch aggregated fields from the table: "session" */
  session_aggregate: Session_Aggregate;
  /** fetch data from the table: "session" using primary key columns */
  session_by_pk?: Maybe<Session>;
  /** fetch data from the table: "song" */
  song: Array<Song>;
  /** fetch aggregated fields from the table: "song" */
  song_aggregate: Song_Aggregate;
  /** fetch data from the table: "song" using primary key columns */
  song_by_pk?: Maybe<Song>;
  /** fetch data from the table: "speaker" */
  speaker: Array<Speaker>;
  /** fetch aggregated fields from the table: "speaker" */
  speaker_aggregate: Speaker_Aggregate;
  /** fetch data from the table: "speaker" using primary key columns */
  speaker_by_pk?: Maybe<Speaker>;
  /** fetch data from the table: "topic" */
  topic: Array<Topic>;
  /** fetch aggregated fields from the table: "topic" */
  topic_aggregate: Topic_Aggregate;
  /** fetch data from the table: "topic" using primary key columns */
  topic_by_pk?: Maybe<Topic>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
};


export type Subscription_RootLyricArgs = {
  distinct_on?: Maybe<Array<Lyric_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Lyric_Order_By>>;
  where?: Maybe<Lyric_Bool_Exp>;
};


export type Subscription_RootLyric_AggregateArgs = {
  distinct_on?: Maybe<Array<Lyric_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Lyric_Order_By>>;
  where?: Maybe<Lyric_Bool_Exp>;
};


export type Subscription_RootLyric_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootNotificationArgs = {
  distinct_on?: Maybe<Array<Notification_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notification_Order_By>>;
  where?: Maybe<Notification_Bool_Exp>;
};


export type Subscription_RootNotification_AggregateArgs = {
  distinct_on?: Maybe<Array<Notification_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notification_Order_By>>;
  where?: Maybe<Notification_Bool_Exp>;
};


export type Subscription_RootNotification_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootPageArgs = {
  distinct_on?: Maybe<Array<Page_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Page_Order_By>>;
  where?: Maybe<Page_Bool_Exp>;
};


export type Subscription_RootPage_AggregateArgs = {
  distinct_on?: Maybe<Array<Page_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Page_Order_By>>;
  where?: Maybe<Page_Bool_Exp>;
};


export type Subscription_RootPage_By_PkArgs = {
  title: Scalars['String'];
};


export type Subscription_RootSessionArgs = {
  distinct_on?: Maybe<Array<Session_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Session_Order_By>>;
  where?: Maybe<Session_Bool_Exp>;
};


export type Subscription_RootSession_AggregateArgs = {
  distinct_on?: Maybe<Array<Session_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Session_Order_By>>;
  where?: Maybe<Session_Bool_Exp>;
};


export type Subscription_RootSession_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootSongArgs = {
  distinct_on?: Maybe<Array<Song_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Song_Order_By>>;
  where?: Maybe<Song_Bool_Exp>;
};


export type Subscription_RootSong_AggregateArgs = {
  distinct_on?: Maybe<Array<Song_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Song_Order_By>>;
  where?: Maybe<Song_Bool_Exp>;
};


export type Subscription_RootSong_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootSpeakerArgs = {
  distinct_on?: Maybe<Array<Speaker_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Speaker_Order_By>>;
  where?: Maybe<Speaker_Bool_Exp>;
};


export type Subscription_RootSpeaker_AggregateArgs = {
  distinct_on?: Maybe<Array<Speaker_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Speaker_Order_By>>;
  where?: Maybe<Speaker_Bool_Exp>;
};


export type Subscription_RootSpeaker_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootTopicArgs = {
  distinct_on?: Maybe<Array<Topic_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Topic_Order_By>>;
  where?: Maybe<Topic_Bool_Exp>;
};


export type Subscription_RootTopic_AggregateArgs = {
  distinct_on?: Maybe<Array<Topic_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Topic_Order_By>>;
  where?: Maybe<Topic_Bool_Exp>;
};


export type Subscription_RootTopic_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


export type Subscription_RootUser_By_PkArgs = {
  id: Scalars['uuid'];
};


/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "topic" */
export type Topic = {
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  location?: Maybe<Scalars['String']>;
  /** An object relationship */
  session: Session;
  session_id: Scalars['uuid'];
  /** An object relationship */
  speaker?: Maybe<Speaker>;
  speaker_id?: Maybe<Scalars['uuid']>;
  subject?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "topic" */
export type Topic_Aggregate = {
  aggregate?: Maybe<Topic_Aggregate_Fields>;
  nodes: Array<Topic>;
};

/** aggregate fields of "topic" */
export type Topic_Aggregate_Fields = {
  count: Scalars['Int'];
  max?: Maybe<Topic_Max_Fields>;
  min?: Maybe<Topic_Min_Fields>;
};


/** aggregate fields of "topic" */
export type Topic_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Topic_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "topic" */
export type Topic_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Topic_Max_Order_By>;
  min?: Maybe<Topic_Min_Order_By>;
};

/** input type for inserting array relation for remote table "topic" */
export type Topic_Arr_Rel_Insert_Input = {
  data: Array<Topic_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Topic_On_Conflict>;
};

/** Boolean expression to filter rows from the table "topic". All fields are combined with a logical 'AND'. */
export type Topic_Bool_Exp = {
  _and?: Maybe<Array<Topic_Bool_Exp>>;
  _not?: Maybe<Topic_Bool_Exp>;
  _or?: Maybe<Array<Topic_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  location?: Maybe<String_Comparison_Exp>;
  session?: Maybe<Session_Bool_Exp>;
  session_id?: Maybe<Uuid_Comparison_Exp>;
  speaker?: Maybe<Speaker_Bool_Exp>;
  speaker_id?: Maybe<Uuid_Comparison_Exp>;
  subject?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "topic" */
export enum Topic_Constraint {
  /** unique or primary key constraint */
  TopicPkey = 'topic_pkey'
}

/** input type for inserting data into table "topic" */
export type Topic_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  location?: Maybe<Scalars['String']>;
  session?: Maybe<Session_Obj_Rel_Insert_Input>;
  session_id?: Maybe<Scalars['uuid']>;
  speaker?: Maybe<Speaker_Obj_Rel_Insert_Input>;
  speaker_id?: Maybe<Scalars['uuid']>;
  subject?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Topic_Max_Fields = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  location?: Maybe<Scalars['String']>;
  session_id?: Maybe<Scalars['uuid']>;
  speaker_id?: Maybe<Scalars['uuid']>;
  subject?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "topic" */
export type Topic_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  location?: Maybe<Order_By>;
  session_id?: Maybe<Order_By>;
  speaker_id?: Maybe<Order_By>;
  subject?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Topic_Min_Fields = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  location?: Maybe<Scalars['String']>;
  session_id?: Maybe<Scalars['uuid']>;
  speaker_id?: Maybe<Scalars['uuid']>;
  subject?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "topic" */
export type Topic_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  location?: Maybe<Order_By>;
  session_id?: Maybe<Order_By>;
  speaker_id?: Maybe<Order_By>;
  subject?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "topic" */
export type Topic_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Topic>;
};

/** on conflict condition type for table "topic" */
export type Topic_On_Conflict = {
  constraint: Topic_Constraint;
  update_columns?: Array<Topic_Update_Column>;
  where?: Maybe<Topic_Bool_Exp>;
};

/** Ordering options when selecting data from "topic". */
export type Topic_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  location?: Maybe<Order_By>;
  session?: Maybe<Session_Order_By>;
  session_id?: Maybe<Order_By>;
  speaker?: Maybe<Speaker_Order_By>;
  speaker_id?: Maybe<Order_By>;
  subject?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: topic */
export type Topic_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "topic" */
export enum Topic_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Location = 'location',
  /** column name */
  SessionId = 'session_id',
  /** column name */
  SpeakerId = 'speaker_id',
  /** column name */
  Subject = 'subject',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "topic" */
export type Topic_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  location?: Maybe<Scalars['String']>;
  session_id?: Maybe<Scalars['uuid']>;
  speaker_id?: Maybe<Scalars['uuid']>;
  subject?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "topic" */
export enum Topic_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Location = 'location',
  /** column name */
  SessionId = 'session_id',
  /** column name */
  SpeakerId = 'speaker_id',
  /** column name */
  Subject = 'subject',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "user" */
export type User = {
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  password: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  username: Scalars['String'];
};

/** aggregated selection of "user" */
export type User_Aggregate = {
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
  count: Scalars['Int'];
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
};


/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: Maybe<Array<User_Bool_Exp>>;
  _not?: Maybe<User_Bool_Exp>;
  _or?: Maybe<Array<User_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  password?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  username?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
  /** unique or primary key constraint */
  UserPkey = 'user_pkey'
}

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  password?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  password?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  password?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
};

/** on conflict condition type for table "user" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns?: Array<User_Update_Column>;
  where?: Maybe<User_Bool_Exp>;
};

/** Ordering options when selecting data from "user". */
export type User_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

/** primary key columns input for table: user */
export type User_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Password = 'password',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  password?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** update columns of table "user" */
export enum User_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Password = 'password',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Username = 'username'
}


/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

export type CreatePageMutationVariables = Exact<{
  title: Scalars['String'];
  content?: Maybe<Scalars['String']>;
  meta?: Maybe<Scalars['jsonb']>;
}>;


export type CreatePageMutation = { insert_page?: Maybe<(
    Pick<Page_Mutation_Response, 'affected_rows'>
    & { returning: Array<PageFragment> }
  )> };

export type GetNotificationsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetNotificationsQuery = { notification: Array<Pick<Notification, 'id' | 'title' | 'content' | 'published_at' | 'isRead'>> };

export type GetScheduleQueryVariables = Exact<{ [key: string]: never; }>;


export type GetScheduleQuery = { session: Array<(
    Pick<Session, 'id' | 'name' | 'begins_at' | 'ends_at' | 'location' | 'description' | 'is_main_event'>
    & { speaker?: Maybe<SpeakerFragment>, topics: Array<TopicFragment> }
  )> };

export type GetSettingsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSettingsQuery = Pick<Query_Root, 'isDarkTheme'>;

export type GetSongsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSongsQuery = { song: Array<(
    Pick<Song, 'author' | 'id' | 'created_at' | 'order' | 'original_title' | 'title' | 'updated_at'>
    & { lyrics: Array<LyricsFragment> }
  )> };

export type GetSpeakerSessionsQueryVariables = Exact<{
  speaker_id: Scalars['uuid'];
}>;


export type GetSpeakerSessionsQuery = { session: Array<Pick<Session, 'id' | 'name' | 'begins_at' | 'location'>>, topic: Array<(
    Pick<Topic, 'id' | 'subject' | 'location'>
    & { session: Pick<Session, 'begins_at'> }
  )> };

export type GetSpeakersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSpeakersQuery = { speaker: Array<Pick<Speaker, 'id' | 'name' | 'description' | 'image' | 'priority'>> };

export type LyricsFragment = Pick<Lyric, 'id' | 'song_id' | 'header' | 'content' | 'created_at' | 'updated_at'>;

export type PageFragment = Pick<Page, 'title' | 'content' | 'meta'>;

export type SpeakerFragment = Pick<Speaker, 'id' | 'name' | 'description' | 'image'>;

export type TopicFragment = (
  Pick<Topic, 'id' | 'subject' | 'description' | 'location'>
  & { speaker?: Maybe<SpeakerFragment> }
);

export const LyricsFragmentDoc = gql`
    fragment lyrics on lyric {
  id
  song_id
  header
  content
  created_at
  updated_at
}
    `;
export const PageFragmentDoc = gql`
    fragment page on page {
  title
  content
  meta
}
    `;
export const SpeakerFragmentDoc = gql`
    fragment speaker on speaker {
  id
  name
  description
  image
}
    `;
export const TopicFragmentDoc = gql`
    fragment topic on topic {
  id
  subject
  description
  location
  speaker {
    ...speaker
  }
}
    ${SpeakerFragmentDoc}`;
export const CreatePageDocument = gql`
    mutation createPage($title: String!, $content: String, $meta: jsonb) {
  insert_page(objects: {title: $title, content: $content, meta: $meta}) {
    affected_rows
    returning {
      ...page
    }
  }
}
    ${PageFragmentDoc}`;
export type CreatePageMutationFn = Apollo.MutationFunction<CreatePageMutation, CreatePageMutationVariables>;

/**
 * __useCreatePageMutation__
 *
 * To run a mutation, you first call `useCreatePageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPageMutation, { data, loading, error }] = useCreatePageMutation({
 *   variables: {
 *      title: // value for 'title'
 *      content: // value for 'content'
 *      meta: // value for 'meta'
 *   },
 * });
 */
export function useCreatePageMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreatePageMutation, CreatePageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreatePageMutation, CreatePageMutationVariables>(CreatePageDocument, options);
      }
export type CreatePageMutationHookResult = ReturnType<typeof useCreatePageMutation>;
export type CreatePageMutationResult = Apollo.MutationResult<CreatePageMutation>;
export type CreatePageMutationOptions = Apollo.BaseMutationOptions<CreatePageMutation, CreatePageMutationVariables>;
export const GetNotificationsDocument = gql`
    query getNotifications {
  notification(order_by: {published_at: desc}) {
    id
    title
    content
    published_at
    isRead @client
  }
}
    `;

/**
 * __useGetNotificationsQuery__
 *
 * To run a query within a React component, call `useGetNotificationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNotificationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNotificationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetNotificationsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetNotificationsQuery, GetNotificationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetNotificationsQuery, GetNotificationsQueryVariables>(GetNotificationsDocument, options);
      }
export function useGetNotificationsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetNotificationsQuery, GetNotificationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetNotificationsQuery, GetNotificationsQueryVariables>(GetNotificationsDocument, options);
        }
export type GetNotificationsQueryHookResult = ReturnType<typeof useGetNotificationsQuery>;
export type GetNotificationsLazyQueryHookResult = ReturnType<typeof useGetNotificationsLazyQuery>;
export type GetNotificationsQueryResult = Apollo.QueryResult<GetNotificationsQuery, GetNotificationsQueryVariables>;
export const GetScheduleDocument = gql`
    query getSchedule {
  session(order_by: {begins_at: asc}) {
    id
    name
    begins_at
    ends_at
    location
    description
    is_main_event
    speaker {
      ...speaker
    }
    topics(order_by: {subject: asc}) {
      ...topic
    }
  }
}
    ${SpeakerFragmentDoc}
${TopicFragmentDoc}`;

/**
 * __useGetScheduleQuery__
 *
 * To run a query within a React component, call `useGetScheduleQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetScheduleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetScheduleQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetScheduleQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetScheduleQuery, GetScheduleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetScheduleQuery, GetScheduleQueryVariables>(GetScheduleDocument, options);
      }
export function useGetScheduleLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetScheduleQuery, GetScheduleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetScheduleQuery, GetScheduleQueryVariables>(GetScheduleDocument, options);
        }
export type GetScheduleQueryHookResult = ReturnType<typeof useGetScheduleQuery>;
export type GetScheduleLazyQueryHookResult = ReturnType<typeof useGetScheduleLazyQuery>;
export type GetScheduleQueryResult = Apollo.QueryResult<GetScheduleQuery, GetScheduleQueryVariables>;
export const GetSettingsDocument = gql`
    query getSettings {
  isDarkTheme @client
}
    `;

/**
 * __useGetSettingsQuery__
 *
 * To run a query within a React component, call `useGetSettingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSettingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSettingsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSettingsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetSettingsQuery, GetSettingsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetSettingsQuery, GetSettingsQueryVariables>(GetSettingsDocument, options);
      }
export function useGetSettingsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetSettingsQuery, GetSettingsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetSettingsQuery, GetSettingsQueryVariables>(GetSettingsDocument, options);
        }
export type GetSettingsQueryHookResult = ReturnType<typeof useGetSettingsQuery>;
export type GetSettingsLazyQueryHookResult = ReturnType<typeof useGetSettingsLazyQuery>;
export type GetSettingsQueryResult = Apollo.QueryResult<GetSettingsQuery, GetSettingsQueryVariables>;
export const GetSongsDocument = gql`
    query getSongs {
  song(order_by: {order: asc}) {
    author
    id
    created_at
    order
    original_title
    title
    updated_at
    lyrics(order_by: {order: asc}) {
      ...lyrics
    }
  }
}
    ${LyricsFragmentDoc}`;

/**
 * __useGetSongsQuery__
 *
 * To run a query within a React component, call `useGetSongsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSongsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSongsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSongsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetSongsQuery, GetSongsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetSongsQuery, GetSongsQueryVariables>(GetSongsDocument, options);
      }
export function useGetSongsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetSongsQuery, GetSongsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetSongsQuery, GetSongsQueryVariables>(GetSongsDocument, options);
        }
export type GetSongsQueryHookResult = ReturnType<typeof useGetSongsQuery>;
export type GetSongsLazyQueryHookResult = ReturnType<typeof useGetSongsLazyQuery>;
export type GetSongsQueryResult = Apollo.QueryResult<GetSongsQuery, GetSongsQueryVariables>;
export const GetSpeakerSessionsDocument = gql`
    query getSpeakerSessions($speaker_id: uuid!) {
  session(where: {speaker_id: {_eq: $speaker_id}}) {
    id
    name
    begins_at
    location
  }
  topic(where: {speaker_id: {_eq: $speaker_id}}) {
    id
    subject
    location
    session {
      begins_at
    }
  }
}
    `;

/**
 * __useGetSpeakerSessionsQuery__
 *
 * To run a query within a React component, call `useGetSpeakerSessionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSpeakerSessionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSpeakerSessionsQuery({
 *   variables: {
 *      speaker_id: // value for 'speaker_id'
 *   },
 * });
 */
export function useGetSpeakerSessionsQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetSpeakerSessionsQuery, GetSpeakerSessionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetSpeakerSessionsQuery, GetSpeakerSessionsQueryVariables>(GetSpeakerSessionsDocument, options);
      }
export function useGetSpeakerSessionsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetSpeakerSessionsQuery, GetSpeakerSessionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetSpeakerSessionsQuery, GetSpeakerSessionsQueryVariables>(GetSpeakerSessionsDocument, options);
        }
export type GetSpeakerSessionsQueryHookResult = ReturnType<typeof useGetSpeakerSessionsQuery>;
export type GetSpeakerSessionsLazyQueryHookResult = ReturnType<typeof useGetSpeakerSessionsLazyQuery>;
export type GetSpeakerSessionsQueryResult = Apollo.QueryResult<GetSpeakerSessionsQuery, GetSpeakerSessionsQueryVariables>;
export const GetSpeakersDocument = gql`
    query getSpeakers {
  speaker(order_by: {priority: asc}) {
    id
    name
    description
    image
    priority
  }
}
    `;

/**
 * __useGetSpeakersQuery__
 *
 * To run a query within a React component, call `useGetSpeakersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSpeakersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSpeakersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSpeakersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetSpeakersQuery, GetSpeakersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetSpeakersQuery, GetSpeakersQueryVariables>(GetSpeakersDocument, options);
      }
export function useGetSpeakersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetSpeakersQuery, GetSpeakersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetSpeakersQuery, GetSpeakersQueryVariables>(GetSpeakersDocument, options);
        }
export type GetSpeakersQueryHookResult = ReturnType<typeof useGetSpeakersQuery>;
export type GetSpeakersLazyQueryHookResult = ReturnType<typeof useGetSpeakersLazyQuery>;
export type GetSpeakersQueryResult = Apollo.QueryResult<GetSpeakersQuery, GetSpeakersQueryVariables>;