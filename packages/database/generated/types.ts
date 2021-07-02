export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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
  __typename?: 'UserInfo';
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

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
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
  __typename?: 'notification';
  content?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  published_at?: Maybe<Scalars['timestamptz']>;
  title: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "notification" */
export type Notification_Aggregate = {
  __typename?: 'notification_aggregate';
  aggregate?: Maybe<Notification_Aggregate_Fields>;
  nodes: Array<Notification>;
};

/** aggregate fields of "notification" */
export type Notification_Aggregate_Fields = {
  __typename?: 'notification_aggregate_fields';
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
  __typename?: 'notification_max_fields';
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  published_at?: Maybe<Scalars['timestamptz']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Notification_Min_Fields = {
  __typename?: 'notification_min_fields';
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  published_at?: Maybe<Scalars['timestamptz']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "notification" */
export type Notification_Mutation_Response = {
  __typename?: 'notification_mutation_response';
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
  __typename?: 'page';
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
  __typename?: 'page_aggregate';
  aggregate?: Maybe<Page_Aggregate_Fields>;
  nodes: Array<Page>;
};

/** aggregate fields of "page" */
export type Page_Aggregate_Fields = {
  __typename?: 'page_aggregate_fields';
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
  __typename?: 'page_max_fields';
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Page_Min_Fields = {
  __typename?: 'page_min_fields';
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "page" */
export type Page_Mutation_Response = {
  __typename?: 'page_mutation_response';
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
  __typename?: 'query_root';
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
  __typename?: 'session';
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
  __typename?: 'session_aggregate';
  aggregate?: Maybe<Session_Aggregate_Fields>;
  nodes: Array<Session>;
};

/** aggregate fields of "session" */
export type Session_Aggregate_Fields = {
  __typename?: 'session_aggregate_fields';
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
  __typename?: 'session_max_fields';
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
  __typename?: 'session_min_fields';
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
  __typename?: 'session_mutation_response';
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

/** columns and relationships of "speaker" */
export type Speaker = {
  __typename?: 'speaker';
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
  __typename?: 'speaker_aggregate';
  aggregate?: Maybe<Speaker_Aggregate_Fields>;
  nodes: Array<Speaker>;
};

/** aggregate fields of "speaker" */
export type Speaker_Aggregate_Fields = {
  __typename?: 'speaker_aggregate_fields';
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
  __typename?: 'speaker_avg_fields';
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
  __typename?: 'speaker_max_fields';
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
  __typename?: 'speaker_min_fields';
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
  __typename?: 'speaker_mutation_response';
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
  __typename?: 'speaker_stddev_fields';
  priority?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Speaker_Stddev_Pop_Fields = {
  __typename?: 'speaker_stddev_pop_fields';
  priority?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Speaker_Stddev_Samp_Fields = {
  __typename?: 'speaker_stddev_samp_fields';
  priority?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Speaker_Sum_Fields = {
  __typename?: 'speaker_sum_fields';
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
  __typename?: 'speaker_var_pop_fields';
  priority?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Speaker_Var_Samp_Fields = {
  __typename?: 'speaker_var_samp_fields';
  priority?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Speaker_Variance_Fields = {
  __typename?: 'speaker_variance_fields';
  priority?: Maybe<Scalars['Float']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
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
  __typename?: 'topic';
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
  __typename?: 'topic_aggregate';
  aggregate?: Maybe<Topic_Aggregate_Fields>;
  nodes: Array<Topic>;
};

/** aggregate fields of "topic" */
export type Topic_Aggregate_Fields = {
  __typename?: 'topic_aggregate_fields';
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
  __typename?: 'topic_max_fields';
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
  __typename?: 'topic_min_fields';
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
  __typename?: 'topic_mutation_response';
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
  __typename?: 'user';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  password: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  username: Scalars['String'];
};

/** aggregated selection of "user" */
export type User_Aggregate = {
  __typename?: 'user_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
  __typename?: 'user_aggregate_fields';
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
  __typename?: 'user_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  password?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'user_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  password?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
  __typename?: 'user_mutation_response';
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
