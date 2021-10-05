import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** BigInt scalar type */
  BigInt: any;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  Json: any;
};

/** Account info */
export type Account = {
  __typename?: 'Account';
  accountOrganization?: Maybe<Array<OrganizationInfo>>;
  accountOrganizationDivisionsAccess: Array<Organization>;
  accountOrganizationDivisionsAccessCount?: Maybe<Scalars['Float']>;
  /** Account status object */
  accountStatus?: Maybe<AccountStatus>;
  accountStatusId: Scalars['Int'];
  accountSystemRoles: Array<SystemRole>;
  accountUrlTypes?: Maybe<Array<AccountUrlType>>;
  artists: Array<Artist>;
  /** Account billing info */
  billingInfo: AccountBillingInfo;
  /** Country object */
  country?: Maybe<Country>;
  countryId: Scalars['Int'];
  created: Scalars['DateTime'];
  /** Divisions that user belongs to */
  divisions?: Maybe<Array<Organization>>;
  email: Scalars['String'];
  /** Holds the generated token value, till it gets expired or the email update verification done successfully. */
  emailResetToken?: Maybe<Scalars['String']>;
  /** Holds the value to reset the original account email till it gets verified */
  emailToReset?: Maybe<Scalars['String']>;
  /** Returns organization features */
  features?: Maybe<Array<Feature>>;
  firstName: Scalars['String'];
  former?: Maybe<Scalars['Boolean']>;
  /** Primary ID */
  id: Scalars['Int'];
  ipcInfo: IpcInfo;
  /** Checks if user is in role Independent Project Creator */
  isAccountIPC: Scalars['Boolean'];
  isAdmin: Scalars['Boolean'];
  /** Checks if user is in role Casting Director */
  isCCD: Scalars['Boolean'];
  /** Checks if user is in role Independent Project Creator */
  isIPC: Scalars['Boolean'];
  /** Checks if the current/switched user is PC or not */
  isInPCContext: Scalars['Boolean'];
  lastArtistId?: Maybe<Scalars['Int']>;
  lastLogin?: Maybe<Scalars['DateTime']>;
  lastName: Scalars['String'];
  /** Legacy email */
  legacyEmail?: Maybe<Scalars['String']>;
  /** Legacy instance */
  legacyInstance?: Maybe<Scalars['String']>;
  /** Legacy login */
  legacyLogin?: Maybe<Scalars['String']>;
  linkedAccountDivisionCount?: Maybe<Scalars['Float']>;
  linkedAccountOrganization?: Maybe<Array<Organization>>;
  linkedOrganization?: Maybe<Scalars['Float']>;
  linkedToAccountId?: Maybe<Scalars['Int']>;
  loginAttemptCount?: Maybe<Scalars['Int']>;
  loginAttemptFailedAt?: Maybe<Scalars['DateTime']>;
  notificationSubscriptions: Array<NotificationTypeNotificationSubscription>;
  organizationDivisionsCount?: Maybe<Scalars['Float']>;
  /** Organizations that user belongs to */
  organizations?: Maybe<Array<Organization>>;
  passwordHash?: Maybe<Scalars['String']>;
  phone: Scalars['String'];
  /** Roster invitation token to hold the invitation token till logged in user will not create the profile using it */
  rosterInvitationToken?: Maybe<Scalars['String']>;
  subscription?: Maybe<ActiveSubscriptionModel>;
  /** system roles */
  systemRoles?: Maybe<Array<Scalars['String']>>;
  systemRolesIds?: Maybe<Array<Scalars['Float']>>;
  termsOfUse: Scalars['Boolean'];
  /** Time zone object */
  timeZone?: Maybe<TimeZone>;
  /** Updated at Date */
  updated?: Maybe<Scalars['DateTime']>;
};

/** Account info */
export type AccountAccountOrganizationArgs = {
  systemRoleCode?: Maybe<Array<Scalars['String']>>;
};

/** Account info */
export type AccountOrganizationsArgs = {
  systemRoleCode?: Maybe<Array<Scalars['String']>>;
};

export type AccountActiveOnboardedPaypal = {
  __typename?: 'AccountActiveOnboardedPaypal';
  accountId: Scalars['Float'];
  artistId: Scalars['Float'];
  legacyInstance: Scalars['String'];
  paypalCode: Scalars['String'];
};

/** Account billing info */
export type AccountBillingInfo = {
  __typename?: 'AccountBillingInfo';
  cardExpirationMonth?: Maybe<Scalars['Int']>;
  cardExpirationYear?: Maybe<Scalars['Int']>;
  cardType?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastFour?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
};

export type AccountContext = {
  __typename?: 'AccountContext';
  artistId?: Maybe<Scalars['Float']>;
  organizationId?: Maybe<Scalars['Float']>;
  role?: Maybe<ContextRole>;
};

/** Creates a user account based on given input values */
export type AccountCreateInput = {
  countryId: Scalars['ID'];
  /** Closest casting market for PC user */
  dmaId?: Maybe<Scalars['Int']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  /** Marketing option subscription option */
  marketingOptIn?: Maybe<Scalars['Boolean']>;
  password: Scalars['String'];
  phoneNumber: Scalars['String'];
  professionalBio?: Maybe<Scalars['String']>;
  profileAccessToken?: Maybe<Scalars['String']>;
  rosterInvitationToken?: Maybe<Scalars['String']>;
  systemRoleCode?: Maybe<SystemRoleEnum>;
  termsOfUse: Scalars['Boolean'];
  timeZoneId: Scalars['Float'];
};

export type AccountItem = {
  __typename?: 'AccountItem';
  accountStatus?: Maybe<AccountStatus>;
  accountSystemRole?: Maybe<Array<SystemRole>>;
  created?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  emailToReset?: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  id: Scalars['Float'];
  lastName: Scalars['String'];
  lastSuccessfulLogin?: Maybe<Scalars['DateTime']>;
  legacyEmail?: Maybe<Scalars['String']>;
  legacyInstance?: Maybe<Scalars['String']>;
  legacyLogin?: Maybe<Scalars['String']>;
  organizationIds?: Maybe<Array<AccountOrganizationItem>>;
  phone: Scalars['String'];
  updated?: Maybe<Scalars['DateTime']>;
};

export type AccountItemPagedList = {
  __typename?: 'AccountItemPagedList';
  data: Array<AccountItem>;
  page: Scalars['Int'];
  totalCount: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type AccountOrganizationItem = {
  __typename?: 'AccountOrganizationItem';
  admin?: Maybe<Scalars['Boolean']>;
  enabled?: Maybe<Scalars['Boolean']>;
  organizationId: Scalars['Float'];
  organizationParentId?: Maybe<Scalars['Float']>;
};

/** Get Onboarded Active Paypal Accounts Input */
export type AccountPaypalLocationInput = {
  /** Paypal locations */
  locations: Array<PaypalLocation>;
};

/** Account Recovery Type by EMAILANDPHONE|PROJECT|STAGE */
export const AccountRecoveryType = {
  EmailAndPhone: 'EmailAndPhone',
  Phone: 'Phone',
  Project: 'Project',
  StageName: 'StageName',
} as const;

export type AccountRecoveryType =
  typeof AccountRecoveryType[keyof typeof AccountRecoveryType];
export type AccountStatus = {
  __typename?: 'AccountStatus';
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

export type AccountUrlType = {
  __typename?: 'AccountUrlType';
  accountId: Scalars['Float'];
  /** Primary ID */
  id: Scalars['ID'];
  url: Scalars['String'];
  urlType: UrlType;
  urlTypeId: Scalars['Float'];
};

export type AccountsSystemRoleCodes = {
  __typename?: 'AccountsSystemRoleCodes';
  accountId: Scalars['Float'];
  /** Primary ID */
  id: Scalars['ID'];
  systemRoleCodes: Array<Scalars['String']>;
};

/** Subscription */
export type ActiveSubscriptionModel = {
  __typename?: 'ActiveSubscriptionModel';
  id: Scalars['ID'];
  nextBillingDate?: Maybe<Scalars['DateTime']>;
  plans?: Maybe<Array<PlanModel>>;
};

export type ActivityLog = {
  __typename?: 'ActivityLog';
  account?: Maybe<ActivityLogAccount>;
  auditionGroup?: Maybe<ActivityLogAuditionGroup>;
  auditionSession?: Maybe<ActivityLogAuditionSession>;
  calendarSlot?: Maybe<ActivityLogCalendarSlot>;
  id: Scalars['ID'];
  note?: Maybe<ActivityLogNote>;
  operation: ActivityLogOperation;
  organization?: Maybe<ActivityLogOrganization>;
  presentation?: Maybe<ActivityLogPresentation>;
  presentationFolder?: Maybe<ActivityLogPresentationFolder>;
  presentationGroup?: Maybe<ActivityLogPresentationGroup>;
  project?: Maybe<ActivityLogProject>;
  request?: Maybe<ActivityLogRequest>;
  role?: Maybe<ActivityLogRole>;
  schedule?: Maybe<ActivityLogSchedule>;
  submission?: Maybe<ActivityLogSubmission>;
  timestamp: Scalars['DateTime'];
  type: ActivityLogType;
};

export type ActivityLogAccount = {
  __typename?: 'ActivityLogAccount';
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['Int'];
  isCCD: Scalars['Boolean'];
  lastName: Scalars['String'];
};

export type ActivityLogAuditionGroup = {
  __typename?: 'ActivityLogAuditionGroup';
  id: Scalars['Int'];
  mediaByType?: Maybe<MediaByType>;
  medias?: Maybe<Array<WfMedia>>;
  name?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
};

export type ActivityLogAuditionSession = {
  __typename?: 'ActivityLogAuditionSession';
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
};

export type ActivityLogCalendarSlot = {
  __typename?: 'ActivityLogCalendarSlot';
  id: Scalars['Int'];
  slotEndTime: Scalars['DateTime'];
  slotStartTime: Scalars['DateTime'];
};

export type ActivityLogNote = {
  __typename?: 'ActivityLogNote';
  comment: Scalars['String'];
  noteModifier?: Maybe<WfBasicSettingModel>;
};

export const ActivityLogOperation = {
  Delete: 'DELETE',
  Insert: 'INSERT',
  Update: 'UPDATE',
} as const;

export type ActivityLogOperation =
  typeof ActivityLogOperation[keyof typeof ActivityLogOperation];
export type ActivityLogOrganization = {
  __typename?: 'ActivityLogOrganization';
  abbreviation?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
};

export type ActivityLogPagedList = {
  __typename?: 'ActivityLogPagedList';
  data: Array<ActivityLog>;
  page: Scalars['Int'];
  totalCount: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type ActivityLogPresentation = {
  __typename?: 'ActivityLogPresentation';
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type ActivityLogPresentationFolder = {
  __typename?: 'ActivityLogPresentationFolder';
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type ActivityLogPresentationGroup = {
  __typename?: 'ActivityLogPresentationGroup';
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
};

export type ActivityLogProject = {
  __typename?: 'ActivityLogProject';
  id: Scalars['Int'];
  note: Scalars['String'];
};

export type ActivityLogRequest = {
  __typename?: 'ActivityLogRequest';
  answer?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  masterRequestId?: Maybe<Scalars['String']>;
  mediaByType?: Maybe<MediaByType>;
  medias?: Maybe<Array<WfMedia>>;
  note?: Maybe<Scalars['String']>;
  question?: Maybe<Scalars['String']>;
  status: Scalars['String'];
  talentInstructions?: Maybe<Scalars['String']>;
  type: RequestType;
};

export type ActivityLogRole = {
  __typename?: 'ActivityLogRole';
  id: Scalars['Int'];
  internalName: Scalars['String'];
  name: Scalars['String'];
};

export type ActivityLogSchedule = {
  __typename?: 'ActivityLogSchedule';
  id: Scalars['Int'];
  scheduleDate?: Maybe<Scalars['DateTime']>;
  scheduleType?: Maybe<Scalars['String']>;
};

export type ActivityLogSubmission = {
  __typename?: 'ActivityLogSubmission';
  id: Scalars['Int'];
  media?: Maybe<Array<WfMedia>>;
  mediaByType?: Maybe<MediaByType>;
  note?: Maybe<Scalars['String']>;
  requestMedia?: Maybe<Array<WfMedia>>;
  requestMediaByType?: Maybe<MediaByType>;
  selectionTagCode?: Maybe<Scalars['String']>;
  selectionTagId?: Maybe<Scalars['Float']>;
  selectionTagName?: Maybe<Scalars['String']>;
  statusCode?: Maybe<Scalars['String']>;
  statusId?: Maybe<Scalars['Float']>;
  statusName?: Maybe<Scalars['String']>;
};

export const ActivityLogType = {
  FastCaptureNoteAdded: 'FAST_CAPTURE_NOTE_ADDED',
  RequestAskquestion: 'REQUEST_ASKQUESTION',
  RequestAudition: 'REQUEST_AUDITION',
  RequestCallback: 'REQUEST_CALLBACK',
  RequestMedia: 'REQUEST_MEDIA',
  SubmissionAddedToAuditionGroup: 'SUBMISSION_ADDED_TO_AUDITION_GROUP',
  SubmissionAddedToPresentationGroup: 'SUBMISSION_ADDED_TO_PRESENTATION_GROUP',
  SubmissionCreated: 'SUBMISSION_CREATED',
  SubmissionNoteAdded: 'SUBMISSION_NOTE_ADDED',
  SubmissionSelectiontagAssigned: 'SUBMISSION_SELECTIONTAG_ASSIGNED',
  SubmissionSelectiontagUpdated: 'SUBMISSION_SELECTIONTAG_UPDATED',
  SubmissionStatusUpdated: 'SUBMISSION_STATUS_UPDATED',
  SubmissionUpdated: 'SUBMISSION_UPDATED',
} as const;

export type ActivityLogType = typeof ActivityLogType[keyof typeof ActivityLogType];
export type AddArtistFreeCreditsInput = {
  artistId: Scalars['Int'];
  credits: Scalars['Int'];
  itemCode: BillingItemCode;
};

/** Add Note Input Type */
export type AddNoteInput = {
  /** Text of the note */
  comment: Scalars['String'];
  /** Entity ID that note will be assigned to */
  entityId: Scalars['BigInt'];
  /** Entity Type CODE */
  entityTypeCode: Scalars['String'];
  /** Note Modifier CODE */
  noteModifierCode?: Maybe<Scalars['String']>;
  /** Note Type CODE */
  noteTypeCode?: Maybe<Scalars['String']>;
  /** Organization Id that will take assignment from the context if not supplied explicitly */
  organizationId?: Maybe<Scalars['Int']>;
};

/** Add or Delete List Entities Input */
export type AddOrDeleteListEntitiesInput = {
  /** List entities ids */
  entitiesIds: Array<Scalars['BigInt']>;
  /** List Id */
  listId: Scalars['Float'];
};

/** Add Profile List Input */
export type AddProfileListInput = {
  /** List Name */
  listName: Scalars['String'];
  /** List of profile ids */
  profileIds: Array<Scalars['Int']>;
};

export type AddProfileToAuditionGroupAddInInput = {
  auditionGroupId: Scalars['Int'];
  email: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  roleId: Scalars['Int'];
  stageName: Scalars['String'];
};

export type AddProfileToAuditionGroupInput = {
  auditionGroupId: Scalars['Int'];
  profileId: Scalars['Int'];
  roleId: Scalars['Int'];
  tileSchemeValueCode: TileSchemeValueEnum;
};

/** Adds a Profile to Project. */
export type AddProfileToProjectInput = {
  profileId: Scalars['ID'];
  projectId: Scalars['ID'];
  roleId: Scalars['ID'];
  /** Submission Status CODE */
  submissionStatusCode: Scalars['String'];
  /** Field is DEPRECATED!!! */
  submissionStatusId?: Maybe<Scalars['ID']>;
  /** Tile Schema Value CODE */
  tileSchemeValueCode: Scalars['String'];
  /** Field is DEPRECATED!!! */
  tileSchemeValueId?: Maybe<Scalars['ID']>;
};

export type AddProfileToTimeSlotAddInInput = {
  email: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  roleId: Scalars['Int'];
  scheduleId: Scalars['Int'];
  slotId: Scalars['Int'];
  stageName: Scalars['String'];
};

export type AddProfileToTimeSlotInput = {
  profileId: Scalars['Int'];
  roleId: Scalars['Int'];
  scheduleId: Scalars['Int'];
  slotId: Scalars['Int'];
  tileSchemeValue: TileSchemeValueEnum;
};

/** Add Representative List Input */
export type AddRepresentativeListInput = {
  /** List Name */
  listName: Scalars['String'];
  /** List of repIds */
  representativeIds: Array<Scalars['Float']>;
};

/** Input object for assigning submissions to the timeframe */
export type AddSubmissionsToTimeframeInput = {
  /** List of role Ids */
  roleIds?: Maybe<Array<Scalars['Int']>>;
  /** Schedule Id */
  scheduleId?: Maybe<Scalars['Int']>;
  searchInput?: Maybe<SubmissionSearchInput>;
  /** Calendar Slot Id */
  slotId?: Maybe<Scalars['Int']>;
  /** Slot's start time */
  startTime?: Maybe<Scalars['DateTime']>;
  /** List of submission Ids */
  submissionIds: Array<Scalars['BigInt']>;
  tileSchemeValueCodes?: Maybe<Array<Scalars['String']>>;
  /** Timeframe Id */
  timeframeId?: Maybe<Scalars['Int']>;
};

/** AddTimeframe input type */
export type AddTimeframeInput = {
  /** End time */
  endTime: Scalars['DateTime'];
  isBreak?: Maybe<Scalars['Boolean']>;
  /** Timeframe Name */
  name?: Maybe<Scalars['String']>;
  /** Input type for Role Talents */
  roleTalents: Array<RoleTalent>;
  /** Schedule Id */
  scheduleId: Scalars['ID'];
  /** Slot Durations */
  slotDurations?: Maybe<Array<Scalars['Float']>>;
  /** Start time */
  startTime: Scalars['DateTime'];
};

/** Address object type */
export type Address = {
  __typename?: 'Address';
  /** City */
  city: Scalars['String'];
  country?: Maybe<Country>;
  /** Address Id */
  id: Scalars['Int'];
  /** Line #1 of address */
  line1: Scalars['String'];
  /** Line #2 of address */
  line2: Scalars['String'];
  /** Line #3 of address */
  line3: Scalars['String'];
  /** Note */
  note: Scalars['String'];
  /** Other detail */
  otherDetail: Scalars['String'];
  /** Postal code */
  postalCode: Scalars['String'];
  state?: Maybe<State>;
  /** Division state ID */
  stateId: Scalars['Int'];
};

/** Address Input Type */
export type AddressInput = {
  addressId?: Maybe<Scalars['Int']>;
  /** Address Line 1 */
  addressLine1: Scalars['String'];
  /** Address Line 2 */
  addressLine2?: Maybe<Scalars['String']>;
  /** Address Line 3 */
  addressLine3?: Maybe<Scalars['String']>;
  /** Address Type CODE */
  addressTypeCode: Scalars['String'];
  /** City */
  city: Scalars['String'];
  /** Country Id */
  countryId?: Maybe<Scalars['Int']>;
  /** Division City Id */
  divisionCityId?: Maybe<Scalars['Int']>;
  /** Note */
  note?: Maybe<Scalars['String']>;
  /** Other detail */
  otherDetail?: Maybe<Scalars['String']>;
  /** Postal Code */
  postalCode?: Maybe<Scalars['String']>;
  /** State / Province CODE */
  stateCode?: Maybe<Scalars['String']>;
  /** State Id */
  stateId?: Maybe<Scalars['Int']>;
};

/** Input type for AgeRangeInput */
export type AgeRangeInput = {
  /** The minimum age a talent can play */
  ageMax?: Maybe<Scalars['Int']>;
  /** The maximum age a talent can play */
  ageMin?: Maybe<Scalars['Int']>;
  /** Ages set in months. Default value: true */
  inMonths?: Maybe<Scalars['Boolean']>;
};

export type AgencyCallListDivisionGroup = {
  __typename?: 'AgencyCallListDivisionGroup';
  id: Scalars['Int'];
  organizationName: Scalars['String'];
  phone?: Maybe<Array<Scalars['String']>>;
  submissions: Array<AgencyCallListSubmission>;
};

export type AgencyCallListProjectInfo = {
  __typename?: 'AgencyCallListProjectInfo';
  adAgency?: Maybe<Scalars['String']>;
  castingDirector?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  producer?: Maybe<Scalars['String']>;
  productionCompany?: Maybe<Scalars['String']>;
};

export type AgencyCallListReportCreateInput = {
  scheduleId: Scalars['Int'];
};

export type AgencyCallListReportModel = {
  __typename?: 'AgencyCallListReportModel';
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<Scalars['Int']>;
  csvFileName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  organizationId?: Maybe<Scalars['Int']>;
  payload?: Maybe<AgencyCallListReportPayloadModel>;
  reportType: ReportTypeEnum;
  scheduleId: Scalars['Int'];
  status: ReportStatusEnum;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

/** Agency Call List Report Payload */
export type AgencyCallListReportPayloadModel = {
  __typename?: 'AgencyCallListReportPayloadModel';
  divisionLogo?: Maybe<ReportMediaModel>;
  divisionName?: Maybe<Scalars['String']>;
  personalSubmissions: Array<AgencyCallListSubmission>;
  projectInfo: AgencyCallListProjectInfo;
  reppedSubmissions: Array<AgencyCallListDivisionGroup>;
  scheduleInfo: AgencyCallListScheduleInfo;
};

export type AgencyCallListScheduleInfo = {
  __typename?: 'AgencyCallListScheduleInfo';
  scheduleDate: Scalars['DateTime'];
  scheduleName: Scalars['String'];
  scheduleType: Scalars['String'];
};

export type AgencyCallListSubmission = {
  __typename?: 'AgencyCallListSubmission';
  cover?: Maybe<ReportMediaModel>;
  deletedProfile: Scalars['Boolean'];
  id: Scalars['BigInt'];
  isPersonal: Scalars['Boolean'];
  note?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  roleName: Scalars['String'];
  scheduleResponseStatus?: Maybe<Scalars['String']>;
  slotStartDate: Scalars['DateTime'];
  stageName?: Maybe<Scalars['String']>;
  talentUnions?: Maybe<Array<Scalars['String']>>;
};

/** Creates or update Rep organization contact, address, publishing categories, dma and workingLocation on given input values */
export type AgentOrganizationInput = {
  /** Representation age categories */
  ageCategories?: Maybe<Array<Scalars['Float']>>;
  /** DMA id */
  dmaId: Scalars['Float'];
  /** Organization input */
  organizationInput: OrganizationInput;
  /** Primary working organization */
  primaryWorkingLocation: Array<Scalars['Float']>;
  /** Publishing categories */
  publishingCategories: Array<Scalars['Float']>;
};

/** Input type for PC project approve */
export type ApprovePcProjectInput = {
  projectId?: Maybe<Scalars['Int']>;
  /** Send notifications to talent (FFY) */
  sendNotifications?: Maybe<Scalars['Boolean']>;
};

/** Artist info */
export type Artist = {
  __typename?: 'Artist';
  account?: Maybe<Account>;
  /** Artist Id  */
  artistId: Scalars['Int'];
  artistSubscriptions?: Maybe<Array<SubscriptionModel>>;
  /** Created Date */
  created: Scalars['DateTime'];
  /** First Name */
  firstName: Scalars['String'];
  /** Primary ID */
  id: Scalars['ID'];
  /** Last Name */
  lastName: Scalars['String'];
  mediaCounts?: Maybe<Array<MediaCount>>;
  /** True if artist is minor */
  minor: Scalars['Boolean'];
  notificationPhone?: Maybe<Scalars['String']>;
  profiles?: Maybe<Array<Profile>>;
};

/** Artist info */
export type ArtistMediaCountsArgs = {
  isLocked: Scalars['Boolean'];
};

/** Artist info */
export type ArtistProfilesArgs = {
  oldest?: Maybe<Scalars['Boolean']>;
};

/** Artist Media */
export type ArtistMedia = {
  __typename?: 'ArtistMedia';
  /** Profile media details - is primary, order */
  artistMediaProfile?: Maybe<Array<ArtistMediaProfile>>;
  /** Primary ID */
  id: Scalars['ID'];
  /** The media object */
  media: Media;
  /** Media Id */
  mediaId: Scalars['ID'];
};

/** Basic profile media */
export type ArtistMediaProfile = {
  __typename?: 'ArtistMediaProfile';
  /** Checks if profile have granted access to roster */
  accessGranted: Scalars['Boolean'];
  accountId?: Maybe<Scalars['Float']>;
  ageInYears?: Maybe<Scalars['Boolean']>;
  /** Profile Artist ID */
  artistId?: Maybe<Scalars['Float']>;
  /** Profile audio assets */
  audios?: Maybe<Array<ProfileMedia>>;
  billingItems?: Maybe<Array<BillingItemModel>>;
  /** Blurb */
  blurb?: Maybe<Scalars['String']>;
  /** Bust Object */
  bust?: Maybe<Bust>;
  /** Chest size Object */
  chestSize?: Maybe<ChestSize>;
  /** Coat Object */
  coat?: Maybe<Coat>;
  /** Conflicts for the profile */
  conflicts: Array<ProfileConflict>;
  contactInfo?: Maybe<ProfileContactInfo>;
  cover?: Maybe<Media>;
  /** Created at Date */
  created?: Maybe<Scalars['DateTime']>;
  /** Profile Credits */
  credits: Array<Credit>;
  /** Profile Credits Count */
  creditsCount: Scalars['Int'];
  /** Cup size Object */
  cupSize?: Maybe<CupSize>;
  /** Date of birth */
  dateOfBirth?: Maybe<Scalars['DateTime']>;
  /** stores/holds the id of the person who has deactivated the profile */
  deactivatedBy?: Maybe<Scalars['Float']>;
  /** Default submission note */
  defaultSubmissionNote?: Maybe<Scalars['String']>;
  /** Document type(s) */
  documentTypes?: Maybe<Array<Document>>;
  /** Profile document assets */
  documents?: Maybe<Array<ProfileMedia>>;
  /** Dress size Object */
  dressSize?: Maybe<ClothesSize>;
  /** Ethnic Appearance(s) */
  ethnicAppearances?: Maybe<Array<ProfileEthnicAppearance>>;
  /** Eye Color Object */
  eyeColor?: Maybe<EyeColor>;
  /** Facial Hair Type(s) */
  facialHair?: Maybe<Array<FacialHair>>;
  /** Gender Appearance(s) */
  genderAppearances?: Maybe<Array<GenderAppearance>>;
  /** Glove size Object */
  gloveSize?: Maybe<Glove>;
  /** GUID */
  guid?: Maybe<Scalars['String']>;
  /** Hair Color Object */
  hairColor?: Maybe<HairColor>;
  /** Hair Style Object */
  hairStyle?: Maybe<HairStyle>;
  /** Profile has audio reel */
  hasAudioReel?: Maybe<Scalars['Boolean']>;
  hasAuditionHistory: Scalars['Boolean'];
  /** has Representation */
  hasRepresentation?: Maybe<Scalars['Boolean']>;
  /** Profile has resume */
  hasResume?: Maybe<Scalars['Boolean']>;
  /** Profile has video reel */
  hasVideoReel?: Maybe<Scalars['Boolean']>;
  /** Hat size Object */
  hatSize?: Maybe<HatSize>;
  /** Height Object */
  height?: Maybe<Height>;
  /**
   * Deprecated
   * @deprecated This field is redundant as profile media visibility depends only on existence in profile_media table.
   */
  hidden: Scalars['Boolean'];
  /** Hide credit year */
  hideCreditYear: Scalars['Boolean'];
  /** Hip size Object */
  hipSize?: Maybe<Hip>;
  /** Primary ID */
  id: Scalars['ID'];
  /** Inseam size Object */
  inseam?: Maybe<Inseam>;
  isActive: Scalars['Boolean'];
  /**
   * Returns true if profile was deactivated by a Rep user, returns false if
   * profile was deactivated by a Talent, returns null when there is no information
   * about the deactivating account
   */
  isDeactivatedByReps?: Maybe<Scalars['Boolean']>;
  isDropped: Scalars['Boolean'];
  isInactive: Scalars['Boolean'];
  /** If Profile is overscaled */
  isOverscaled: Scalars['Boolean'];
  /** Identify the personal or represented profile. */
  isPersonal: Scalars['Boolean'];
  isPlayableAgeLockedToTalent: Scalars['Boolean'];
  /** Is media primary (primary photo, video reel or audio reel) */
  isPrimary: Scalars['Boolean'];
  /** Last note for the profile */
  lastNote?: Maybe<Note>;
  /** Manager Email */
  managerEmail?: Maybe<Scalars['String']>;
  /** All profile media */
  mediaAssets?: Maybe<Array<ProfileMedia>>;
  /** Profile's primary photo */
  mediaSummary: Array<MediaCount>;
  /** Is minor */
  minor?: Maybe<Scalars['Boolean']>;
  /** Multiple Birth Object */
  multipleBirth?: Maybe<MultipleBirth>;
  /** Neck size Object */
  neck?: Maybe<Neck>;
  /** Note */
  note?: Maybe<Scalars['String']>;
  /** Notes for the profile */
  notes: Array<Note>;
  /** Order of display for the media */
  order?: Maybe<Scalars['Int']>;
  organization?: Maybe<Organization>;
  organizations?: Maybe<Array<Organization>>;
  /** Other experiences */
  otherExperiences?: Maybe<Scalars['String']>;
  /** Overscale Note */
  overscaleNote?: Maybe<Scalars['String']>;
  /** Parent Name */
  parent?: Maybe<Scalars['String']>;
  /** Profile phone */
  phone?: Maybe<Scalars['String']>;
  /** Profile photo assets */
  photos?: Maybe<Array<ProfileMedia>>;
  /** Note about piercing */
  piercingNote?: Maybe<Scalars['String']>;
  /** The age a talent can play */
  playableAge?: Maybe<Scalars['Float']>;
  /** The minimum age a talent can play */
  playableAgeMax?: Maybe<Scalars['Float']>;
  /** The maximum age a talent can play */
  playableAgeMin?: Maybe<Scalars['Float']>;
  /**
   * Date of pregnancy
   * @deprecated This field is deprecated and will be deleted once the compatible changes at the front end will be added everyewhere for pregnancyDue reference. Use pregnancyDue instead
   */
  pregnancy?: Maybe<Scalars['DateTime']>;
  /** Date of pregnancy */
  pregnancyDue?: Maybe<Scalars['DateTime']>;
  /** Profession */
  profession?: Maybe<Scalars['String']>;
  /** Get the artist media profile */
  profile: Profile;
  /** Access Token of a Profile, generated by Granting Access or Creating a Profile */
  profileAccessToken?: Maybe<Scalars['String']>;
  /** ProfileAccessToken created date */
  profileAccessTokenCreated?: Maybe<Scalars['DateTime']>;
  /** Profile Account System Role */
  profileAccountRole?: Maybe<Scalars['String']>;
  /** Get profile bookouts */
  profileBookOuts: Array<ProfileBookOuts>;
  /** Gender Identities */
  profileGenderIdentities?: Maybe<Array<ProfileGenderIdentity>>;
  /** Primary ID */
  profileId: Scalars['ID'];
  /** The Profile List ids where current profile participated */
  profileLists: Array<Scalars['Int']>;
  profileMainDivision?: Maybe<Organization>;
  profileMainOrganization?: Maybe<Organization>;
  /** media assets */
  profileMedia?: Maybe<Array<ProfileMedia>>;
  /** Profile Pants */
  profilePants: Array<Pants>;
  /** Profile pets */
  profilePets: Array<ProfilePet>;
  /** Profile piercings */
  profilePiercings: Array<Piercing>;
  /** Profile shoe sizes */
  profileShoeSizes: Array<ProfileShoeSize>;
  /** Profile general size */
  profileSizes: Array<ProfileSize>;
  /** Profile Status Object */
  profileStatus?: Maybe<ProfileStatus>;
  profileStatusId?: Maybe<Scalars['Int']>;
  /** Profile TshirtSize */
  profileTshirtSizes: Array<TShirtSize>;
  /** Profile Type */
  profileType?: Maybe<ProfileType>;
  /** Profile vehicles */
  profileVehicles: Array<ProfileVehicle>;
  /** profileVisibility Object */
  profileVisiblities?: Maybe<Array<ProfileVisibility>>;
  /** Wardrobes */
  profileWardrobes?: Maybe<Array<ProfileWardrobe>>;
  /** Project Type */
  projectType?: Maybe<Scalars['String']>;
  /** Prop Type(s) */
  props?: Maybe<Array<ProfileProp>>;
  /** Job Persuing Type(s) */
  pursuing?: Maybe<Array<Pursuing>>;
  /** User's resume document */
  resume?: Maybe<ProfileMedia>;
  /** SeekingRepresentation Object */
  seekingRepresentations?: Maybe<Array<SeekingRepresentation>>;
  selectionType: ProfileSelectionType;
  /** Skills and their Levels */
  skills?: Maybe<Array<ProfileSkill>>;
  /** Sleeve Object */
  sleeve?: Maybe<Sleeve>;
  /** Sport equipments */
  sportEquipments?: Maybe<Array<ProfileSportEquipment>>;
  /** Stage Name */
  stageName: Scalars['String'];
  /** Returns submission */
  submission?: Maybe<Submission>;
  /** Submission request's media assets */
  submissionRequestMedia: Array<SubmissionMedia>;
  /** Profile email */
  talentEmail?: Maybe<Scalars['String']>;
  /** Talent unions */
  talentUnions?: Maybe<Array<TalentProfileUnion>>;
  /** Profile tattoo */
  tattoo?: Maybe<Tattoo>;
  /** Tattoo Note */
  tattooNote?: Maybe<Scalars['String']>;
  /** Underbust size Object */
  underbust?: Maybe<UnderBust>;
  /** Unique Attribute Type(s) */
  uniqueAttributes?: Maybe<Array<UniqueAttribute>>;
  /** Updated at Date */
  updated?: Maybe<Scalars['DateTime']>;
  /** Profile video assets */
  videos?: Maybe<Array<ProfileMedia>>;
  /** Waist Object */
  waist?: Maybe<Waist>;
  /** Weight Object */
  weight?: Maybe<Weight>;
  /** Willingness Objects */
  willingness: Array<Willingness>;
  /** Work permit expiration date */
  workPermitExp?: Maybe<Scalars['DateTime']>;
  /** Working Locations */
  workingLocations?: Maybe<Array<ProfileWorkingLocation>>;
};

/** Basic profile media */
export type ArtistMediaProfileHasAuditionHistoryArgs = {
  organizationId?: Maybe<Scalars['Float']>;
};

/** Basic profile media */
export type ArtistMediaProfilePhotosArgs = {
  isPrimary?: Maybe<Scalars['Boolean']>;
};

/** Basic profile media */
export type ArtistMediaProfileSelectionTypeArgs = {
  roleId: Scalars['Float'];
};

/** Basic profile media */
export type ArtistMediaProfileSubmissionArgs = {
  roleId: Scalars['Float'];
};

/** Basic profile media */
export type ArtistMediaProfileSubmissionRequestMediaArgs = {
  roleId: Scalars['Float'];
};

/** Subscription Input */
export type ArtistSubscriptionInput = {
  /** Artist id */
  artistId: Scalars['Int'];
};

/** Input for Updating Artist */
export type ArtistUpdateInput = {
  /** Account Id  */
  accountId?: Maybe<Scalars['Int']>;
  /** Artist Id  */
  artistId: Scalars['Int'];
  /** First Name */
  firstName?: Maybe<Scalars['String']>;
  /** Last Name */
  lastName?: Maybe<Scalars['String']>;
  /** Organization Id  */
  organizationId?: Maybe<Scalars['Int']>;
  /** Profile access token granted by Rep */
  profileAccessToken?: Maybe<Scalars['String']>;
};

/** 'Ask Question Request' Type */
export type AskQuestionRequest = {
  __typename?: 'AskQuestionRequest';
  createdAt: Scalars['DateTime'];
  dueDate?: Maybe<Scalars['DateTime']>;
  dueDateTimeZone?: Maybe<WfTimeZone>;
  id: Scalars['ID'];
  includeSides: Scalars['Boolean'];
  messageForRepresentatives?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  projectId: Scalars['Int'];
  question: Scalars['String'];
  responses: AskQuestionResponsePagedList;
  shouldResend: Scalars['Boolean'];
  submissionIds: Array<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

/** 'Ask Question Request' Type */
export type AskQuestionRequestResponsesArgs = {
  page: PageInput;
};

export type AskQuestionRequestInput = {
  dueDate?: Maybe<Scalars['DateTime']>;
  dueDateTimeZoneId?: Maybe<Scalars['Int']>;
  excludeSubmissionIds?: Maybe<Array<Scalars['Int']>>;
  includeSides: Scalars['Boolean'];
  isDraft: Scalars['Boolean'];
  messageForRepresentatives?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  projectId: Scalars['Int'];
  question: Scalars['String'];
  roleIds?: Maybe<Array<Scalars['Int']>>;
  submissionIds: Array<Scalars['Int']>;
  tileSchemeValueCodes?: Maybe<Array<Scalars['String']>>;
};

export const AskQuestionRequestStatus = {
  Answered: 'ANSWERED',
  Cancelled: 'CANCELLED',
  NotSent: 'NOT_SENT',
  Pending: 'PENDING',
} as const;

export type AskQuestionRequestStatus =
  typeof AskQuestionRequestStatus[keyof typeof AskQuestionRequestStatus];
export type AskQuestionResponse = {
  __typename?: 'AskQuestionResponse';
  answer?: Maybe<Scalars['String']>;
  cancelledAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  repliedAt?: Maybe<Scalars['DateTime']>;
  sentAt?: Maybe<Scalars['DateTime']>;
  status: AskQuestionRequestStatus;
  submission: WfSubmission;
  /** @deprecated Replaced with field 'submission'. */
  submissionId: Scalars['Float'];
};

export type AskQuestionResponseInput = {
  id: Scalars['ID'];
  message: Scalars['String'];
};

export type AskQuestionResponsePagedList = {
  __typename?: 'AskQuestionResponsePagedList';
  data: Array<AskQuestionResponse>;
  page: Scalars['Int'];
  totalCount: Scalars['Int'];
  totalPages: Scalars['Int'];
};

/** 'Ask Question Sub-Request' Type */
export type AskQuestionSubRequest = {
  __typename?: 'AskQuestionSubRequest';
  /** Cancellation note */
  cancellationNote?: Maybe<Scalars['String']>;
  dueDate?: Maybe<Scalars['DateTime']>;
  dueDateTimeZone?: Maybe<WfTimeZone>;
  /** Forwarded note */
  forwardNote?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  includeSides: Scalars['Boolean'];
  messageForRepresentatives?: Maybe<Scalars['String']>;
  profile?: Maybe<WfProfile>;
  project: WfProject;
  question: Scalars['String'];
  /** The date when response was sent */
  repliedAt?: Maybe<Scalars['DateTime']>;
  /** Reps Worksheet Status */
  repsWorksheetStatus: Scalars['String'];
  /** The answer to the question */
  response?: Maybe<Scalars['String']>;
  role: WfRole;
  /** The date when request was sent */
  sentAt: Scalars['DateTime'];
  status: AskQuestionRequestStatus;
  submission: WfSubmission;
  /** @deprecated Replaced with field 'submission'. */
  submissionId: Scalars['Int'];
};

export type AttachMediaToProfileInput = {
  /** Is media primary? (Primary photo, video reel or audio reel) */
  isPrimary?: Maybe<Scalars['Boolean']>;
  /** Media Id */
  mediaId: Scalars['Int'];
  /** Media Moderation Status Code can be found in Tackle box */
  mediaModerationStatusCode?: Maybe<Scalars['String']>;
  /** Media order of appearance */
  order?: Maybe<Scalars['Int']>;
  paid: Scalars['Boolean'];
  /** Profile Id */
  profileId: Scalars['Int'];
  tag?: Maybe<Scalars['String']>;
};

/** Audition address */
export type AuditionAddress = {
  __typename?: 'AuditionAddress';
  /** Address Line 1 */
  addressLine1?: Maybe<Scalars['String']>;
  /** Address Line 2 */
  addressLine2?: Maybe<Scalars['String']>;
  /** City */
  city?: Maybe<Scalars['String']>;
  /** Country */
  country?: Maybe<Array<Country>>;
  /** Address ID */
  id: Scalars['ID'];
  /** Location notes */
  locationNotes?: Maybe<Scalars['String']>;
  /** ZIP/Postal Code */
  postalCode?: Maybe<Scalars['String']>;
  /** State / Province */
  state?: Maybe<Array<State>>;
};

export type AuditionGroup = {
  __typename?: 'AuditionGroup';
  archived?: Maybe<Scalars['Boolean']>;
  /** Gets audition session */
  auditionSession?: Maybe<AuditionSession>;
  /** Id of audition session to which the audition session group is assigned */
  auditionSessionId: Scalars['Int'];
  cover?: Maybe<Media>;
  /** Created date of audition group */
  created: Scalars['DateTime'];
  /** Gets Account object whos created the audition group */
  createdBy?: Maybe<Account>;
  /** Id of audition session group */
  id: Scalars['Int'];
  /** Media Count */
  mediaCount?: Maybe<Array<MediaCount>>;
  /** Gets related to group media */
  medias?: Maybe<Array<AuditionGroupMedia>>;
  /** Name of audition session group */
  name?: Maybe<Scalars['String']>;
  /** Group order */
  order?: Maybe<Scalars['Int']>;
  /** Submissions Count */
  submissionCount?: Maybe<Scalars['BigInt']>;
  /** Gets related to group submissions */
  submissions?: Maybe<Array<Submission>>;
  /** Updated date of audition group */
  updated?: Maybe<Scalars['DateTime']>;
};

export type AuditionGroupSubmissionsArgs = {
  pageSize?: Maybe<Scalars['Float']>;
};

/** Audition Session Group input type */
export type AuditionGroupBulkUpdateInput = {
  /** Archive status */
  archived: Scalars['Boolean'];
};

/** Audition Session Group input type */
export type AuditionGroupInput = {
  /** Id of audition session to which the audition session group will be assigned */
  auditionSessionId?: Maybe<Scalars['Int']>;
  /** ID of the creator */
  createdBy?: Maybe<Scalars['Int']>;
  /** Name for audition session group */
  name?: Maybe<Scalars['String']>;
  /** Note for the group */
  note?: Maybe<Scalars['String']>;
  /** Order of appearance */
  order?: Maybe<Scalars['Int']>;
  /** Thumbnail. Id of existing media */
  thumbnailMediaId?: Maybe<Scalars['Int']>;
};

/** Represent relation between Audition Group and Media */
export type AuditionGroupMedia = {
  __typename?: 'AuditionGroupMedia';
  id: Scalars['Int'];
  /** Related media object */
  media: Media;
  /** Id of media */
  mediaId: Scalars['Int'];
  /** Name of relation */
  name: Scalars['String'];
  /** Order of appearance */
  order: Scalars['Int'];
};

/** Audition Group Media input type */
export type AuditionGroupMediaInput = {
  /** Id of audition group to which media will be added */
  auditionGroupId: Scalars['Int'];
  /** List of Media items */
  media: Array<AuditionGroupMediaItemInput>;
};

/** Media input type for Audition Group */
export type AuditionGroupMediaItemInput = {
  /** Id of existing Media */
  mediaId: Scalars['Int'];
  /** Name for the media */
  name?: Maybe<Scalars['String']>;
  /** Order of appearance */
  order?: Maybe<Scalars['Int']>;
};

export type AuditionGroupMediaOrderUpdateInput = {
  auditionGroupId: Scalars['Int'];
  groupMediaId: Scalars['Int'];
  moveAfterGroupMediaId?: Maybe<Scalars['Int']>;
};

/** Paginated result with [AuditionGroup] objects */
export type AuditionGroupPaginatedResult = {
  __typename?: 'AuditionGroupPaginatedResult';
  /** List of AuditionGroup objects */
  objects: Array<AuditionGroup>;
  /** Current page */
  page: Scalars['Int'];
  /** Total count of rows */
  totalCount: Scalars['Int'];
  /** Total pages */
  totalPages: Scalars['Int'];
};

/** Audition Group Talent */
export type AuditionGroupTalent = {
  __typename?: 'AuditionGroupTalent';
  /** Audition Group ids */
  auditionGroupIds?: Maybe<Array<Scalars['Int']>>;
  /** Talent profile Id */
  profileId?: Maybe<Scalars['Int']>;
};

export type AuditionHistory = {
  __typename?: 'AuditionHistory';
  auditionGroups?: Maybe<Array<AuditionHistorySessionGroupItem>>;
  date: Scalars['DateTime'];
  projectName: Scalars['String'];
  roleName: Scalars['String'];
  snapshotMedia?: Maybe<Media>;
  submissionStatus: SubmissionStatus;
};

/** Paginated result with [AuditionHistory] objects */
export type AuditionHistoryPaginatedResult = {
  __typename?: 'AuditionHistoryPaginatedResult';
  /** List of AuditionHistory objects */
  objects: Array<AuditionHistory>;
  /** Current page */
  page: Scalars['Int'];
  /** Total count of rows */
  totalCount: Scalars['Int'];
  /** Total pages */
  totalPages: Scalars['Int'];
};

export type AuditionHistorySessionGroupItem = {
  __typename?: 'AuditionHistorySessionGroupItem';
  auditionSession: AuditionHistorySessionItem;
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type AuditionHistorySessionItem = {
  __typename?: 'AuditionHistorySessionItem';
  id: Scalars['Int'];
  name: Scalars['String'];
};

/** Audition Presentation input type */
export type AuditionPresentationInput = {
  /** List of linked audition sessions. Required for Live Presentation */
  auditionSessionIds?: Maybe<Array<Scalars['Int']>>;
  isLive?: Maybe<Scalars['Boolean']>;
  /** Name for audition presentation */
  name: Scalars['String'];
  /** Project ID */
  projectId: Scalars['Int'];
};

/** Audition session */
export type AuditionSession = {
  __typename?: 'AuditionSession';
  /** Created date of audition session */
  created: Scalars['DateTime'];
  /** Returns Account object who`s created the audition session */
  createdBy?: Maybe<Account>;
  /** ID of audition session */
  id: Scalars['Int'];
  /** Name of audition session */
  name?: Maybe<Scalars['String']>;
  /** Note of audition session */
  note?: Maybe<Scalars['String']>;
  /** Order of appearence of audition session */
  order: Scalars['Int'];
  /** Project id */
  projectId?: Maybe<Scalars['Int']>;
  /** Gets AuditionSource object */
  source?: Maybe<AuditionSource>;
  /** Submissions Count */
  submissionCount?: Maybe<Scalars['BigInt']>;
};

export type AuditionSessionCreateInput = {
  /** ID of the creator */
  createdBy?: Maybe<Scalars['Int']>;
  /** Name of audition session */
  name: Scalars['String'];
  /** ID of the project to which will be assigned audition session */
  projectId: Scalars['Int'];
  /** Source of audition session */
  sourceCode: Scalars['String'];
};

/** Paginated result with [AuditionSession] objects */
export type AuditionSessionPaginatedResult = {
  __typename?: 'AuditionSessionPaginatedResult';
  /** List of AuditionSession objects */
  objects: Array<AuditionSession>;
  /** Current page */
  page: Scalars['Int'];
  /** Total count of rows */
  totalCount: Scalars['Int'];
  /** Total pages */
  totalPages: Scalars['Int'];
};

export type AuditionSessionUpdateInput = {
  /** ID of existing audition submission */
  id: Scalars['Int'];
  /** Name of audition session */
  name?: Maybe<Scalars['String']>;
  /** Note of audition session */
  note?: Maybe<Scalars['String']>;
  /** Order of appearance */
  order?: Maybe<Scalars['Int']>;
  /** Source of audition session */
  sourceCode?: Maybe<Scalars['String']>;
};

/** AuditionSource object */
export type AuditionSource = {
  __typename?: 'AuditionSource';
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

/** Audition Submission Snapshot input type */
export type AuditionSubmissionSnapshotInput = {
  /** Snapshot Id */
  snapshotId: Scalars['Int'];
  /** Submission Ids */
  submissionId: Scalars['BigInt'];
};

/** Audition Talent Pool */
export type AuditionTalentPool = {
  __typename?: 'AuditionTalentPool';
  /** ID of audition session */
  auditionSessionId?: Maybe<Scalars['Int']>;
  /** Slot End Time */
  endTime?: Maybe<Scalars['DateTime']>;
  /** ID of audition session */
  id?: Maybe<Scalars['ID']>;
  /** Schedule Date */
  scheduleDate?: Maybe<Scalars['DateTime']>;
  /** Slot Start Time */
  startTime?: Maybe<Scalars['DateTime']>;
  /** List of Submissions */
  submissions?: Maybe<Array<Submission>>;
};

export type AuthToken = {
  __typename?: 'AuthToken';
  access: Scalars['String'];
  refresh: Scalars['String'];
};

export type AuthTokenItem = {
  __typename?: 'AuthTokenItem';
  access?: Maybe<Scalars['String']>;
  refresh?: Maybe<Scalars['String']>;
};

/** Context object for base email context */
export type BaseEmailContext = {
  __typename?: 'BaseEmailContext';
  buttonText: Scalars['String'];
  buttonURL: Scalars['String'];
  heading: Scalars['String'];
  receiverName: Scalars['String'];
  roleCode: Array<Scalars['String']>;
};

export type BaseEmailContextNotificationContextAndRecipient = {
  __typename?: 'BaseEmailContextNotificationContextAndRecipient';
  context: BaseEmailContext;
  to?: Maybe<Scalars['String']>;
  toAccountId?: Maybe<Scalars['Int']>;
  toOrgId?: Maybe<Scalars['Int']>;
  toProfileId?: Maybe<Scalars['Int']>;
};

/** Base object */
export type BasicSetting = {
  __typename?: 'BasicSetting';
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

/** BAU Account Object */
export type BauAccount = {
  __typename?: 'BauAccount';
  accountStatusId: Scalars['ID'];
  countryId?: Maybe<Scalars['Float']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  hasPreMappedOrg?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  isLegacyEmailUnique?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  legacyAccountID?: Maybe<Scalars['Float']>;
  legacyClaim?: Maybe<Scalars['Float']>;
  legacyEmail?: Maybe<Scalars['String']>;
  legacyInstance?: Maybe<Scalars['String']>;
  legacyLogin?: Maybe<Scalars['String']>;
  legacyPersonID?: Maybe<Scalars['Float']>;
  onboardingStatus?: Maybe<Scalars['String']>;
  onboardingStatusId: Scalars['ID'];
  paypalAccountCode?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  primaryAccountId?: Maybe<Scalars['Float']>;
  recurlyAccountCode?: Maybe<Scalars['String']>;
  roles?: Maybe<Array<SystemRole>>;
  status?: Maybe<Scalars['String']>;
  timeZoneId?: Maybe<Scalars['Float']>;
  vip?: Maybe<Scalars['Boolean']>;
};

/** Creates or update a user account based on given input values */
export type BauAccountInput = {
  audience: Scalars['String'];
  countryId: Scalars['ID'];
  /** Closest casting market for PC user */
  dmaId?: Maybe<Scalars['ID']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
  termsOfUse: Scalars['Boolean'];
  timeZoneId: Scalars['Float'];
};

/** BAU Artist Object */
export type BauArtist = {
  __typename?: 'BauArtist';
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastName?: Maybe<Scalars['String']>;
  profiles?: Maybe<Array<BauProfile>>;
};

/** Update or Create B21 Profile from BAU */
export type BauArtistInput = {
  /** Artist first name */
  firstName: Scalars['String'];
  /** Is artist minor */
  isMinor: Scalars['Boolean'];
  /** Artist last name */
  lastName: Scalars['String'];
  /** Personal Profile Info */
  personalProfile: BauPersonalProfileInput;
  /** Primary Artist ID */
  primaryArtistId?: Maybe<Scalars['Int']>;
  /** Array of Bau Profiles */
  profiles: Array<BauProfileInput>;
};

/** Organization Object */
export type BauCountry = {
  __typename?: 'BauCountry';
  /** Country code */
  code?: Maybe<Scalars['String']>;
  /** Continent id */
  continentId?: Maybe<Scalars['Int']>;
  /** Has dma */
  hasDma?: Maybe<Scalars['Boolean']>;
  /** Has states */
  hasState?: Maybe<Scalars['Boolean']>;
  /** Country id */
  id: Scalars['Int'];
  /** Country name */
  name?: Maybe<Scalars['String']>;
  /** Supporting country id */
  supportingCountryId?: Maybe<Scalars['Int']>;
};

export type BauHeight = {
  __typename?: 'BauHeight';
  cm: Scalars['Int'];
  /** Primary ID */
  id: Scalars['ID'];
  imperial: Scalars['String'];
  inch: Scalars['Float'];
};

export type BauLoginByLegacyDataInput = {
  /** Recovery Type EMAILANDPHONE|PROJECT|STAGE */
  accountRecoveryType: AccountRecoveryType;
  email: Scalars['String'];
  /** project name for validation */
  instance?: Maybe<Scalars['String']>;
  /** additional account id */
  migratedAccountID?: Maybe<Scalars['Float']>;
  phoneEnding: Scalars['String'];
  /** project name for validation */
  projectName?: Maybe<Scalars['String']>;
  /** stage name for validation */
  stageName?: Maybe<Scalars['String']>;
  username: Scalars['String'];
};

/** Creates a user account based on given input values */
export type BauLoginInput = {
  instance: Scalars['String'];
  migratedAccountID: Scalars['Float'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type BauMedia = {
  __typename?: 'BauMedia';
  created?: Maybe<Scalars['DateTime']>;
  filename?: Maybe<Scalars['String']>;
  guid: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  /** Primary ID */
  id: Scalars['ID'];
  length?: Maybe<Scalars['Float']>;
  mediaFileKey?: Maybe<Scalars['String']>;
  mediaId: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  tag?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  width?: Maybe<Scalars['Int']>;
};

export type BauPcAccountUpdateInput = {
  companyName?: Maybe<Scalars['String']>;
  facebookLink?: Maybe<Scalars['String']>;
  imdbLink?: Maybe<Scalars['String']>;
  instagramLink?: Maybe<Scalars['String']>;
  institutionName?: Maybe<Scalars['String']>;
  portfolio?: Maybe<Scalars['String']>;
  professionalBio?: Maybe<Scalars['String']>;
  twitterLink?: Maybe<Scalars['String']>;
  vimeoLink?: Maybe<Scalars['String']>;
  youtubeLink?: Maybe<Scalars['String']>;
};

/** Update or Create B21 Profile from BAU */
export type BauPersonalProfileInput = {
  /** Artist ID */
  artistId?: Maybe<Scalars['Int']>;
  /** Profile max playable age */
  maxPlayableAge: Scalars['Int'];
  /** Profile min playable age */
  minPlayableAge: Scalars['Int'];
  /** Profile from REP|UNREP|NEW */
  personalProfileFrom: ProfileFromEnum;
  /** Profile primary appearance ID */
  primaryAppearanceId: Scalars['Int'];
  /** Profile primary location ID */
  primaryLocationId: Scalars['Int'];
  /** Profile ID */
  profileId: Scalars['Int'];
};

/** BAU Profile Object */
export type BauProfile = {
  __typename?: 'BauProfile';
  /** Profile Artist ID */
  artistId?: Maybe<Scalars['Int']>;
  /** Profile  date of birth */
  dateOfBirth?: Maybe<Scalars['DateTime']>;
  /** Profile Division ID */
  divisionId?: Maybe<Scalars['Int']>;
  /** Profile Division Name */
  divisionName?: Maybe<Scalars['String']>;
  /** Profile height */
  height?: Maybe<BauHeight>;
  /** Profile ID */
  id: Scalars['Int'];
  /** Profile is Personal? */
  isPersonal?: Maybe<Scalars['Boolean']>;
  /** Legacy Profile ID */
  legacyProfileId?: Maybe<Scalars['String']>;
  /** Profile Medias */
  medias?: Maybe<Array<BauMedia>>;
  /** Profile Playable Max Age */
  playableMaxAge?: Maybe<Scalars['Int']>;
  /** Profile Playable Min Age */
  playableMinAge?: Maybe<Scalars['Int']>;
  /** Profile Primary Working Location ID */
  primaryWorkingLocationId?: Maybe<Scalars['Int']>;
  /** Profile Primary Working Location Name */
  primaryWorkingLocationName?: Maybe<Scalars['String']>;
  /** Profile Stage Name */
  stageName?: Maybe<Scalars['String']>;
  /** Profile Status Object */
  status?: Maybe<ProfileStatus>;
  /** Profile talent union name */
  talentUnions?: Maybe<Array<BauTalentUnion>>;
  /** Profile weight */
  weight?: Maybe<BauWeight>;
};

/** Update or Create B21 Profile from BAU */
export type BauProfileInput = {
  /** Artist ID */
  artistId?: Maybe<Scalars['Int']>;
  /** Profile division (organization) ID */
  divisionId?: Maybe<Scalars['Int']>;
  /** Profile max playable age */
  maxPlayableAge: Scalars['Int'];
  /** Profile min playable age */
  minPlayableAge: Scalars['Int'];
  /** Profile primary appearance ID */
  primaryAppearanceId: Scalars['Int'];
  /** Profile primary location ID */
  primaryLocationId: Scalars['Int'];
  /** Profile ID */
  profileId: Scalars['Int'];
};

/** Update or Create B21 Profile from BAU */
export type BauProfileUpdateInput = {
  /** Array of Bau Artists */
  artists: Array<BauArtistInput>;
};

/** Talent Union object */
export type BauTalentUnion = {
  __typename?: 'BauTalentUnion';
  /** code */
  code: Scalars['String'];
  /** Is this enabled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

export type BauWeight = {
  __typename?: 'BauWeight';
  /** Primary ID */
  id: Scalars['ID'];
  kg: Scalars['Float'];
  lbs: Scalars['Int'];
};

export const BillingCode = {
  CbAnnual: 'cb_annual',
  CbM2m: 'cb_m2m',
  CbSemiannual: 'cb_semiannual',
  CbmhAnnual: 'cbmh_annual',
  CbmhM2m: 'cbmh_m2m',
  CbmhSemiannual: 'cbmh_semiannual',
  CbmhpuAnnual: 'cbmhpu_annual',
  CbmhpuM2m: 'cbmhpu_m2m',
  CbmhpuSemiannual: 'cbmhpu_semiannual',
  CbpuAnnual: 'cbpu_annual',
  CbpuM2m: 'cbpu_m2m',
  CbpuSemiannual: 'cbpu_semiannual',
  ConciergeAnnual: 'concierge_annual',
  ConciergeM2m: 'concierge_m2m',
  ConciergeSemiannual: 'concierge_semiannual',
  LaCbAnnual: 'la_cb_annual',
  LaCbM2m: 'la_cb_m2m',
  LaCbSemiannual: 'la_cb_semiannual',
  LaCbmhAnnual: 'la_cbmh_annual',
  LaCbmhM2m: 'la_cbmh_m2m',
  LaCbmhSemiannual: 'la_cbmh_semiannual',
  LaCbmuAnnual: 'la_cbmu_annual',
  LaCbmuM2m: 'la_cbmu_m2m',
  LaCbmuSemiannual: 'la_cbmu_semiannual',
  LaMhAnnual: 'la_mh_annual',
  LaMhM2m: 'la_mh_m2m',
  LaMhSemiannual: 'la_mh_semiannual',
  MhAnnual: 'mh_annual',
  MhM2m: 'mh_m2m',
  MhSemiannual: 'mh_semiannual',
  MhpuAnnual: 'mhpu_annual',
  MhpuM2m: 'mhpu_m2m',
  MhpuSemiannual: 'mhpu_semiannual',
  PremiumAnnual: 'premium_annual',
  PremiumComped: 'premium_comped',
  PremiumM2m: 'premium_m2m',
  PuAnnual: 'pu_annual',
  PuM2m: 'pu_m2m',
  PuSemiannual: 'pu_semiannual',
  Registration: 'registration',
} as const;

export type BillingCode = typeof BillingCode[keyof typeof BillingCode];
export const BillingItemCode = {
  AudioUpload: 'AUDIO_UPLOAD',
  MediaUpload: 'MEDIA_UPLOAD',
  PhotoUpload: 'PHOTO_UPLOAD',
  Submission: 'SUBMISSION',
  SystemAccess: 'SYSTEM_ACCESS',
  VideoUpload: 'VIDEO_UPLOAD',
  Registration: 'registration',
} as const;

export type BillingItemCode = typeof BillingItemCode[keyof typeof BillingItemCode];
/** Billing Item Input */
export type BillingItemInput = {
  /** Media Id */
  mediaId: Scalars['Int'];
};

export type BillingItemModel = {
  __typename?: 'BillingItemModel';
  availableCredit?: Maybe<Scalars['Int']>;
  code: Scalars['String'];
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  priceInCents?: Maybe<Scalars['Int']>;
  qty?: Maybe<Scalars['Int']>;
};

/** Billing Subscription Input */
export type BillingSubscriptionInput = {
  /** Billing Subscription code */
  code: Scalars['String'];
};

export type BookingCallListDivisionSubmissionsModel = {
  __typename?: 'BookingCallListDivisionSubmissionsModel';
  id?: Maybe<Scalars['Float']>;
  orgName?: Maybe<Scalars['String']>;
  orgParentName?: Maybe<Scalars['String']>;
  orgPhone?: Maybe<Array<Scalars['String']>>;
  submissions?: Maybe<Array<BookingCallListPersonalProfilesModel>>;
};

export type BookingCallListPersonalProfilesModel = {
  __typename?: 'BookingCallListPersonalProfilesModel';
  cover?: Maybe<ReportMediaModel>;
  deletedProfile: Scalars['Boolean'];
  id?: Maybe<Scalars['Int']>;
  isPersonal?: Maybe<Scalars['Boolean']>;
  note?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  roleName: Scalars['String'];
  roleRateSummary?: Maybe<Scalars['String']>;
  snapshotMedia?: Maybe<ReportMediaModel>;
  stageName?: Maybe<Scalars['String']>;
  talentUnion?: Maybe<Array<TalentUnionModel>>;
};

/** Booking Call List Report Payload */
export type BookingCallListReportPayloadModel = {
  __typename?: 'BookingCallListReportPayloadModel';
  castingCompanyLogo?: Maybe<ReportMediaModel>;
  divisionSubmissions: Array<BookingCallListDivisionSubmissionsModel>;
  personalSubmissions: Array<BookingCallListPersonalProfilesModel>;
  projectInfo: ProjectReportInfoModel;
};

export type BookingCallListsReportModel = {
  __typename?: 'BookingCallListsReportModel';
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<Scalars['Int']>;
  csvFileName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  organizationId?: Maybe<Scalars['Int']>;
  payload?: Maybe<BookingCallListReportPayloadModel>;
  projectId: Scalars['Int'];
  reportType: ReportTypeEnum;
  status: ReportStatusEnum;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type Bust = {
  __typename?: 'Bust';
  /** Imperial Feet Inches */
  IMPERIAL_FEET_INCHES?: Maybe<Scalars['String']>;
  /** Imperial Inches */
  IMPERIAL_INCHES: Scalars['Float'];
  /** Metric Centimeters */
  METRIC_CENTIMETERS: Scalars['Int'];
  /** Centimeters */
  cm: Scalars['Int'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** Inches */
  inch: Scalars['Float'];
  /** Inches rounded */
  inchRounded: Scalars['String'];
  /** Show in imperial UI */
  showInImperialUI: Scalars['Boolean'];
};

export type CdWorksheetFilterInput = {
  hasComments?: Maybe<Scalars['Boolean']>;
  hasPicks?: Maybe<Scalars['Boolean']>;
  hasRepresentation?: Maybe<Scalars['Boolean']>;
  projectId: Scalars['Int'];
  representativeIds?: Maybe<Array<Scalars['Int']>>;
  representativeListIds?: Maybe<Array<Scalars['Int']>>;
  roleIds?: Maybe<Array<Scalars['Int']>>;
  scheduleIds?: Maybe<Array<Scalars['Int']>>;
  sessionIds?: Maybe<Array<Scalars['Int']>>;
  stageName?: Maybe<Scalars['String']>;
  statusCodes?: Maybe<Array<Scalars['String']>>;
  tileSchemeValueCodes?: Maybe<Array<Scalars['String']>>;
};

/** Calendar Type object */
export type CalendarType = {
  __typename?: 'CalendarType';
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

export const CalendarTypeEnum = {
  Audition: 'AUDITION',
  Callback: 'CALLBACK',
} as const;

export type CalendarTypeEnum = typeof CalendarTypeEnum[keyof typeof CalendarTypeEnum];
export type CancelRequestInput = {
  note?: Maybe<Scalars['String']>;
  submissionIds?: Maybe<Array<Scalars['Int']>>;
};

/** Cancel Schedule Input */
export type CancelScheduleInput = {
  /** Schedule cancellation message */
  cancellationMessage?: Maybe<Scalars['String']>;
  /** Schedule ID */
  scheduleId: Scalars['ID'];
};

/** Search Casting Billboard Input */
export type CastingBillboardSearchInput = {
  autofill?: Maybe<Scalars['Boolean']>;
  ethnicAppearanceIds?: Maybe<Array<Scalars['Int']>>;
  ethnicAppearances?: Maybe<Array<EthnicAppearanceEnum>>;
  genderAppearanceIds?: Maybe<Array<Scalars['Int']>>;
  genderAppearances?: Maybe<Array<GenderAppearanceEnum>>;
  /** Keywords */
  keywords?: Maybe<Scalars['String']>;
  payPrefences?: Maybe<Array<PayPreferencesEnum>>;
  payPreferenceIds?: Maybe<Array<Scalars['Int']>>;
  /** Playable Age Range */
  playableAge?: Maybe<AgeRangeInput>;
  profileUnionIds?: Maybe<Array<Scalars['Int']>>;
  profileUnions?: Maybe<Array<TalentUnionEnum>>;
  projectId?: Maybe<Scalars['Int']>;
  projectTypeIds?: Maybe<Array<Scalars['Int']>>;
  roleId?: Maybe<Scalars['Int']>;
  /** Search by Project/Role Names and Descriptions */
  roleProjectKeywordSearch?: Maybe<RoleProjectKeywordSearchEnum>;
  roleTargetIds?: Maybe<Array<Scalars['Int']>>;
  roleTargets?: Maybe<Array<RoleTargetsEnum>>;
  showRolesNoLongerAcceptingSubmissions?: Maybe<Scalars['Boolean']>;
  workingLocations?: Maybe<Array<Scalars['Int']>>;
};

export type ChangeAuditionGroupTalentOrderInput = {
  /** Submission ID behind which the item should be moved. If not passed will be moved to the beginning */
  behindSubmissionId?: Maybe<Scalars['BigInt']>;
  groupId: Scalars['Int'];
  submissionId: Scalars['BigInt'];
};

export type ChangeAuditionSessionTalentRoleNameInput = {
  entityId: Scalars['BigInt'];
  entityTypeCode: EntityTypeEnum;
  roleId: Scalars['Int'];
  roleName: Scalars['String'];
};

/** Create Chat Message Input */
export type ChatMessageCreateInput = {
  messageBody: Scalars['String'];
  topicKey: Scalars['String'];
};

/** Chat Message */
export type ChatMessageModel = {
  __typename?: 'ChatMessageModel';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  messageBody: Scalars['String'];
  messageType: ChatMessageType;
  ownMessage: Scalars['Boolean'];
  senderAccount?: Maybe<Account>;
  senderAccountId?: Maybe<Scalars['Int']>;
  senderOrgId?: Maybe<Scalars['Int']>;
  senderOrganization?: Maybe<Organization>;
  topicKey: Scalars['String'];
};

export const ChatMessageType = {
  System: 'System',
  User: 'User',
} as const;

export type ChatMessageType = typeof ChatMessageType[keyof typeof ChatMessageType];
export type ChatSenderAccount = {
  __typename?: 'ChatSenderAccount';
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  lastName?: Maybe<Scalars['String']>;
};

export type ChatTopic = {
  __typename?: 'ChatTopic';
  lastUserMessage?: Maybe<WfChatMessage>;
  topicKey: Scalars['String'];
  unreadMessageCount?: Maybe<Scalars['Int']>;
};

export type ChestSize = {
  __typename?: 'ChestSize';
  /** Imperial Feet Inches */
  IMPERIAL_FEET_INCHES?: Maybe<Scalars['String']>;
  /** Imperial Inches */
  IMPERIAL_INCHES: Scalars['Float'];
  /** Metric Centimeters */
  METRIC_CENTIMETERS: Scalars['Int'];
  /** Centimeters */
  cm: Scalars['Int'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** Inches */
  inch: Scalars['Float'];
  /** Inches rounded */
  inchRounded: Scalars['String'];
  /** Show in imperial UI */
  showInImperialUI: Scalars['Boolean'];
};

/** Dress size object */
export type ClothesSize = {
  __typename?: 'ClothesSize';
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['Int'];
  /** Size for AU */
  sizeAU: Scalars['String'];
  /** Size for EU */
  sizeEU: Scalars['String'];
  /** Numeric size */
  sizeNumeric: Scalars['Int'];
  /** Size for UK */
  sizeUK: Scalars['String'];
  /** Size for US */
  sizeUS: Scalars['String'];
};

/** Coat object */
export type Coat = {
  __typename?: 'Coat';
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

/** Company Info Model */
export type CompanyInfoModel = {
  __typename?: 'CompanyInfoModel';
  logo?: Maybe<ReportMediaModel>;
  name?: Maybe<Scalars['String']>;
  parentName?: Maybe<Scalars['String']>;
};

/** Compensation object */
export type Compensation = {
  __typename?: 'Compensation';
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

export type CompletePurchaseBillingDetailsModel = {
  __typename?: 'CompletePurchaseBillingDetailsModel';
  cardType?: Maybe<Scalars['String']>;
  creditsApplied?: Maybe<Scalars['Float']>;
  email?: Maybe<Scalars['String']>;
  invoiceId?: Maybe<Scalars['String']>;
  items?: Maybe<Array<BillingItemModel>>;
  lastFour?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['Float']>;
};

/** Conflict object */
export type Conflict = {
  __typename?: 'Conflict';
  /** child objects */
  childObjects: Array<Conflict>;
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** array of parent objects */
  parentObject: Array<Conflict>;
  /** Selectable Flag */
  selectable: Scalars['Boolean'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

/** Contact information */
export type Contact = {
  __typename?: 'Contact';
  contactId: Scalars['Float'];
  /** Email */
  email?: Maybe<Scalars['String']>;
  enabled: Scalars['Boolean'];
  /** Contact ID */
  id: Scalars['ID'];
  /** Defines organization main contact */
  mainContact: Scalars['Boolean'];
  /** Name */
  name?: Maybe<Scalars['String']>;
  /** Phone */
  phone: Scalars['String'];
};

/** Input type for contact */
export type ContactInput = {
  contactId?: Maybe<Scalars['Int']>;
  /** Email */
  email?: Maybe<Scalars['String']>;
  enabled?: Maybe<Scalars['Boolean']>;
  /** Defines organization main contact */
  mainContact: Scalars['Boolean'];
  /** Name */
  name?: Maybe<Scalars['String']>;
  /** Phone */
  phone: Scalars['String'];
};

export type ContactSubTalentInput = {
  includeProjectRole?: Maybe<Scalars['Boolean']>;
  message: Scalars['String'];
  roleId: Scalars['Int'];
  subject?: Maybe<Scalars['String']>;
  submissionStatusType: RepsSubmissionTypeEnum;
  talentCanSeeSenderAddress?: Maybe<Scalars['Boolean']>;
};

export type ContextRole = {
  __typename?: 'ContextRole';
  code: SystemRoleCode;
  id: Scalars['Int'];
};

/** Continent object */
export type Continent = {
  __typename?: 'Continent';
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

/** Contract Status Object */
export type ContractStatus = {
  __typename?: 'ContractStatus';
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

export type CopyPresentationInput = {
  /** Name of new presentation */
  name: Scalars['String'];
  /** Presentation Id to copy */
  presentationId: Scalars['Int'];
  /** Project ID */
  projectId: Scalars['Int'];
};

/** Project Union */
export type Country = {
  __typename?: 'Country';
  /** code */
  code: Scalars['String'];
  /** Continent */
  continent: Continent;
  /** Currency */
  currency?: Maybe<Currency>;
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  regions?: Maybe<Array<Region>>;
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
  /** Supporting country id */
  supportingCountry?: Maybe<Country>;
  /** Unit System */
  unitSystem: UnitSystem;
};

export type CountryItem = {
  __typename?: 'CountryItem';
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

/** Input type for Organization */
export type CreateOrganizationInput = {
  abbreviation?: Maybe<Scalars['String']>;
  addresses?: Maybe<Array<AddressInput>>;
  contacts?: Maybe<Array<ContactInput>>;
  creatorId?: Maybe<Scalars['ID']>;
  diversityDisclaimer?: Maybe<Scalars['String']>;
  /** Devisions could have multiple locations/dma's */
  dmaIds?: Maybe<Array<Scalars['ID']>>;
  featureId?: Maybe<Array<Scalars['ID']>>;
  features?: Maybe<Array<OrganizationFeatureInput>>;
  logoMediaId?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  organizationParentId?: Maybe<Scalars['ID']>;
  phone?: Maybe<Scalars['String']>;
  profileListId?: Maybe<Scalars['ID']>;
  projectCastingAssistant?: Maybe<Scalars['String']>;
  projectCastingAssociate?: Maybe<Scalars['String']>;
  projectCastingDirector?: Maybe<Scalars['String']>;
  representationAgeCategoryIds?: Maybe<Array<Scalars['ID']>>;
  representationCategoryIds?: Maybe<Array<Scalars['ID']>>;
  representationTypeId?: Maybe<Scalars['ID']>;
  scheduleAddressNote?: Maybe<Scalars['String']>;
  systemRoleId?: Maybe<Scalars['ID']>;
  tileSchemeId?: Maybe<Scalars['ID']>;
  websiteUrl?: Maybe<Scalars['String']>;
};

/** Input type for PC Project */
export type CreatePcProjectInput = {
  adAgency?: Maybe<Scalars['String']>;
  additionalProvisions?: Maybe<Scalars['String']>;
  /** Uploaded media ids */
  attachmentIds?: Maybe<Array<Scalars['ID']>>;
  /** Project sides visibility CODE */
  attachmentVisibilityCode?: Maybe<Scalars['String']>;
  auditionCity?: Maybe<Scalars['String']>;
  auditionDates?: Maybe<Array<Scalars['DateTime']>>;
  canTalentSubmitSelfTape?: Maybe<Scalars['Boolean']>;
  castingAssistant?: Maybe<Scalars['String']>;
  castingAssociate?: Maybe<Scalars['String']>;
  castingDirector?: Maybe<Scalars['String']>;
  conflictIds?: Maybe<Array<Scalars['ID']>>;
  conflictNote?: Maybe<Scalars['String']>;
  contactEmail?: Maybe<Scalars['String']>;
  contactInfoPermissions: Scalars['Boolean'];
  contactPhone?: Maybe<Scalars['String']>;
  /** Contract Status Code */
  contractStatusCode?: Maybe<Scalars['String']>;
  determinedLocationInput?: Maybe<PcProjectDeterminedAddressInput>;
  director?: Maybe<Scalars['String']>;
  executiveProducer?: Maybe<Scalars['String']>;
  hidden?: Maybe<Scalars['Boolean']>;
  hideProjectRate?: Maybe<Scalars['Boolean']>;
  internalName?: Maybe<Scalars['String']>;
  /**
   * If null/undefined/false than PC project audition address not specified, if
   * true than the isSpecificLocation should be not null/undefined
   */
  isAuditionInPerson?: Maybe<Scalars['Boolean']>;
  /**
   * Can not be null/undefined while isAuditionInPerson is true, if this field is
   * true than API will use specificLocationInput, if false than API use
   * determinedLocationInput
   */
  isSpecificLocation?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  network?: Maybe<Scalars['String']>;
  newSeriesName?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  organizationId?: Maybe<Scalars['Int']>;
  photographer?: Maybe<Scalars['String']>;
  producer?: Maybe<Scalars['String']>;
  productionCompany?: Maybe<Scalars['String']>;
  projectOrganization?: Maybe<Array<ProjectOrganizationInput>>;
  projectParentId?: Maybe<Scalars['ID']>;
  projectStatusCode?: Maybe<Scalars['String']>;
  projectStatusId?: Maybe<Scalars['ID']>;
  projectTypeId: Scalars['ID'];
  projectUnionId?: Maybe<Scalars['ID']>;
  rate?: Maybe<Scalars['String']>;
  /** PC project release location codes */
  releaseLocations?: Maybe<Array<Scalars['String']>>;
  requestBrief?: Maybe<Scalars['Boolean']>;
  requestBriefInstruction?: Maybe<Scalars['String']>;
  /** Uploaded script Id */
  scriptFileId?: Maybe<Scalars['Int']>;
  specificLocationInput?: Maybe<PcProjectSpecificAddressInput>;
  studio?: Maybe<Scalars['String']>;
  submissionsDueBy?: Maybe<Scalars['DateTime']>;
  synopsis?: Maybe<Scalars['String']>;
  tileSchemeId?: Maybe<Scalars['ID']>;
  unionContractId?: Maybe<Scalars['String']>;
  usage?: Maybe<Scalars['String']>;
  workCity?: Maybe<Scalars['String']>;
  workDates?: Maybe<Array<Scalars['DateTime']>>;
  writer?: Maybe<Scalars['String']>;
};

/** Create profile conflict input */
export type CreateProfileConflictInput = {
  conflictId: Scalars['Int'];
  expiration?: Maybe<Scalars['DateTime']>;
  note?: Maybe<Scalars['String']>;
  profileId: Scalars['Int'];
};

/** Input type for creating profile submission */
export type CreateProfileSubmissionInput = {
  /** ID of the creator */
  createdBy?: Maybe<Scalars['Int']>;
  /** Profile working location id */
  dmaId?: Maybe<Scalars['Int']>;
  /** Represents that profile is overscale or not */
  isOverscale?: Maybe<Scalars['Boolean']>;
  /** Note for submission */
  note?: Maybe<Scalars['String']>;
  /** Over scale note */
  overscaleNote?: Maybe<Scalars['String']>;
  /** Array of profile ids */
  profileIds: Array<Scalars['Int']>;
  /** Request media(s) */
  requestMedia?: Maybe<Array<SubmissionMediaInput>>;
  /** Role Id */
  roleId: Scalars['Int'];
  /** Submission profile media(s) */
  submissionProfileMedia?: Maybe<Array<SubmissionMediaInput>>;
  /** Submission status code */
  submissionStatusCode: Scalars['String'];
};

export type CreateProfileSubmissionOrGetInput = {
  profileId: Scalars['Int'];
  roleId: Scalars['Int'];
};

/** Input type for Project */
export type CreateProjectInput = {
  adAgency?: Maybe<Scalars['String']>;
  additionalProvisions?: Maybe<Scalars['String']>;
  /** Uploaded media ids */
  attachmentIds?: Maybe<Array<Scalars['ID']>>;
  /** Project sides visibility CODE */
  attachmentVisibilityCode?: Maybe<Scalars['String']>;
  auditionCity?: Maybe<Scalars['String']>;
  auditionDates?: Maybe<Array<Scalars['DateTime']>>;
  castingAssistant?: Maybe<Scalars['String']>;
  castingAssociate?: Maybe<Scalars['String']>;
  castingDirector?: Maybe<Scalars['String']>;
  conflictIds?: Maybe<Array<Scalars['ID']>>;
  conflictNote?: Maybe<Scalars['String']>;
  contactEmail?: Maybe<Scalars['String']>;
  contactInfoPermissions: Scalars['Boolean'];
  contactPhone?: Maybe<Scalars['String']>;
  /** Contract Status Code */
  contractStatusCode?: Maybe<Scalars['String']>;
  director?: Maybe<Scalars['String']>;
  executiveProducer?: Maybe<Scalars['String']>;
  hidden?: Maybe<Scalars['Boolean']>;
  hideProjectRate?: Maybe<Scalars['Boolean']>;
  internalName?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  network?: Maybe<Scalars['String']>;
  newSeriesName?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  organizationId?: Maybe<Scalars['Int']>;
  photographer?: Maybe<Scalars['String']>;
  producer?: Maybe<Scalars['String']>;
  productionCompany?: Maybe<Scalars['String']>;
  projectOrganization?: Maybe<Array<ProjectOrganizationInput>>;
  projectParentId?: Maybe<Scalars['ID']>;
  projectStatusCode?: Maybe<Scalars['String']>;
  projectStatusId?: Maybe<Scalars['ID']>;
  projectTypeId: Scalars['ID'];
  projectUnionId?: Maybe<Scalars['ID']>;
  rate?: Maybe<Scalars['String']>;
  requestBrief?: Maybe<Scalars['Boolean']>;
  requestBriefInstruction?: Maybe<Scalars['String']>;
  /** Uploaded script Id */
  scriptFileId?: Maybe<Scalars['Int']>;
  studio?: Maybe<Scalars['String']>;
  submissionsDueBy?: Maybe<Scalars['DateTime']>;
  synopsis?: Maybe<Scalars['String']>;
  tileSchemeId?: Maybe<Scalars['ID']>;
  unionContractId?: Maybe<Scalars['String']>;
  usage?: Maybe<Scalars['String']>;
  workCity?: Maybe<Scalars['String']>;
  workDates?: Maybe<Array<Scalars['DateTime']>>;
  writer?: Maybe<Scalars['String']>;
};

/** Schedule Input */
export type CreateScheduleInput = {
  /** Address Id */
  addressId?: Maybe<Scalars['Int']>;
  /** Is location hidden */
  isLocationHidden?: Maybe<Scalars['Boolean']>;
  /** Schedule Name */
  name: Scalars['String'];
  /** Note */
  note?: Maybe<Scalars['String']>;
  /** Project Id */
  projectId: Scalars['ID'];
  /** Schedule Date */
  scheduleDate: Scalars['String'];
  /** Schedule Type Code */
  scheduleTypeCode: Scalars['String'];
  /** Time Zone CODE */
  timeZoneCode?: Maybe<Scalars['String']>;
  /** Time Zone Id */
  timeZoneId?: Maybe<Scalars['ID']>;
};

/** Create Subscription Input */
export type CreateSubscriptionInput = {
  /** Account code */
  accountCode: Scalars['String'];
  /** Artist id */
  artistId: Scalars['Float'];
  /** Billing code */
  billingCode: BillingCode;
  /** Country id */
  countryId: Scalars['Float'];
  /** Coupon code */
  coupon?: Maybe<Scalars['String']>;
  /** Next billing date */
  nextBillDate: Scalars['DateTime'];
};

/** Credit Attribute */
export type Credit = {
  __typename?: 'Credit';
  /** Created at Date */
  created: Scalars['DateTime'];
  creditMedia: Array<Media>;
  /** Credit Sort ordering */
  creditOrder: Scalars['Int'];
  /** Credit Type */
  creditType?: Maybe<CreditType>;
  /** The director of the Project */
  director?: Maybe<Scalars['String']>;
  guid: Scalars['String'];
  /** Highlighted */
  highlighted: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** Profile Credit Type Id */
  profileCreditTypeId: Scalars['Float'];
  /** Profile ID */
  profileId: Scalars['Int'];
  /** Role title */
  role?: Maybe<Scalars['String']>;
  /** Credit Type Sort ordering */
  sortOrder: Scalars['Int'];
  /** Title */
  title?: Maybe<Scalars['String']>;
  /** Updated at Date */
  updated: Scalars['DateTime'];
  /** Year */
  year?: Maybe<Scalars['Int']>;
};

/** Input type for Credit */
export type CreditInput = {
  /** Credit type id */
  creditTypeId: Scalars['Int'];
  /** The director of the Project */
  director: Scalars['String'];
  /** Display order descending */
  displayOrder?: Maybe<Scalars['Int']>;
  /** Highlighted */
  highlighted?: Maybe<Scalars['Boolean']>;
  /** Profile id */
  profileId: Scalars['Int'];
  /** Role name */
  role: Scalars['String'];
  /** Credit title */
  title: Scalars['String'];
  /** Year */
  year?: Maybe<Scalars['Int']>;
};

/** Input type for Credit Order */
export type CreditOrderInput = {
  /** Credit order */
  creditOrder: Scalars['Int'];
  /** Credit id */
  id: Scalars['Int'];
};

/** CreditType object */
export type CreditType = {
  __typename?: 'CreditType';
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

/** Input type for Credit */
export type CreditUpdateInput = {
  /** Credit type id */
  creditTypeId?: Maybe<Scalars['Int']>;
  /** The director of the Project */
  director?: Maybe<Scalars['String']>;
  /** Display Credit Type order descending */
  displayOrder?: Maybe<Scalars['Int']>;
  /** Highlighted */
  highlighted?: Maybe<Scalars['Boolean']>;
  /** Credit id */
  id: Scalars['Int'];
  /** Role name */
  role?: Maybe<Scalars['String']>;
  /** Credit title */
  title?: Maybe<Scalars['String']>;
  /** Year */
  year?: Maybe<Scalars['Int']>;
};

/** Cup sizes object */
export type CupSize = {
  __typename?: 'CupSize';
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

/** Currency object */
export type Currency = {
  __typename?: 'Currency';
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
  symbol: Scalars['String'];
};

/** Input type for DateRangeInput */
export type DateRangeInput = {
  /** The maximum date */
  dateMax?: Maybe<Scalars['DateTime']>;
  /** The minimum date */
  dateMin?: Maybe<Scalars['DateTime']>;
};

/** Profile Fit For You Values */
export type DefaultFitForYouArtist = {
  __typename?: 'DefaultFitForYouArtist';
  /** Is age displayed in years> */
  ageInYears: Scalars['Boolean'];
  ethnicAppearances?: Maybe<Array<EthnicAppearance>>;
  genderAppearances?: Maybe<Array<GenderAppearance>>;
  payPreferences?: Maybe<Array<PaidType>>;
  /** Maximum Playable Age */
  playableAgeMax?: Maybe<Scalars['Int']>;
  /** Mimimumm Playable Age */
  playableAgeMin?: Maybe<Scalars['Int']>;
  projectTypes?: Maybe<Array<ProjectType>>;
  roleTargets?: Maybe<Array<RoleTarget>>;
  talentUnions?: Maybe<Array<TalentUnion>>;
  workingLocations: Array<Dma>;
};

export type DeletePresentationProfilePickPublickInput = {
  pickId: Scalars['String'];
  presentationGuid: Scalars['String'];
  profileId: Scalars['Int'];
  userName: Scalars['String'];
};

/** Holds the Input for Deleting Submission from a Slot */
export type DeleteSubmissionFromSlotInput = {
  /** Message for Cancellation */
  cancellationMessage?: Maybe<Scalars['String']>;
  /** Slot Id */
  slotId: Scalars['ID'];
  /** Submission Id */
  submissionId: Scalars['ID'];
};

export type DeleteSubmissionsFromSlotInput = {
  /** Message for Cancellation */
  cancellationMessage?: Maybe<Scalars['String']>;
  slotSubmissions: Array<SlotSubmissionsInput>;
};

/** DeleteTimeframe input type */
export type DeleteTimeframeInput = {
  /** Timeframe cancelation note */
  cancelationNote?: Maybe<Scalars['String']>;
  /** Schedule Id */
  scheduleId: Scalars['Float'];
  /** Timeframe Id */
  timeframeId: Scalars['Float'];
};

export const DisplayOnlyTalentWithPicksEnum = {
  All: 'All',
  PicksOnly: 'PicksOnly',
} as const;

export type DisplayOnlyTalentWithPicksEnum =
  typeof DisplayOnlyTalentWithPicksEnum[keyof typeof DisplayOnlyTalentWithPicksEnum];
export const DisplayRoleOptionsEnum = {
  BasicRoleInformation: 'BasicRoleInformation',
  FullRoleDetails: 'FullRoleDetails',
} as const;

export type DisplayRoleOptionsEnum =
  typeof DisplayRoleOptionsEnum[keyof typeof DisplayRoleOptionsEnum];
export const DisplayTalentInfoOptionsEnum = {
  KidsAges: 'KidsAges',
  PicksAndFeedback: 'PicksAndFeedback',
  ProjectNotes: 'ProjectNotes',
  TalentContactInfo: 'TalentContactInfo',
  TalentRepresentationInfo: 'TalentRepresentationInfo',
  UnionStatuses: 'UnionStatuses',
} as const;

export type DisplayTalentInfoOptionsEnum =
  typeof DisplayTalentInfoOptionsEnum[keyof typeof DisplayTalentInfoOptionsEnum];
export const DisplayTalentPerPageOptionsEnum = {
  OnePerPage: 'OnePerPage',
  TwoPerPage: 'TwoPerPage',
} as const;

export type DisplayTalentPerPageOptionsEnum =
  typeof DisplayTalentPerPageOptionsEnum[keyof typeof DisplayTalentPerPageOptionsEnum];
export const DisplayTalentPhotoOptionsEnum = {
  AuditionSnapshots: 'AuditionSnapshots',
  Headshots: 'Headshots',
} as const;

export type DisplayTalentPhotoOptionsEnum =
  typeof DisplayTalentPhotoOptionsEnum[keyof typeof DisplayTalentPhotoOptionsEnum];
/** DMA for Profile */
export type Dma = {
  __typename?: 'Dma';
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** child objects */
  region?: Maybe<Region>;
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

export type DmaItem = {
  __typename?: 'DmaItem';
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  region?: Maybe<RegionItem>;
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

/** General size object */
export type Document = {
  __typename?: 'Document';
  /** child objects */
  childObjects: Array<Document>;
  /** code */
  code: Scalars['String'];
  /** country */
  country?: Maybe<Country>;
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** parent object */
  parentObject?: Maybe<Document>;
  /** Selectable Flag */
  selectable: Scalars['Boolean'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

/** Creates a end user account based on given input values */
export type EndUserAccountInput = {
  companyAdmin: Scalars['Boolean'];
  countryId: Scalars['Int'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  organizationIds: Array<Scalars['Float']>;
  phone: Scalars['String'];
  roleId: Scalars['Float'];
  timeZoneId: Scalars['Float'];
};

/** Input type for entity type subscription */
export type EntitySubscriptionInput = {
  /** Entity Type CODE */
  entityTypeCode: Scalars['String'];
  /** Entity value CODE. e.g if entityTypeCode is ROLE_TARGET then entityValueCode must be PRINCIPAL Or BACKGROUND */
  entityValueCode: Scalars['String'];
};

/** Entity Type object */
export type EntityType = {
  __typename?: 'EntityType';
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

export const EntityTypeEnum = {
  Account: 'ACCOUNT',
  Address: 'ADDRESS',
  Artist: 'ARTIST',
  AuditionSession: 'AUDITION_SESSION',
  Calendar: 'CALENDAR',
  CalendarEvent: 'CALENDAR_EVENT',
  CalendarSlot: 'CALENDAR_SLOT',
  Media: 'MEDIA',
  MediaType: 'MEDIA_TYPE',
  NotificationNature: 'NOTIFICATION_NATURE',
  Organization: 'ORGANIZATION',
  PaidType: 'PAID_TYPE',
  Profile: 'PROFILE',
  Project: 'PROJECT',
  ProjectType: 'PROJECT_TYPE',
  Role: 'ROLE',
  RoleTarget: 'ROLE_TARGET',
  Submission: 'SUBMISSION',
} as const;

export type EntityTypeEnum = typeof EntityTypeEnum[keyof typeof EntityTypeEnum];
/** EthnicAppearance object */
export type EthnicAppearance = {
  __typename?: 'EthnicAppearance';
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

export const EthnicAppearanceEnum = {
  AboriginalTorresStraitIslander: 'ABORIGINAL_TORRES_STRAIT_ISLANDER',
  AfricanAmericanBlack: 'AFRICAN_AMERICAN_BLACK',
  AmericanIndian: 'AMERICAN_INDIAN',
  CaucasianWhite: 'CAUCASIAN_WHITE',
  EasternEuropean: 'EASTERN_EUROPEAN',
  EastAsian: 'EAST_ASIAN',
  EastIndianSouthAsian: 'EAST_INDIAN_SOUTH_ASIAN',
  EthnicallyAmbiguous: 'ETHNICALLY_AMBIGUOUS',
  Latinx: 'LATINX',
  Maori: 'MAORI',
  Mediterranean: 'MEDITERRANEAN',
  MiddleEastern: 'MIDDLE_EASTERN',
  PacificIslander: 'PACIFIC_ISLANDER',
  SoutheastAsian: 'SOUTHEAST_ASIAN',
} as const;

export type EthnicAppearanceEnum =
  typeof EthnicAppearanceEnum[keyof typeof EthnicAppearanceEnum];
/** Eye color object */
export type EyeColor = {
  __typename?: 'EyeColor';
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

/** FFY Context input */
export type FfyContextInput = {
  artistIds: Array<Scalars['Int']>;
  roleIds: Array<Scalars['Int']>;
};

export type Facet = {
  __typename?: 'Facet';
  buckets: Array<FacetBucket>;
  name: Scalars['String'];
};

export type FacetBucket = {
  __typename?: 'FacetBucket';
  docCount: Scalars['Int'];
  facets?: Maybe<Array<Facet>>;
  key: Scalars['ID'];
};

/** Facial Hair object */
export type FacialHair = {
  __typename?: 'FacialHair';
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

export type Feature = {
  __typename?: 'Feature';
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

export type FeatureInput = {
  enabled: Scalars['Boolean'];
  featureId: Scalars['Float'];
};

export type FilterInput = {
  keyType: KeyType;
  keys: Array<Scalars['ID']>;
};

export type FreeCreditItemModel = {
  __typename?: 'FreeCreditItemModel';
  artistId: Scalars['Float'];
  created: Scalars['DateTime'];
  createdBy: Scalars['Float'];
  credits: Scalars['Float'];
  itemCode: BillingItemCode;
  itemId: Scalars['Float'];
  updated?: Maybe<Scalars['DateTime']>;
};

/** Gender Appearance object */
export type GenderAppearance = {
  __typename?: 'GenderAppearance';
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

export const GenderAppearanceEnum = {
  Man: 'MAN',
  NonBinaryPerson: 'NON_BINARY_PERSON',
  TransMan: 'TRANS_MAN',
  TransWoman: 'TRANS_WOMAN',
  Woman: 'WOMAN',
} as const;

export type GenderAppearanceEnum =
  typeof GenderAppearanceEnum[keyof typeof GenderAppearanceEnum];
/** Gender Identitie object */
export type GenderIdentity = {
  __typename?: 'GenderIdentity';
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

export const GenderIdentityEnum = {
  NonBinary: 'NON_BINARY',
  Other: 'OTHER',
  Trans: 'TRANS',
  Undefined: 'UNDEFINED',
} as const;

export type GenderIdentityEnum =
  typeof GenderIdentityEnum[keyof typeof GenderIdentityEnum];
/** Input type for Gender picker */
export type GenderInput = {
  /**
   * Gender Appearance Ids. NOTE: Ok for now. TODO: Should simply be integer, not
   * array. Function update_profile_gender_appearance has _gender_appearance_id integer[]
   */
  genderAppearanceIds?: Maybe<Array<Scalars['ID']>>;
  /** Gender Identity Ids */
  genderIdentityIds?: Maybe<Array<Scalars['ID']>>;
  /** Gender Other Identity Note */
  genderOtherIdentityNote?: Maybe<Scalars['String']>;
};

/** General size object */
export type GeneralSize = {
  __typename?: 'GeneralSize';
  category: BasicSetting;
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** Size gender ID */
  sizeGenderId: Scalars['ID'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

export type GetChatMessagesByTopicModel = {
  __typename?: 'GetChatMessagesByTopicModel';
  lastViewedMessageId?: Maybe<Scalars['String']>;
  messages: Array<ChatMessageModel>;
  participantOrganizations?: Maybe<Array<Organization>>;
  unreadMessageCount?: Maybe<Scalars['Int']>;
};

/** Input type for fetching submissions by role and profile */
export type GetSubmissionByRoleProfileInput = {
  /** Profile ID */
  profileId: Scalars['Int'];
  /** Role ID */
  roleId: Scalars['Int'];
};

export type Glove = {
  __typename?: 'Glove';
  /** Imperial Feet Inches */
  IMPERIAL_FEET_INCHES?: Maybe<Scalars['String']>;
  /** Imperial Inches */
  IMPERIAL_INCHES: Scalars['Float'];
  /** Metric Centimeters */
  METRIC_CENTIMETERS: Scalars['Int'];
  /** Centimeters */
  cm: Scalars['Int'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** Inches */
  inch: Scalars['Float'];
  /** Inches rounded */
  inchRounded: Scalars['String'];
  /** Show in imperial UI */
  showInImperialUI: Scalars['Boolean'];
};

/** HairColor object */
export type HairColor = {
  __typename?: 'HairColor';
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

/** HairStyle object */
export type HairStyle = {
  __typename?: 'HairStyle';
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

/** General hat size object */
export type HatSize = {
  __typename?: 'HatSize';
  /** cm */
  cm: Scalars['Float'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** inch */
  inch: Scalars['String'];
  /** size */
  size: Scalars['String'];
};

export type Height = {
  __typename?: 'Height';
  /** Imperial Feet Inches */
  IMPERIAL_FEET_INCHES?: Maybe<Scalars['String']>;
  /** Imperial Inches */
  IMPERIAL_INCHES: Scalars['Float'];
  /** Metric Centimeters */
  METRIC_CENTIMETERS: Scalars['Int'];
  /** Centimeters */
  cm: Scalars['Int'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** Inches */
  inch: Scalars['Float'];
  /** Inches rounded */
  inchRounded: Scalars['String'];
  /** Show in imperial UI */
  showInImperialUI: Scalars['Boolean'];
};

export type Hip = {
  __typename?: 'Hip';
  /** Imperial Feet Inches */
  IMPERIAL_FEET_INCHES?: Maybe<Scalars['String']>;
  /** Imperial Inches */
  IMPERIAL_INCHES: Scalars['Float'];
  /** Metric Centimeters */
  METRIC_CENTIMETERS: Scalars['Int'];
  /** Centimeters */
  cm: Scalars['Int'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** Inches */
  inch: Scalars['Float'];
  /** Inches rounded */
  inchRounded: Scalars['String'];
  /** Show in imperial UI */
  showInImperialUI: Scalars['Boolean'];
};

export type IpcInfo = {
  __typename?: 'IPCInfo';
  ipcProfessionalBio?: Maybe<Scalars['String']>;
};

/** ID range input */
export type IdRangeInput = {
  /** The minimum ID value */
  from?: Maybe<Scalars['Int']>;
  /** The maximum ID value */
  to?: Maybe<Scalars['Int']>;
};

export type Inseam = {
  __typename?: 'Inseam';
  /** Imperial Feet Inches */
  IMPERIAL_FEET_INCHES?: Maybe<Scalars['String']>;
  /** Imperial Inches */
  IMPERIAL_INCHES: Scalars['Float'];
  /** Metric Centimeters */
  METRIC_CENTIMETERS: Scalars['Int'];
  /** Centimeters */
  cm: Scalars['Int'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** Inches */
  inch: Scalars['Float'];
  /** Inches rounded */
  inchRounded: Scalars['String'];
  /** Show in imperial UI */
  showInImperialUI: Scalars['Boolean'];
};

/** Creates a internal user account based on given input values */
export type InternalAccountCreateInput = {
  email: Scalars['String'];
  env?: Maybe<Scalars['String']>;
  roleId: Array<Scalars['ID']>;
};

/** Context object for internal welcome */
export type InternalWelcomeContext = {
  __typename?: 'InternalWelcomeContext';
  env: Scalars['String'];
};

export type InternalWelcomeContextNotificationContextAndRecipient = {
  __typename?: 'InternalWelcomeContextNotificationContextAndRecipient';
  context: InternalWelcomeContext;
  to?: Maybe<Scalars['String']>;
  toAccountId?: Maybe<Scalars['Int']>;
  toOrgId?: Maybe<Scalars['Int']>;
  toProfileId?: Maybe<Scalars['Int']>;
};

/** Type of the identifier to use for dictionary lookup. */
export const KeyType = {
  Code: 'code',
  Id: 'id',
} as const;

export type KeyType = typeof KeyType[keyof typeof KeyType];
/** Legacy Account By Profile */
export type LegacyAccount = {
  __typename?: 'LegacyAccount';
  /** Account Id */
  accountId: Scalars['Float'];
  /** Legacy login */
  legacyLogin: Scalars['String'];
};

/** Sort order for list of lists */
export const ListSortOrderEnum = {
  Alphabetical: 'ALPHABETICAL',
  LastModified: 'LAST_MODIFIED',
} as const;

export type ListSortOrderEnum = typeof ListSortOrderEnum[keyof typeof ListSortOrderEnum];
/** Roster type object */
export type ListType = {
  __typename?: 'ListType';
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

export type Media = {
  __typename?: 'Media';
  accountId: Scalars['Float'];
  created?: Maybe<Scalars['DateTime']>;
  fileKey?: Maybe<Scalars['String']>;
  fileType: MediaFileType;
  filename?: Maybe<Scalars['String']>;
  guid: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  /** Primary ID */
  id: Scalars['ID'];
  isLocked?: Maybe<Scalars['Boolean']>;
  length?: Maybe<Scalars['Float']>;
  mediaId: Scalars['Int'];
  mediaParentId?: Maybe<Scalars['Float']>;
  mediaStatus: MediaStatus;
  mediaStorageStatus: MediaStorageStatus;
  mediaType?: Maybe<MediaType>;
  moderationStatus: MediaModerationStatus;
  name?: Maybe<Scalars['String']>;
  purpose: MediaPurpose;
  /** @deprecated use url field instead */
  resizedPaths: Array<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  tag?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Media>;
  thumbnailUrl?: Maybe<Scalars['String']>;
  transformation?: Maybe<MediaTransformation>;
  transformations: Array<Media>;
  updated?: Maybe<Scalars['DateTime']>;
  /** @deprecated use url field instead */
  uploadPath?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

export type MediaByType = {
  __typename?: 'MediaByType';
  AUDIO: Array<Scalars['Int']>;
  DOCUMENT: Array<Scalars['Int']>;
  PHOTO: Array<Scalars['Int']>;
  VIDEO: Array<Scalars['Int']>;
};

/** Media files to change */
export type MediaChangeInput = {
  /** Media sub request ID to change */
  id: Scalars['ID'];
  /** List of the media IDs to change */
  media: Array<Scalars['Int']>;
  note?: Maybe<Scalars['String']>;
};

/** Media Count */
export type MediaCount = {
  __typename?: 'MediaCount';
  /** Count of the media */
  count: Scalars['Int'];
  /** Media Type */
  type: MediaType;
};

export type MediaDeclineInput = {
  id: Scalars['ID'];
  note?: Maybe<Scalars['String']>;
};

/** Media File Types */
export type MediaFileType = {
  __typename?: 'MediaFileType';
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** MediaType */
  mediaType: MediaType;
  /** name */
  name: Scalars['String'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

export type MediaInitUploadInput = {
  count: Scalars['Int'];
  /** Entity CODE to which media should be assigned */
  entity?: Maybe<Scalars['String']>;
  /** Entity Id to which media should be assigned */
  entityId?: Maybe<Scalars['Int']>;
};

/** Media Input Object */
export type MediaInput = {
  /** Media ID */
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type MediaItem = {
  __typename?: 'MediaItem';
  /** Media ID */
  mediaId: Scalars['Int'];
  /** name */
  name?: Maybe<Scalars['String']>;
  /** Upload Path */
  uploadPath?: Maybe<Scalars['String']>;
};

/** MediaMediaType */
export type MediaMediaType = {
  __typename?: 'MediaMediaType';
  mediaId: Scalars['Int'];
  mediaType?: Maybe<MediaType>;
  mediaTypeId: Scalars['Int'];
};

export type MediaMetadataInput = {
  filename: Scalars['String'];
  /** The extension of uploaded file */
  format: Scalars['String'];
  guid: Scalars['ID'];
  height?: Maybe<Scalars['Int']>;
  length?: Maybe<Scalars['Int']>;
  size: Scalars['Int'];
  transformation?: Maybe<MediaTransformationInput>;
  width?: Maybe<Scalars['Int']>;
};

/** MediaModerationStatus object */
export type MediaModerationStatus = {
  __typename?: 'MediaModerationStatus';
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

/** MediaPurpose object */
export type MediaPurpose = {
  __typename?: 'MediaPurpose';
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

/** 'Media Request' Type */
export type MediaRequest = {
  __typename?: 'MediaRequest';
  createdAt: Scalars['DateTime'];
  dueDate?: Maybe<Scalars['DateTime']>;
  dueDateTimeZone?: Maybe<WfTimeZone>;
  id: Scalars['ID'];
  includeSides: Scalars['Boolean'];
  maxNumberOfMediaFiles: Scalars['Int'];
  mediaTypes: Array<RequestMediaType>;
  messageForRepresentatives?: Maybe<Scalars['String']>;
  messageForRepresentativesUpdatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  projectId: Scalars['Int'];
  responses: MediaResponsePagedList;
  shouldResend: Scalars['Boolean'];
  submissionIds: Array<Scalars['Int']>;
  talentInstructions: Scalars['String'];
  talentInstructionsUpdatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

/** 'Media Request' Type */
export type MediaRequestResponsesArgs = {
  page: PageInput;
};

export type MediaRequestInput = {
  dueDate?: Maybe<Scalars['DateTime']>;
  dueDateTimeZoneId?: Maybe<Scalars['Int']>;
  excludeSubmissionIds?: Maybe<Array<Scalars['Int']>>;
  includeSides: Scalars['Boolean'];
  isDraft: Scalars['Boolean'];
  maxNumberOfMediaFiles: Scalars['Int'];
  mediaTypes: Array<RequestMediaType>;
  messageForRepresentatives?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  projectId: Scalars['Int'];
  roleIds?: Maybe<Array<Scalars['Int']>>;
  submissionIds: Array<Scalars['Int']>;
  talentInstructions: Scalars['String'];
  tileSchemeValueCodes?: Maybe<Array<Scalars['String']>>;
};

export const MediaRequestStatus = {
  Cancelled: 'CANCELLED',
  ChangeRequested: 'CHANGE_REQUESTED',
  Confirmed: 'CONFIRMED',
  Declined: 'DECLINED',
  MediaAdded: 'MEDIA_ADDED',
  NotSent: 'NOT_SENT',
  Pending: 'PENDING',
} as const;

export type MediaRequestStatus =
  typeof MediaRequestStatus[keyof typeof MediaRequestStatus];
export type MediaResponse = {
  __typename?: 'MediaResponse';
  cancelledAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  medias?: Maybe<Array<WfMedia>>;
  note?: Maybe<Scalars['String']>;
  repliedAt?: Maybe<Scalars['DateTime']>;
  sentAt?: Maybe<Scalars['DateTime']>;
  status: MediaRequestStatus;
  submission: WfSubmission;
  /** @deprecated Replaced with field 'submission'. */
  submissionId: Scalars['Float'];
};

export type MediaResponseInput = {
  audios?: Maybe<Array<Scalars['Int']>>;
  documents?: Maybe<Array<Scalars['Int']>>;
  id: Scalars['ID'];
  mediaAlias?: Maybe<Array<MediaInput>>;
  note?: Maybe<Scalars['String']>;
  photos?: Maybe<Array<Scalars['Int']>>;
  response?: Maybe<MediaResponseStatus>;
  videos?: Maybe<Array<Scalars['Int']>>;
};

export type MediaResponsePagedList = {
  __typename?: 'MediaResponsePagedList';
  data: Array<MediaResponse>;
  page: Scalars['Int'];
  totalCount: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export const MediaResponseStatus = {
  Confirmed: 'CONFIRMED',
  Declined: 'DECLINED',
  MediaAdded: 'MEDIA_ADDED',
} as const;

export type MediaResponseStatus =
  typeof MediaResponseStatus[keyof typeof MediaResponseStatus];
/** MediaStatus object */
export type MediaStatus = {
  __typename?: 'MediaStatus';
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

/** Media Storage Status object */
export type MediaStorageStatus = {
  __typename?: 'MediaStorageStatus';
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

export const MediaStorageStatusEnum = {
  BauMigrated: 'BAU_MIGRATED',
  CldCleaned: 'CLD_CLEANED',
  Downloaded: 'DOWNLOADED',
  Downloading: 'DOWNLOADING',
  DownloadFailed: 'DOWNLOAD_FAILED',
  Uploaded: 'UPLOADED',
  Uploading: 'UPLOADING',
  UploadFailed: 'UPLOAD_FAILED',
} as const;

export type MediaStorageStatusEnum =
  typeof MediaStorageStatusEnum[keyof typeof MediaStorageStatusEnum];
/** 'Media Sub-Request' Type for (Reps|Talent) */
export type MediaSubRequest = {
  __typename?: 'MediaSubRequest';
  /** The date when request was cancelled */
  cancelledAt?: Maybe<Scalars['DateTime']>;
  dueDate?: Maybe<Scalars['DateTime']>;
  dueDateTimeZone?: Maybe<WfTimeZone>;
  /** Forwarded Note */
  forwardNote?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  includeSides: Scalars['Boolean'];
  maxNumberOfMediaFiles: Scalars['Int'];
  mediaTypes: Array<RequestMediaType>;
  /** The media files sent in response */
  medias?: Maybe<Array<WfMedia>>;
  messageForRepresentatives?: Maybe<Scalars['String']>;
  messageForRepresentativesUpdatedAt?: Maybe<Scalars['DateTime']>;
  /** The note sent in response */
  note?: Maybe<Scalars['String']>;
  profile?: Maybe<WfProfile>;
  project: WfProject;
  /** The date when response was sent */
  repliedAt?: Maybe<Scalars['DateTime']>;
  /** Reps Worksheet Status */
  repsWorksheetStatus: Scalars['String'];
  requestedChangesMedia?: Maybe<Array<Scalars['Int']>>;
  requestedChangesNote?: Maybe<Scalars['String']>;
  role: WfRole;
  /** The date when request was sent */
  sentAt?: Maybe<Scalars['DateTime']>;
  status: MediaRequestStatus;
  submission: WfSubmission;
  /** @deprecated Replaced with field 'submission'. */
  submissionId: Scalars['Int'];
  talentInstructions: Scalars['String'];
  talentInstructionsUpdatedAt?: Maybe<Scalars['DateTime']>;
  updatedMedia?: Maybe<Array<Scalars['Int']>>;
};

export type MediaToArchive = {
  __typename?: 'MediaToArchive';
  filePath: Scalars['String'];
  format: Scalars['String'];
  guid: Scalars['String'];
  storageStatus: MediaStorageStatusEnum;
  type: MediaTypeEnum;
};

export type MediaTransformation = {
  __typename?: 'MediaTransformation';
  height?: Maybe<Scalars['Float']>;
  rotate?: Maybe<Scalars['Float']>;
  startOffset?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
  xAxis?: Maybe<Scalars['Float']>;
  yAxis?: Maybe<Scalars['Float']>;
};

export type MediaTransformationInput = {
  height?: Maybe<Scalars['Float']>;
  rotate?: Maybe<Scalars['Float']>;
  startOffset?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
  xAxis?: Maybe<Scalars['Float']>;
  yAxis?: Maybe<Scalars['Float']>;
};

/** MediaType  object */
export type MediaType = {
  __typename?: 'MediaType';
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  isRequestable: Scalars['Boolean'];
  mediaVersionTypes: Array<MediaVersionType>;
  /** name */
  name: Scalars['String'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

export const MediaTypeEnum = {
  Image: 'IMAGE',
  Video: 'VIDEO',
} as const;

export type MediaTypeEnum = typeof MediaTypeEnum[keyof typeof MediaTypeEnum];
/** Media Version Types */
export type MediaVersionType = {
  __typename?: 'MediaVersionType';
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  landscapeHeight: Scalars['Float'];
  landscapeWidth: Scalars['Float'];
  /** name */
  name: Scalars['String'];
  portraitHeight: Scalars['Float'];
  portraitWidth: Scalars['Float'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

export const MicroServices = {
  Backlot: 'BACKLOT',
  FastCapture: 'FAST_CAPTURE',
} as const;

export type MicroServices = typeof MicroServices[keyof typeof MicroServices];
/** Holds the Input for Deleting Submission from a Slot */
export type MoveSubmissionFromSlotInput = {
  /** New Slot Id to which submission is moved to. */
  newSlotId: Scalars['ID'];
  /** Schedule Id */
  scheduleId?: Maybe<Scalars['Int']>;
  /** Slot Id from which submission is moved from. */
  slotId: Scalars['ID'];
  /** Slot's start time */
  startTime?: Maybe<Scalars['DateTime']>;
  /** Submission Id */
  submissionId: Scalars['ID'];
  /** Timeframe Id */
  timeframeId?: Maybe<Scalars['Int']>;
};

export type MoveSubmissionsFromSlotsInput = {
  from: Array<SlotSubmissionsInput>;
  newSlotId: Scalars['Int'];
};

/** MultipleBirth object */
export type MultipleBirth = {
  __typename?: 'MultipleBirth';
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Denotes if the project has been accepted successfully along with it(s) associated role(s) */
  acceptProjectModification: Scalars['Boolean'];
  /** Adds Add-in profile to the timeslot. Returns added submission */
  addAddInProfileToScheduleTimeSlot: Submission;
  addAddress: Scalars['Float'];
  /** Adding submissions for all profiles by search input filters. Returns count of created submissions. */
  addAllProfilesSubmissions: Scalars['Float'];
  /** Adds all profiles to list based on provided filters. */
  addAllProfilesToList: Scalars['Float'];
  addArtistFreeCredits: Scalars['Boolean'];
  /** Adds new audition session. Returns id. */
  addAuditionSession?: Maybe<Scalars['Int']>;
  /** Adds new audition session group */
  addAuditionSessionGroup?: Maybe<Scalars['Int']>;
  addCommentToPresentationSubmissionPublic: PresentationSubmissionComment;
  /** Adds comment for the submission */
  addCommentToSubmission: PresentationSubmissionComment;
  addNote: Note;
  addOrganizationAccount: Account;
  addOrganizationLogo: Media;
  /** Adds pick for the profile in the package */
  addPickToPackageProfile: Scalars['Int'];
  addPickToPackageProfilePublic: Scalars['String'];
  addPickToPresentationSubmissionPublic: Scalars['String'];
  /** Adds pick for the submission */
  addPickToSubmission: Scalars['Int'];
  addProfileBookout: Scalars['Boolean'];
  /** Creating profile conflict */
  addProfileConflict: Scalars['Boolean'];
  /** Adds a list of profiles. */
  addProfileList: ProfileList;
  /** Adds profiles (ids) to organization profile list */
  addProfileListEntities: Scalars['Float'];
  addProfilePet: ProfilePet;
  addProfileProp: ProfileProp;
  addProfileSkill: Scalars['Boolean'];
  addProfileSportsEquipment: ProfileSportEquipment;
  /** Adding profile submission */
  addProfileSubmission: Array<Submission>;
  addProfileSubmissionOrGet: SubmissionCreated;
  addProfileToAuditionGroup: Scalars['Boolean'];
  addProfileToAuditionGroupAddIn: Scalars['Boolean'];
  /**
   * Adds a profile to a Project
   * @deprecated That mutation is deprecated. Please use addSubmission for the same
   */
  addProfileToProject: Submission;
  /** Adds profile to the timeslot. Returns ID of added submission */
  addProfileToScheduleTimeSlot: Submission;
  addProfileVehicle: ProfileVehicle;
  addProfileWardrobe: ProfileWardrobe;
  addProjectNote?: Maybe<Scalars['Float']>;
  /** Adds a list of representatives. */
  addRepresentativeList: Scalars['Float'];
  /** Add break to schedule */
  addScheduleBreak: Scalars['Int'];
  /** Quick add submission (FastCapture support) */
  addSubmissionQuick: Scalars['Int'];
  /** Add submission snapshot */
  addSubmissionSnapshot: Scalars['Int'];
  /** Mutation for adding submission to the Presentation Group */
  addSubmissionToPresentationGroup: Array<PresentationGroupSubmission>;
  /** Add Submissions to Audition Group */
  addSubmissionsToAuditionGroup: Scalars['Int'];
  addSubmissionsToAuditionTalentPool: Scalars['Boolean'];
  /** Assign submissions to the calendar slot. Returns added submission ids */
  addSubmissionsToSlot: Array<Scalars['BigInt']>;
  addTalentToMediaRequest: MediaRequest;
  /** Add the talent(s) to Presentation Folder */
  addTalentToPresentationFolder: Scalars['Boolean'];
  addTalentToQuestionRequest: AskQuestionRequest;
  /** Add Timeframe to a Schedule */
  addTimeframeToSchedule: Scalars['Float'];
  approvePCProject: Scalars['Boolean'];
  archiveMediaAsset: Scalars['Boolean'];
  archiveProjects: Scalars['String'];
  archiveRole: Scalars['String'];
  attachCreditVideo: Array<Media>;
  attachMediaToArtist: Media;
  /** Attaches uploaded media to the Audition Group */
  attachMediaToAuditionGroup: Scalars['Boolean'];
  /** Mutation for attaching media to the presentation group */
  attachMediaToPresentationGroup: Scalars['Boolean'];
  attachMediaToProfile: Media;
  attachMediaToProfileSkill: Media;
  attachMediasToProfile: Scalars['Boolean'];
  /** Returns a session bearer token. */
  bauLogin: Scalars['String'];
  /** BAU login by providing legacy data. Returns onboarding token. */
  bauLoginByLegacyData: Scalars['Json'];
  cancelRequest: Scalars['Boolean'];
  /** Cancel Schedule */
  cancelSchedule: Scalars['Boolean'];
  cancelSubscription: Scalars['Boolean'];
  changeAuditionSessionTalentRoleName: Scalars['Boolean'];
  /** Changes order of the role. Returns either the order was changed or not */
  changeRoleOrder: Scalars['Boolean'];
  /** Changes Submission order in Audition Group */
  changeSubmissionOrderInAuditionGroup: Scalars['Boolean'];
  checkOtpCode: Scalars['Boolean'];
  /** Claims Rep/CD account multiple times */
  claimEnterpriseAccount: Scalars['Json'];
  cloneMedia: Media;
  completePurchase: CompletePurchaseBillingDetailsModel;
  contactSubTalent: Scalars['Boolean'];
  /** Copy the selected groups to the specific session */
  copyAuditionGroupsToAuditionSession?: Maybe<Scalars['Int']>;
  copyPresentation: Scalars['Int'];
  copyProfileFromExisting: Profile;
  copyProfileUnderSameArtist: Scalars['Boolean'];
  /** Copies submission data to another role */
  copySubmissionToRole: Submission;
  createAccount: AuthToken;
  createAgencyCallListReport: Scalars['String'];
  /** Creates 'Ask Question' request type */
  createAskQuestionRequest: AskQuestionRequest;
  /** Mutation for creating Audition Presentation */
  createAuditionPresentation: Scalars['Int'];
  /** Creates new pair of tokens */
  createAuthContextByAccountId: AuthToken;
  createBookingCallListReport: Scalars['String'];
  createChatMessage: ChatMessageModel;
  createChatTopicFromSubRequest: Scalars['Boolean'];
  createCredit: Credit;
  createEndUserAccount: Account;
  createInternalAccount: Scalars['Float'];
  /** Creates 'Media' request type */
  createMediaRequest: MediaRequest;
  createOrganization: Organization;
  createPCProject: Project;
  createPCRole: Role;
  /** Mutation for creating Presentation Folder */
  createPresentationFolder: Scalars['Int'];
  /** Mutation for creating Presentation Group in a Presentation Folder */
  createPresentationGroup: Scalars['Int'];
  createPresentationLogReport: Scalars['String'];
  createPresentationLogReportPublic: Scalars['String'];
  createPresentationPickReport: Scalars['String'];
  createPresentationSizeSheetsReport: Scalars['String'];
  createPresentationSizeSheetsReportPublic: Scalars['String'];
  createProfile: Profile;
  createProject: Project;
  createProjectOverviewCDReport: Scalars['String'];
  createProjectOverviewReport: Scalars['String'];
  createProjectSubmissionReport: Scalars['String'];
  /** Mutation for creating Rep Package Presentation */
  createRepPackagePresentation: Presentation;
  createRole: Role;
  /** Creates 'Roster Invitation Request' type */
  createRosterInvitationRequest: RosterInvitationRequest;
  /** Creates a schedule */
  createSchedule: ScheduleDetail;
  createScheduleReport: Scalars['String'];
  createScheduleSizeSheetsReport: Scalars['String'];
  /** Mutation for creating Share Selects Presentation */
  createShareSelectPresentation: Presentation;
  createSubscription: Scalars['Boolean'];
  createTalentSubmissionReport: Scalars['String'];
  /**
   * Decline 'Media' request by Agent
   * @deprecated Use "replyToMediaRequest"
   */
  declineMediaRequestByAgent: MediaSubRequest;
  /**
   * Decline 'Media' request by Talent
   * @deprecated Use "replyToMediaRequest"
   */
  declineMediaRequestByTalent: MediaSubRequest;
  /** Delete account */
  deleteAccount: Scalars['Boolean'];
  /** Delete submission */
  deleteAllSubmissions: Scalars['Float'];
  /** Returns true if deleted successfully. */
  deleteAuditionSession: Scalars['Boolean'];
  /** Delete comment for the submission */
  deleteCommentToPresentationSubmissionPublic: Scalars['Boolean'];
  deleteCredit: Scalars['Boolean'];
  deleteCreditMedia: Scalars['Boolean'];
  deleteMediaAsset: Scalars['Boolean'];
  /** Deletes Audition Group Media */
  deleteMediaFromAuditionGroup: Scalars['Int'];
  /** Mutation for deleting media from the presentation group */
  deleteMediaFromPresentationGroup: Scalars['Boolean'];
  deleteNote: Scalars['Boolean'];
  deleteOrganzationAddress: Scalars['Boolean'];
  deletePick: Scalars['Boolean'];
  deletePickFromPresentationProfilePublic: Scalars['Boolean'];
  deletePickFromPresentationSubmissionPublic: Scalars['Boolean'];
  /** Removes pick from the submission */
  deletePickFromSubmission: Scalars['Boolean'];
  /** Mutation for deleting Presentation */
  deletePresentation?: Maybe<Scalars['Boolean']>;
  /** Archives the Presentation Folder */
  deletePresentationFolder: Scalars['Boolean'];
  /** Deletes the talent from Presentation Folder */
  deletePresentationFolderTalent: Scalars['Boolean'];
  /** Mutation for deleting Presentation Group */
  deletePresentationGroup: Scalars['Boolean'];
  deleteProfile: Scalars['Boolean'];
  /** Creating profile conflict */
  deleteProfileConflict: Scalars['Boolean'];
  /** Deletes the profile list by listId. */
  deleteProfileList: Scalars['Float'];
  /** Removes profiles (ids) from organization profile list */
  deleteProfileListEntities: Scalars['Float'];
  deleteProfileMedia: Scalars['Boolean'];
  deleteProfilePet: Scalars['Boolean'];
  deleteProfileProp: Scalars['Boolean'];
  deleteProfileSkill: Scalars['Boolean'];
  deleteProfileSportsEquipment: Scalars['Boolean'];
  deleteProfileVehicle: Scalars['Boolean'];
  deleteProfileWardrobe: Scalars['Boolean'];
  /** Deletes the representative list by ListId. */
  deleteRepresentativeList: Scalars['Float'];
  deleteRequest: Scalars['Boolean'];
  deleteRole: Scalars['Boolean'];
  /** Delete submission */
  deleteSubmission: Scalars['Boolean'];
  /** Delete comment for the submission */
  deleteSubmissionComment: Scalars['Boolean'];
  /** Mutation for deleting submission from the Presentation Group */
  deleteSubmissionFromPresentationGroup: Scalars['Boolean'];
  /**
   * Remove submission from calendar slot
   * @deprecated use deleteSubmissionsFromSlot
   */
  deleteSubmissionFromSlot: Scalars['Boolean'];
  /** Delete submission */
  deleteSubmissionsBulk: Scalars['Boolean'];
  /** Delete Submissions from Audition Group */
  deleteSubmissionsFromAuditionGroup: Scalars['Int'];
  /** Remove submissions from calendar slots */
  deleteSubmissionsFromSlot: Scalars['Boolean'];
  deleteSubscription: Scalars['Boolean'];
  /** Delete Timeframe from a Schedule */
  deleteTimeframeFromSchedule: Scalars['Boolean'];
  editMedia: Media;
  editMediaThumbnail: Media;
  finalizeMediaUpload: Array<Media>;
  forwardRequests: Array<RepWorksheetItem>;
  /** Generates signature for uploading media */
  getMediaUploadSignature: Scalars['String'];
  /** Returns a session bearer token for internal user. */
  googleLoginInternal: AuthToken;
  grantTalentAccess: Scalars['Boolean'];
  /** Mutation for import Audition Group to the Presentation Folder */
  importPresentationFolderFromAuditionGroup?: Maybe<PresentationFolder>;
  /** Mutation for import Audition Session data to the Presentation */
  importPresentationFromAudition: Scalars['Int'];
  initMediaUpload: Array<Media>;
  /** Initiates presentation's media downloading */
  initPresentationMediaToDownloadPublic: Scalars['String'];
  /** Returns a session bearer token. */
  login: AuthToken;
  /** Sign in user on behalf of internal service */
  loginDelegatedUser: AuthToken;
  /** Creates new pair of tokens for CSR user */
  loginImpersonatedAccount: AuthToken;
  /** Deletes refresh token */
  logout: Scalars['Boolean'];
  markAllAsRead: Scalars['Boolean'];
  markChatMessageAsReadFromId: Scalars['Boolean'];
  /** Marks notifications as viewed */
  markNotifications: Scalars['Boolean'];
  mergeOrganization: Scalars['Boolean'];
  mergeUserAccounts: Scalars['Boolean'];
  /**
   * Move Submission from slotId to newSlotId.
   * @deprecated use moveSubmissionsFromSlotBulk
   */
  moveSubmissionFromSlot: Scalars['Boolean'];
  /** Moves Submissions to the new time slot */
  moveSubmissionsFromSlotBulk: Scalars['Boolean'];
  /** Prepare account for onboarding. */
  prepareAccountForOnboarding: Scalars['Boolean'];
  publishRoles: Scalars['Boolean'];
  reAddUserToOrganization?: Maybe<Scalars['Float']>;
  reassignProjectToOrganization?: Maybe<Scalars['Boolean']>;
  reassociateChildOrgtoParent?: Maybe<Scalars['Boolean']>;
  /** Creates new pair of tokens */
  refreshToken: AuthToken;
  /** Denotes if the project has been rejected successfully along with it(s) associated role(s) */
  rejectProjectModification: Scalars['Boolean'];
  removeOrganizationLogo: Organization;
  removeProfileBookout: Scalars['Boolean'];
  removeProfileResume: Scalars['Boolean'];
  removeUserFromOrganization?: Maybe<Scalars['Float']>;
  /** Reply to 'Ask Question' request */
  replyToAskQuestionRequest: AskQuestionSubRequest;
  /** Reply to 'Media' request */
  replyToMediaRequest: MediaSubRequest;
  /**
   * Reply to 'Media' request by Agent
   * @deprecated Use "replyToMediaRequest"
   */
  replyToMediaRequestByAgent: MediaSubRequest;
  /** Reply to 'Schedule Invite' request */
  replyToScheduleInviteRequest: ScheduleInviteSubRequest;
  /** Request changes on 'Media' request */
  requestMediaChanges: MediaSubRequest;
  /** Request for additional submissions for provided roles. Returns either request was sent or not. */
  requestSubmissionsForRoles: Scalars['Boolean'];
  resendCreatePasswordLink: Scalars['Boolean'];
  resendEmailVerification?: Maybe<Scalars['String']>;
  /** Resent Verification email */
  resentVerificationEmail: Scalars['Json'];
  /** Creates a temporary, single-use email reset token. */
  resetEmail: Scalars['String'];
  /** Creates a temporary, single-use password reset token. */
  resetPassword: Scalars['String'];
  /** Reset password using B21 email, BAU email, BAU username. */
  resetPasswordBauB21: Scalars['Json'];
  /** Creates a temporary, single-use password reset token by legacy login and legacy instance. */
  resetPasswordByLegacyLogin: Scalars['String'];
  restoreProjects: Scalars['String'];
  restoreRole: Scalars['String'];
  sendDirectEmailToPickedPackageTalent: Scalars['Boolean'];
  sendDirectEmailToPresentationFolderTalent: Scalars['Boolean'];
  sendDirectMessageToTalents: Scalars['Boolean'];
  /** Sends notification to all representatives */
  sendProjectUpdateMessageToReps: Scalars['Boolean'];
  /** Either sends 'Not Yet Sent' request or re-sends it */
  sendRequest: Scalars['Boolean'];
  /** Send 'Schedule Invite' request */
  sendScheduleInviteRequest: Scalars['Boolean'];
  sendVerificationCode: Scalars['String'];
  setProfileResume: Media;
  /** Denotes if the update went successfully */
  setProjectAsViewed: Scalars['Boolean'];
  setProjectStatus: Scalars['Boolean'];
  /** Casting Director can set reply status */
  setSheduleInviteRequestStatus: ScheduleInviteSubRequest;
  shiftScheduleTimeframe?: Maybe<ScheduleTimeframeShiftedResult>;
  submitPCProjectForApproval: Scalars['Boolean'];
  /** Submits all selected submissions by REPS for the role */
  submitSelectedSubmissionForRole: Scalars['Boolean'];
  /** Creates new pair of tokens */
  switchAuthContext: AuthToken;
  updateAccount: Account;
  updateAccountBillingInfo: Scalars['Boolean'];
  updateAccountName: Account;
  updateAccountPhone: Account;
  /** Returns a session bearer token. */
  updateAccountPreMappedOrganizations: UpdateLegacyResult;
  updateAccountRosterInvitationToken: Account;
  /** Mutation for updating address */
  updateAddress: Scalars['Float'];
  /** Update organization for Agent rep User */
  updateAgentOrganization: UpdateOrganizationResult;
  updateArtist: Scalars['Boolean'];
  /** Updates 'Ask Question' request type */
  updateAskQuestionRequest: AskQuestionRequest;
  /** Update AuditionGroupMedia */
  updateAuditionGroupMedia: Scalars['Int'];
  /** Mutation for updating audition group sort order */
  updateAuditionGroupMediaOrder: Scalars['Boolean'];
  /** Set thumbnail media to the audition group */
  updateAuditionGroupThumbnail: AuditionGroup;
  /** Updates existing audition session. Returns true if updated successfully. */
  updateAuditionSession: Scalars['Boolean'];
  /** Updates new audition session group */
  updateAuditionSessionGroup?: Maybe<Scalars['Boolean']>;
  /** Updates audition session groups */
  updateAuditionSessionGroupsBulk?: Maybe<Scalars['Float']>;
  /** Update existing account */
  updateBauAccount: Scalars['Json'];
  /** Resent Verification email */
  updateBauEmailAddress: Scalars['Json'];
  /** Update organization for casting director user */
  updateCastingDirectorOrganization: UpdateOrganizationResult;
  updateCredit: Credit;
  updateCreditOrder: Scalars['Boolean'];
  updateEmailWithToken: AuthToken;
  /** Update existing account */
  updateLegacyProfile: UpdateLegacyResult;
  updateMediaAsset: Media;
  /** Updates 'Media' request type */
  updateMediaRequest: MediaRequest;
  updateMediaRequestMessageForRepresentatives: MediaRequest;
  updateMediaRequestTalentInstructions: MediaRequest;
  updateNote: Scalars['Boolean'];
  updateNotificationEntityTypeSubscription: Scalars['Boolean'];
  updateNotificationNotificationTypeSubscription: Scalars['Boolean'];
  updateOrganization: Organization;
  updateOrganizationAccount?: Maybe<Scalars['Boolean']>;
  updateOrganizationFeatures: Array<Feature>;
  updatePCAccount?: Maybe<Scalars['Float']>;
  /** Returns a session bearer token. */
  updatePCOrganizations: UpdateLegacyResult;
  updatePCProject: Scalars['Boolean'];
  updatePassword: Scalars['String'];
  updatePasswordWithToken: Scalars['Boolean'];
  /** Mutation for updating Presentation */
  updatePresentation?: Maybe<Scalars['Int']>;
  /** Updates presentation folder */
  updatePresentationFolder: Scalars['Boolean'];
  /** Updates presentation folder sort order */
  updatePresentationFolderOrder: Scalars['Boolean'];
  /** Mutation for updating Presentation Group */
  updatePresentationGroup: PresentationGroup;
  /** Mutation for updating presentation group sort order */
  updatePresentationGroupMediaOrder: Scalars['Boolean'];
  /** Mutation for updating presentation group sort order */
  updatePresentationGroupOrder: Scalars['Boolean'];
  /** Set thumbnail media to the presentation group */
  updatePresentationGroupThumbnail: PresentationGroup;
  updateProfile: Profile;
  updateProfileArtist: Scalars['Int'];
  updateProfileBookout: Scalars['Boolean'];
  /** Creating profile conflict */
  updateProfileConflict: Scalars['Boolean'];
  updateProfileCreditTypeSortOrder: Scalars['Boolean'];
  /** Updates the name of a Profile List. */
  updateProfileListName: Scalars['Float'];
  /** Update single profile media */
  updateProfileMedia: Scalars['Boolean'];
  /** Update profile media list */
  updateProfileMediaList: Scalars['Boolean'];
  updateProfileMediaVisibility: Scalars['Boolean'];
  updateProfilePet: ProfilePet;
  updateProfileProp: ProfileProp;
  updateProfileSkill: Scalars['Boolean'];
  updateProfileSportsEquipment: ProfileSportEquipment;
  updateProfileVehicle: ProfileVehicle;
  updateProfileVisibilities: Scalars['Boolean'];
  updateProfileWardrobe: ProfileWardrobe;
  updateProject: Project;
  /** Returns a session bearer token. */
  updateProjectCreatorAccount: AuthTokenItem;
  /** Updates a list of representatives. */
  updateRepresentativeList: Scalars['Float'];
  /** Updates the name of a Reps List. */
  updateRepresentativeListName: Scalars['Float'];
  updateRequestDueDate: RequestUnion;
  updateRole?: Maybe<Role>;
  updateRoleStatus: Scalars['Boolean'];
  updateRolesWardrobeBulk: Scalars['Boolean'];
  /** Update break */
  updateScheduleBreak: Scalars['Boolean'];
  /** Update schedule */
  updateScheduleWithAddress: Scalars['Boolean'];
  /** Update submission */
  updateSubmission: Submission;
  /** Update submission status */
  updateSubmissionStatus: Scalars['Boolean'];
  updateSubmissionsInAuditionTalentPool: Scalars['Boolean'];
  /** Update status of a bunch submissions */
  updateSubmissionsStatus: Array<Submission>;
  /** Update account email and resend email verification link. Returns new emailResetToken. */
  updateVerificationEmail: Scalars['String'];
  upgradePCOrgToCD?: Maybe<Scalars['Boolean']>;
  /** Verify BAU account from email link */
  verifyBauAccount: Scalars['String'];
  widenPublicationRoles: Scalars['Boolean'];
};

export type MutationAcceptProjectModificationArgs = {
  id: Scalars['ID'];
};

export type MutationAddAddInProfileToScheduleTimeSlotArgs = {
  input: AddProfileToTimeSlotAddInInput;
};

export type MutationAddAddressArgs = {
  addToOrganization?: Maybe<Scalars['Boolean']>;
  input: AddressInput;
};

export type MutationAddAllProfilesSubmissionsArgs = {
  roleId: Scalars['Int'];
  searchInput: ProfileSearchInput;
};

export type MutationAddAllProfilesToListArgs = {
  input: ProfileSearchInput;
  listId: Scalars['Float'];
};

export type MutationAddArtistFreeCreditsArgs = {
  input: AddArtistFreeCreditsInput;
};

export type MutationAddAuditionSessionArgs = {
  inputModel: AuditionSessionCreateInput;
};

export type MutationAddAuditionSessionGroupArgs = {
  inputModel: AuditionGroupInput;
};

export type MutationAddCommentToPresentationSubmissionPublicArgs = {
  comment: Scalars['String'];
  presentationId?: Maybe<Scalars['Float']>;
  submissionId: Scalars['BigInt'];
  userName: Scalars['String'];
};

export type MutationAddCommentToSubmissionArgs = {
  comment: Scalars['String'];
  presentationId?: Maybe<Scalars['Float']>;
  submissionId: Scalars['BigInt'];
};

export type MutationAddNoteArgs = {
  input: AddNoteInput;
};

export type MutationAddOrganizationAccountArgs = {
  companyAdmin: Scalars['Boolean'];
  organizationId: Scalars['Float'];
  userId: Scalars['Float'];
};

export type MutationAddOrganizationLogoArgs = {
  mediaId: Scalars['Int'];
  organizationId: Scalars['Int'];
};

export type MutationAddPickToPackageProfileArgs = {
  packageId: Scalars['Float'];
  profileId: Scalars['Float'];
};

export type MutationAddPickToPackageProfilePublicArgs = {
  packageId: Scalars['Float'];
  profileId: Scalars['Float'];
  userName: Scalars['String'];
};

export type MutationAddPickToPresentationSubmissionPublicArgs = {
  presentationId?: Maybe<Scalars['Float']>;
  submissionId: Scalars['BigInt'];
  userName: Scalars['String'];
};

export type MutationAddPickToSubmissionArgs = {
  presentationId?: Maybe<Scalars['Float']>;
  submissionId: Scalars['BigInt'];
};

export type MutationAddProfileBookoutArgs = {
  artistId?: Maybe<Scalars['Float']>;
  input: ProfileBookOutInput;
};

export type MutationAddProfileConflictArgs = {
  input: CreateProfileConflictInput;
};

export type MutationAddProfileListArgs = {
  input: AddProfileListInput;
};

export type MutationAddProfileListEntitiesArgs = {
  input: AddOrDeleteListEntitiesInput;
};

export type MutationAddProfilePetArgs = {
  input: ProfilePetInput;
  profileId: Scalars['Float'];
};

export type MutationAddProfilePropArgs = {
  profileId: Scalars['Float'];
  propId: Scalars['Float'];
};

export type MutationAddProfileSkillArgs = {
  profileId: Scalars['Float'];
  skillIds: Array<Scalars['Float']>;
};

export type MutationAddProfileSportsEquipmentArgs = {
  profileId: Scalars['Float'];
  sportEquipmentId: Scalars['Float'];
};

export type MutationAddProfileSubmissionArgs = {
  input: CreateProfileSubmissionInput;
  syncIndexing?: Maybe<Scalars['Boolean']>;
};

export type MutationAddProfileSubmissionOrGetArgs = {
  input: CreateProfileSubmissionOrGetInput;
};

export type MutationAddProfileToAuditionGroupArgs = {
  input: AddProfileToAuditionGroupInput;
};

export type MutationAddProfileToAuditionGroupAddInArgs = {
  input: AddProfileToAuditionGroupAddInInput;
};

export type MutationAddProfileToProjectArgs = {
  input: AddProfileToProjectInput;
};

export type MutationAddProfileToScheduleTimeSlotArgs = {
  input: AddProfileToTimeSlotInput;
};

export type MutationAddProfileVehicleArgs = {
  input: ProfileVehicleInput;
  profileId: Scalars['Float'];
};

export type MutationAddProfileWardrobeArgs = {
  profileId: Scalars['Float'];
  wardrobeId: Scalars['Float'];
};

export type MutationAddProjectNoteArgs = {
  input: ProjectNoteInput;
};

export type MutationAddRepresentativeListArgs = {
  input: AddRepresentativeListInput;
};

export type MutationAddScheduleBreakArgs = {
  endTime: Scalars['DateTime'];
  scheduleId: Scalars['Int'];
  startTime: Scalars['DateTime'];
};

export type MutationAddSubmissionQuickArgs = {
  input: SubmissionQuickAddInput;
};

export type MutationAddSubmissionSnapshotArgs = {
  snapshotId: Scalars['Int'];
  startOffset?: Maybe<Scalars['String']>;
  submissionsId: Scalars['BigInt'];
};

export type MutationAddSubmissionToPresentationGroupArgs = {
  groupId: Scalars['Int'];
  roleIds?: Maybe<Array<Scalars['Int']>>;
  searchInput?: Maybe<SubmissionSearchInput>;
  submissionIds: Array<Scalars['BigInt']>;
  tileSchemeValueCodes?: Maybe<Array<Scalars['String']>>;
};

export type MutationAddSubmissionsToAuditionGroupArgs = {
  createdBy?: Maybe<Scalars['Int']>;
  groupId: Scalars['Int'];
  roleIds?: Maybe<Array<Scalars['Int']>>;
  searchInput?: Maybe<SubmissionSearchInput>;
  submissionIds: Array<Scalars['BigInt']>;
  tileSchemeValueCodes?: Maybe<Array<Scalars['String']>>;
};

export type MutationAddSubmissionsToAuditionTalentPoolArgs = {
  createdBy?: Maybe<Scalars['Int']>;
  sessionId: Scalars['Int'];
  submissionIds: Array<Scalars['BigInt']>;
};

export type MutationAddSubmissionsToSlotArgs = {
  input: AddSubmissionsToTimeframeInput;
};

export type MutationAddTalentToMediaRequestArgs = {
  id: Scalars['ID'];
  roleIds?: Maybe<Array<Scalars['Int']>>;
  searchInput?: Maybe<WfSubmissionSearchInput>;
  submissionIds: Array<Scalars['Int']>;
  tileSchemeValueCodes?: Maybe<Array<Scalars['String']>>;
};

export type MutationAddTalentToPresentationFolderArgs = {
  presentationFolderId: Scalars['Int'];
  profileId: Array<Scalars['Int']>;
};

export type MutationAddTalentToQuestionRequestArgs = {
  id: Scalars['ID'];
  roleIds?: Maybe<Array<Scalars['Int']>>;
  searchInput?: Maybe<WfSubmissionSearchInput>;
  submissionIds: Array<Scalars['Int']>;
  tileSchemeValueCodes?: Maybe<Array<Scalars['String']>>;
};

export type MutationAddTimeframeToScheduleArgs = {
  input: AddTimeframeInput;
};

export type MutationApprovePcProjectArgs = {
  input: ApprovePcProjectInput;
};

export type MutationArchiveMediaAssetArgs = {
  accountId?: Maybe<Scalars['Float']>;
  artistId?: Maybe<Scalars['Float']>;
  mediaId?: Maybe<Scalars['Float']>;
  mediaIds?: Maybe<Array<Scalars['Int']>>;
};

export type MutationArchiveProjectsArgs = {
  projectIds: Array<Scalars['Float']>;
};

export type MutationArchiveRoleArgs = {
  roleIds: Array<Scalars['String']>;
};

export type MutationAttachCreditVideoArgs = {
  attachToProfile?: Maybe<Scalars['Boolean']>;
  creditId: Scalars['Float'];
  mediaIds: Array<Scalars['Float']>;
};

export type MutationAttachMediaToArtistArgs = {
  artistId?: Maybe<Scalars['Int']>;
  mediaId: Scalars['Int'];
};

export type MutationAttachMediaToAuditionGroupArgs = {
  inputModel: AuditionGroupMediaInput;
};

export type MutationAttachMediaToPresentationGroupArgs = {
  groupId: Scalars['Int'];
  mediaIds: Array<Scalars['Int']>;
};

export type MutationAttachMediaToProfileArgs = {
  input: AttachMediaToProfileInput;
};

export type MutationAttachMediaToProfileSkillArgs = {
  mediaId: Scalars['Int'];
  profileId: Scalars['Int'];
  profileSkillId: Scalars['BigInt'];
};

export type MutationAttachMediasToProfileArgs = {
  mediaIds: Array<Scalars['Int']>;
  profileId: Scalars['Int'];
};

export type MutationBauLoginArgs = {
  input: BauLoginInput;
};

export type MutationBauLoginByLegacyDataArgs = {
  input: BauLoginByLegacyDataInput;
};

export type MutationCancelRequestArgs = {
  id: Scalars['ID'];
  input: CancelRequestInput;
};

export type MutationCancelScheduleArgs = {
  input: CancelScheduleInput;
};

export type MutationCancelSubscriptionArgs = {
  subscriptionId: Scalars['Int'];
};

export type MutationChangeAuditionSessionTalentRoleNameArgs = {
  input: ChangeAuditionSessionTalentRoleNameInput;
};

export type MutationChangeRoleOrderArgs = {
  moveBehind?: Maybe<Scalars['Boolean']>;
  positionalRoleId: Scalars['Int'];
  projectId: Scalars['Int'];
  roleId: Scalars['Int'];
};

export type MutationChangeSubmissionOrderInAuditionGroupArgs = {
  input: ChangeAuditionGroupTalentOrderInput;
};

export type MutationCheckOtpCodeArgs = {
  otpCode: Scalars['String'];
  verificationId: Scalars['String'];
};

export type MutationClaimEnterpriseAccountArgs = {
  input: BauAccountInput;
};

export type MutationCloneMediaArgs = {
  id: Scalars['Int'];
  input: MediaTransformationInput;
};

export type MutationCompletePurchaseArgs = {
  input: PurchaseInput;
};

export type MutationContactSubTalentArgs = {
  input: ContactSubTalentInput;
};

export type MutationCopyAuditionGroupsToAuditionSessionArgs = {
  auditionGroups: Array<Scalars['Int']>;
  auditionSession: Scalars['Int'];
};

export type MutationCopyPresentationArgs = {
  input: CopyPresentationInput;
};

export type MutationCopyProfileFromExistingArgs = {
  invitationToken?: Maybe<Scalars['String']>;
  organizationId?: Maybe<Scalars['Float']>;
  profileId: Scalars['Float'];
};

export type MutationCopyProfileUnderSameArtistArgs = {
  fromProfileId: Scalars['Float'];
  toProfileId: Scalars['Float'];
};

export type MutationCopySubmissionToRoleArgs = {
  roleId: Scalars['Int'];
  submissionId: Scalars['BigInt'];
  submissionStatusCode: SubmissionStatusCodeEnum;
  tileSchemaValueCode: Scalars['String'];
};

export type MutationCreateAccountArgs = {
  audience?: Maybe<Scalars['String']>;
  input: AccountCreateInput;
  isEmailVerificationRequired?: Maybe<Scalars['Boolean']>;
};

export type MutationCreateAgencyCallListReportArgs = {
  input: AgencyCallListReportCreateInput;
};

export type MutationCreateAskQuestionRequestArgs = {
  input: AskQuestionRequestInput;
};

export type MutationCreateAuditionPresentationArgs = {
  input: AuditionPresentationInput;
};

export type MutationCreateAuthContextByAccountIdArgs = {
  accountId: Scalars['Int'];
  organizationId?: Maybe<Scalars['Int']>;
  service?: Maybe<MicroServices>;
};

export type MutationCreateBookingCallListReportArgs = {
  input: ProjectReportCreateInput;
};

export type MutationCreateChatMessageArgs = {
  messageInput: ChatMessageCreateInput;
};

export type MutationCreateChatTopicFromSubRequestArgs = {
  subRequestId: Scalars['String'];
};

export type MutationCreateCreditArgs = {
  credit: CreditInput;
};

export type MutationCreateEndUserAccountArgs = {
  input: EndUserAccountInput;
};

export type MutationCreateInternalAccountArgs = {
  input: InternalAccountCreateInput;
};

export type MutationCreateMediaRequestArgs = {
  input: MediaRequestInput;
};

export type MutationCreateOrganizationArgs = {
  input: CreateOrganizationInput;
};

export type MutationCreatePcProjectArgs = {
  input: CreatePcProjectInput;
};

export type MutationCreatePcRoleArgs = {
  input: RoleCreateInput;
};

export type MutationCreatePresentationFolderArgs = {
  input: PresentationFolderInput;
};

export type MutationCreatePresentationGroupArgs = {
  folderId: Scalars['Int'];
};

export type MutationCreatePresentationLogReportArgs = {
  input: PresentationReportCreateInput;
};

export type MutationCreatePresentationLogReportPublicArgs = {
  input: PresentationReportCreatePublicInput;
};

export type MutationCreatePresentationPickReportArgs = {
  input: PresentationReportCreateInput;
};

export type MutationCreatePresentationSizeSheetsReportArgs = {
  input: PresentationReportCreateInput;
};

export type MutationCreatePresentationSizeSheetsReportPublicArgs = {
  input: PresentationReportCreatePublicInput;
};

export type MutationCreateProfileArgs = {
  accountId?: Maybe<Scalars['Float']>;
  input: ProfileCreateInput;
};

export type MutationCreateProjectArgs = {
  input: CreateProjectInput;
};

export type MutationCreateProjectOverviewCdReportArgs = {
  input: ProjectReportCdCreateInput;
};

export type MutationCreateProjectOverviewReportArgs = {
  input: ProjectReportCreateInput;
};

export type MutationCreateProjectSubmissionReportArgs = {
  input: ProjectSubmissionCreateInput;
};

export type MutationCreateRepPackagePresentationArgs = {
  name: Scalars['String'];
};

export type MutationCreateRoleArgs = {
  input: RoleCreateInput;
};

export type MutationCreateRosterInvitationRequestArgs = {
  input: RosterInvitationRequestInput;
};

export type MutationCreateScheduleArgs = {
  input: CreateScheduleInput;
};

export type MutationCreateScheduleReportArgs = {
  input: ScheduleReportCreateInput;
};

export type MutationCreateScheduleSizeSheetsReportArgs = {
  input: ScheduleSizeSheetsReportCreateInput;
};

export type MutationCreateShareSelectPresentationArgs = {
  input: ShareSelectPresentationInput;
};

export type MutationCreateSubscriptionArgs = {
  input: CreateSubscriptionInput;
};

export type MutationCreateTalentSubmissionReportArgs = {
  input: TalentSubmissionReportCreateInput;
};

export type MutationDeclineMediaRequestByAgentArgs = {
  input: MediaDeclineInput;
};

export type MutationDeclineMediaRequestByTalentArgs = {
  input: MediaDeclineInput;
};

export type MutationDeleteAccountArgs = {
  accountId: Scalars['Float'];
};

export type MutationDeleteAllSubmissionsArgs = {
  projectId: Scalars['Float'];
  roleId: Scalars['Float'];
};

export type MutationDeleteAuditionSessionArgs = {
  id: Scalars['Int'];
};

export type MutationDeleteCommentToPresentationSubmissionPublicArgs = {
  commentId: Scalars['Int'];
  submissionId: Scalars['BigInt'];
  userName: Scalars['String'];
};

export type MutationDeleteCreditArgs = {
  creditId: Scalars['Float'];
};

export type MutationDeleteCreditMediaArgs = {
  creditId: Scalars['Float'];
  mediaId: Scalars['Float'];
};

export type MutationDeleteMediaAssetArgs = {
  accountId?: Maybe<Scalars['Float']>;
  mediaId: Scalars['Float'];
};

export type MutationDeleteMediaFromAuditionGroupArgs = {
  groupId: Scalars['Int'];
  mediaIds: Array<Scalars['Int']>;
};

export type MutationDeleteMediaFromPresentationGroupArgs = {
  groupId: Scalars['Int'];
  mediaIds: Array<Scalars['Int']>;
};

export type MutationDeleteNoteArgs = {
  noteId: Scalars['Int'];
};

export type MutationDeleteOrganzationAddressArgs = {
  addressId: Scalars['Int'];
  organizationId: Scalars['Int'];
};

export type MutationDeletePickArgs = {
  pickId: Scalars['Int'];
};

export type MutationDeletePickFromPresentationProfilePublicArgs = {
  input: DeletePresentationProfilePickPublickInput;
};

export type MutationDeletePickFromPresentationSubmissionPublicArgs = {
  guid: Scalars['String'];
  pickId: Scalars['String'];
  submissionId: Scalars['BigInt'];
};

export type MutationDeletePickFromSubmissionArgs = {
  pickId: Scalars['Int'];
  submissionId: Scalars['BigInt'];
};

export type MutationDeletePresentationArgs = {
  presentationId: Scalars['Int'];
};

export type MutationDeletePresentationFolderArgs = {
  presentationFolderId: Scalars['Int'];
};

export type MutationDeletePresentationFolderTalentArgs = {
  presentationFolderId: Scalars['Int'];
  profileId: Scalars['Int'];
};

export type MutationDeletePresentationGroupArgs = {
  groupId: Scalars['Int'];
};

export type MutationDeleteProfileArgs = {
  profileId: Scalars['Int'];
};

export type MutationDeleteProfileConflictArgs = {
  profileConflictId: Scalars['Float'];
};

export type MutationDeleteProfileListArgs = {
  listId: Scalars['Float'];
};

export type MutationDeleteProfileListEntitiesArgs = {
  input: AddOrDeleteListEntitiesInput;
};

export type MutationDeleteProfileMediaArgs = {
  mediaId: Scalars['Float'];
  profileId: Scalars['Float'];
};

export type MutationDeleteProfilePetArgs = {
  profileId: Scalars['Float'];
  profilePetId: Scalars['Float'];
};

export type MutationDeleteProfilePropArgs = {
  profileId: Scalars['Float'];
  profilePropId: Scalars['Float'];
};

export type MutationDeleteProfileSkillArgs = {
  profileSkillId: Scalars['BigInt'];
};

export type MutationDeleteProfileSportsEquipmentArgs = {
  profileId: Scalars['Float'];
  profileSportEquipmentId: Scalars['Float'];
};

export type MutationDeleteProfileVehicleArgs = {
  profileId: Scalars['Float'];
  profileVehicleId: Scalars['Float'];
};

export type MutationDeleteProfileWardrobeArgs = {
  profileId: Scalars['Float'];
  profileWardrobeId: Scalars['Float'];
};

export type MutationDeleteRepresentativeListArgs = {
  listId: Scalars['Float'];
};

export type MutationDeleteRequestArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteRoleArgs = {
  roleId: Scalars['Float'];
};

export type MutationDeleteSubmissionArgs = {
  id: Scalars['BigInt'];
};

export type MutationDeleteSubmissionCommentArgs = {
  commentId: Scalars['Int'];
  submissionId: Scalars['BigInt'];
};

export type MutationDeleteSubmissionFromPresentationGroupArgs = {
  groupId: Scalars['Int'];
  submissionId: Scalars['BigInt'];
};

export type MutationDeleteSubmissionFromSlotArgs = {
  input: DeleteSubmissionFromSlotInput;
};

export type MutationDeleteSubmissionsBulkArgs = {
  ids: Array<Scalars['BigInt']>;
};

export type MutationDeleteSubmissionsFromAuditionGroupArgs = {
  groupId: Scalars['Int'];
  submissionIds: Array<Scalars['BigInt']>;
};

export type MutationDeleteSubmissionsFromSlotArgs = {
  input: DeleteSubmissionsFromSlotInput;
};

export type MutationDeleteSubscriptionArgs = {
  transaction: Scalars['String'];
};

export type MutationDeleteTimeframeFromScheduleArgs = {
  input: DeleteTimeframeInput;
};

export type MutationEditMediaArgs = {
  id: Scalars['Int'];
  input: MediaTransformationInput;
};

export type MutationEditMediaThumbnailArgs = {
  id: Scalars['Int'];
  input: MediaTransformationInput;
};

export type MutationFinalizeMediaUploadArgs = {
  input: Array<MediaMetadataInput>;
};

export type MutationForwardRequestsArgs = {
  ccManagerEmail?: Maybe<Scalars['Boolean']>;
  ids: Array<Scalars['ID']>;
  message?: Maybe<Scalars['String']>;
};

export type MutationGetMediaUploadSignatureArgs = {
  params: Scalars['JSONObject'];
};

export type MutationGoogleLoginInternalArgs = {
  googleAuthToken: Scalars['String'];
};

export type MutationGrantTalentAccessArgs = {
  note: Scalars['String'];
  organizationId: Scalars['Float'];
  profileId: Scalars['Float'];
};

export type MutationImportPresentationFolderFromAuditionGroupArgs = {
  auditionGroupIds: Array<Scalars['Int']>;
  presentationFolderId?: Maybe<Scalars['Int']>;
  presentationFolderName?: Maybe<Scalars['String']>;
  presentationId?: Maybe<Scalars['Int']>;
  presentationName?: Maybe<Scalars['String']>;
  projectId: Scalars['Int'];
};

export type MutationImportPresentationFromAuditionArgs = {
  auditionIds: Array<Scalars['Int']>;
  isLive: Scalars['Boolean'];
  name?: Maybe<Scalars['String']>;
  presentationId?: Maybe<Scalars['Int']>;
  projectId: Scalars['Int'];
};

export type MutationInitMediaUploadArgs = {
  input: MediaInitUploadInput;
};

export type MutationInitPresentationMediaToDownloadPublicArgs = {
  guid: Scalars['String'];
  presentationFolderId: Scalars['Int'];
};

export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type MutationLoginDelegatedUserArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
  service: MicroServices;
};

export type MutationLoginImpersonatedAccountArgs = {
  accountId: Scalars['Float'];
};

export type MutationLogoutArgs = {
  refreshToken: Scalars['String'];
};

export type MutationMarkAllAsReadArgs = {
  topicKey: Scalars['String'];
};

export type MutationMarkChatMessageAsReadFromIdArgs = {
  messageId: Scalars['String'];
};

export type MutationMarkNotificationsArgs = {
  ids: Array<Scalars['ID']>;
  viewed: Scalars['Boolean'];
};

export type MutationMergeOrganizationArgs = {
  fromOrganizationId: Scalars['Float'];
  toOrganizationId: Scalars['Float'];
};

export type MutationMergeUserAccountsArgs = {
  fromAccountId: Scalars['Float'];
  toAccountId: Scalars['Float'];
};

export type MutationMoveSubmissionFromSlotArgs = {
  input: MoveSubmissionFromSlotInput;
};

export type MutationMoveSubmissionsFromSlotBulkArgs = {
  input: MoveSubmissionsFromSlotsInput;
};

export type MutationPrepareAccountForOnboardingArgs = {
  accountId: Scalars['Float'];
  paypalCode?: Maybe<Scalars['String']>;
};

export type MutationPublishRolesArgs = {
  messageToReps?: Maybe<Scalars['String']>;
  messageToTalents?: Maybe<Scalars['String']>;
  roleIds: Array<Scalars['ID']>;
};

export type MutationReAddUserToOrganizationArgs = {
  accountId: Scalars['Float'];
  organizationId: Scalars['Float'];
};

export type MutationReassignProjectToOrganizationArgs = {
  fromOrganizationId: Scalars['Float'];
  toOrganizationId: Scalars['Float'];
};

export type MutationReassociateChildOrgtoParentArgs = {
  childOrgId: Scalars['Float'];
  parentOrgId: Scalars['Float'];
};

export type MutationRefreshTokenArgs = {
  refreshToken: Scalars['String'];
};

export type MutationRejectProjectModificationArgs = {
  id: Scalars['ID'];
};

export type MutationRemoveOrganizationLogoArgs = {
  organizationId: Scalars['Float'];
};

export type MutationRemoveProfileBookoutArgs = {
  input: ProfileBookOutInput;
};

export type MutationRemoveProfileResumeArgs = {
  accountId?: Maybe<Scalars['Float']>;
  profileId: Scalars['Int'];
};

export type MutationRemoveUserFromOrganizationArgs = {
  accountId: Scalars['Float'];
  organizationId: Scalars['Float'];
};

export type MutationReplyToAskQuestionRequestArgs = {
  input: AskQuestionResponseInput;
};

export type MutationReplyToMediaRequestArgs = {
  input: MediaResponseInput;
};

export type MutationReplyToMediaRequestByAgentArgs = {
  input: MediaResponseInput;
};

export type MutationReplyToScheduleInviteRequestArgs = {
  input: ScheduleInviteResponseInput;
};

export type MutationRequestMediaChangesArgs = {
  input: MediaChangeInput;
};

export type MutationRequestSubmissionsForRolesArgs = {
  messageToReps?: Maybe<Scalars['String']>;
  messageToTalents?: Maybe<Scalars['String']>;
  roleIds: Array<Scalars['Int']>;
};

export type MutationResendCreatePasswordLinkArgs = {
  token: Scalars['String'];
};

export type MutationResendEmailVerificationArgs = {
  audience: Scalars['String'];
  token: Scalars['String'];
};

export type MutationResentVerificationEmailArgs = {
  audience: Scalars['String'];
};

export type MutationResetEmailArgs = {
  audience: Scalars['String'];
  updateInfo: UpdateAccountInput;
};

export type MutationResetPasswordArgs = {
  audience?: Maybe<Scalars['String']>;
  email: Scalars['String'];
};

export type MutationResetPasswordBauB21Args = {
  legacyInstance?: Maybe<Scalars['String']>;
  login: Scalars['String'];
};

export type MutationResetPasswordByLegacyLoginArgs = {
  legacyInstance?: Maybe<Scalars['String']>;
  legacyLogin: Scalars['String'];
};

export type MutationRestoreProjectsArgs = {
  projectIds: Array<Scalars['Float']>;
};

export type MutationRestoreRoleArgs = {
  roleIds: Array<Scalars['String']>;
};

export type MutationSendDirectEmailToPickedPackageTalentArgs = {
  message: Scalars['String'];
  packageFolderId: Scalars['Int'];
  subject?: Maybe<Scalars['String']>;
  talentCanSeeSenderAddress?: Maybe<Scalars['Boolean']>;
};

export type MutationSendDirectEmailToPresentationFolderTalentArgs = {
  message: Scalars['String'];
  presentationFolderId: Scalars['Int'];
  subject?: Maybe<Scalars['String']>;
  talentCanSeeSenderAddress?: Maybe<Scalars['Boolean']>;
};

export type MutationSendDirectMessageToTalentsArgs = {
  input: SendDirectMessageToTalentsInput;
};

export type MutationSendProjectUpdateMessageToRepsArgs = {
  input: ProjectNotificationToRepsInput;
};

export type MutationSendRequestArgs = {
  id: Scalars['ID'];
  note?: Maybe<Scalars['String']>;
  sendTo: RequestSendTo;
};

export type MutationSendScheduleInviteRequestArgs = {
  input: ScheduleInviteRequestInput;
};

export type MutationSendVerificationCodeArgs = {
  phoneNumber: Scalars['String'];
};

export type MutationSetProfileResumeArgs = {
  mediaId: Scalars['Int'];
  profileId: Scalars['Int'];
};

export type MutationSetProjectAsViewedArgs = {
  id: Scalars['ID'];
};

export type MutationSetProjectStatusArgs = {
  projectId: Scalars['ID'];
  projectStatusCodeToUpdate: Scalars['String'];
};

export type MutationSetSheduleInviteRequestStatusArgs = {
  input: ScheduleInviteSetStatusInput;
};

export type MutationShiftScheduleTimeframeArgs = {
  input: ShiftTimeframeInput;
};

export type MutationSubmitPcProjectForApprovalArgs = {
  input: UpdatePcProjectInput;
};

export type MutationSubmitSelectedSubmissionForRoleArgs = {
  roleId: Scalars['Int'];
};

export type MutationSwitchAuthContextArgs = {
  artistId?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
  refreshToken: Scalars['String'];
  role?: Maybe<SystemRoleCode>;
};

export type MutationUpdateAccountArgs = {
  accountId: Scalars['Float'];
  input: UpdateAccountInput;
};

export type MutationUpdateAccountBillingInfoArgs = {
  threeDSecureActionResultTokenId?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

export type MutationUpdateAccountNameArgs = {
  updateInfo: UpdateAccountInput;
};

export type MutationUpdateAccountPhoneArgs = {
  updateInfo: UpdateAccountInput;
};

export type MutationUpdateAccountRosterInvitationTokenArgs = {
  updateInfo: UpdateAccountInput;
};

export type MutationUpdateAddressArgs = {
  addToOrganization?: Maybe<Scalars['Boolean']>;
  addressId: Scalars['Float'];
  input: AddressInput;
};

export type MutationUpdateAgentOrganizationArgs = {
  input: AgentOrganizationInput;
};

export type MutationUpdateArtistArgs = {
  input: ArtistUpdateInput;
};

export type MutationUpdateAskQuestionRequestArgs = {
  id: Scalars['ID'];
  input: AskQuestionRequestInput;
  roleIds?: Maybe<Array<Scalars['Int']>>;
};

export type MutationUpdateAuditionGroupMediaArgs = {
  inputModel: AuditionGroupMediaInput;
};

export type MutationUpdateAuditionGroupMediaOrderArgs = {
  input: AuditionGroupMediaOrderUpdateInput;
};

export type MutationUpdateAuditionGroupThumbnailArgs = {
  groupId: Scalars['Int'];
  mediaId: Scalars['Int'];
  startOffset?: Maybe<Scalars['String']>;
};

export type MutationUpdateAuditionSessionArgs = {
  inputModel: AuditionSessionUpdateInput;
};

export type MutationUpdateAuditionSessionGroupArgs = {
  auditionGroupId: Scalars['Int'];
  inputModel: AuditionGroupInput;
};

export type MutationUpdateAuditionSessionGroupsBulkArgs = {
  auditionGroupIds: Array<Scalars['Int']>;
  inputModel: AuditionGroupBulkUpdateInput;
};

export type MutationUpdateBauAccountArgs = {
  input: BauAccountInput;
};

export type MutationUpdateBauEmailAddressArgs = {
  audience: Scalars['String'];
  email: Scalars['String'];
};

export type MutationUpdateCastingDirectorOrganizationArgs = {
  input: OrganizationInput;
};

export type MutationUpdateCreditArgs = {
  credit: CreditUpdateInput;
};

export type MutationUpdateCreditOrderArgs = {
  input: Array<CreditOrderInput>;
};

export type MutationUpdateEmailWithTokenArgs = {
  token: Scalars['String'];
};

export type MutationUpdateLegacyProfileArgs = {
  input: BauProfileUpdateInput;
};

export type MutationUpdateMediaAssetArgs = {
  input: UpdateMediaInput;
};

export type MutationUpdateMediaRequestArgs = {
  id: Scalars['ID'];
  input: MediaRequestInput;
  roleIds?: Maybe<Array<Scalars['Int']>>;
};

export type MutationUpdateMediaRequestMessageForRepresentativesArgs = {
  id: Scalars['ID'];
  message?: Maybe<Scalars['String']>;
};

export type MutationUpdateMediaRequestTalentInstructionsArgs = {
  id: Scalars['ID'];
  instructions: Scalars['String'];
};

export type MutationUpdateNoteArgs = {
  input: UpdateNoteInput;
};

export type MutationUpdateNotificationEntityTypeSubscriptionArgs = {
  input: NotificationSubscriptionInput;
};

export type MutationUpdateNotificationNotificationTypeSubscriptionArgs = {
  input: NotificationSubscriptionInput;
};

export type MutationUpdateOrganizationArgs = {
  input: UpdateOrganizationInput;
};

export type MutationUpdateOrganizationAccountArgs = {
  accountId: Scalars['Float'];
  accountsRoots: Array<OrganizationAccountInput>;
};

export type MutationUpdateOrganizationFeaturesArgs = {
  features: Array<OrganizationFeatureInput>;
};

export type MutationUpdatePcAccountArgs = {
  input: PcAccountUpdateInput;
};

export type MutationUpdatePcOrganizationsArgs = {
  input: BauPcAccountUpdateInput;
};

export type MutationUpdatePcProjectArgs = {
  input: UpdatePcProjectInput;
};

export type MutationUpdatePasswordArgs = {
  newPassword: Scalars['String'];
  oldPassword: Scalars['String'];
};

export type MutationUpdatePasswordWithTokenArgs = {
  isEmailNotificationRequired: Scalars['Boolean'];
  newPassword: Scalars['String'];
  timeZoneCode?: Maybe<Scalars['String']>;
  token: Scalars['String'];
};

export type MutationUpdatePresentationArgs = {
  input: PresentationUpdateInput;
};

export type MutationUpdatePresentationFolderArgs = {
  input: PresentationFolderUpdateInput;
};

export type MutationUpdatePresentationFolderOrderArgs = {
  behindFolderId?: Maybe<Scalars['Int']>;
  folderId: Scalars['Int'];
};

export type MutationUpdatePresentationGroupArgs = {
  input: PresentationGroupUpdateInput;
};

export type MutationUpdatePresentationGroupMediaOrderArgs = {
  groupMediaId: Scalars['Int'];
  moveAfterGroupMediaId?: Maybe<Scalars['Int']>;
};

export type MutationUpdatePresentationGroupOrderArgs = {
  groupId: Scalars['Int'];
  moveAfterGroupMediaId?: Maybe<Scalars['Int']>;
};

export type MutationUpdatePresentationGroupThumbnailArgs = {
  groupId: Scalars['Int'];
  mediaId: Scalars['Int'];
  startOffset?: Maybe<Scalars['String']>;
};

export type MutationUpdateProfileArgs = {
  accountId?: Maybe<Scalars['Float']>;
  input: ProfileUpdateInput;
};

export type MutationUpdateProfileArtistArgs = {
  artistId: Scalars['Int'];
  profileAccessToken: Scalars['String'];
};

export type MutationUpdateProfileBookoutArgs = {
  input: ProfileBookOutInput;
};

export type MutationUpdateProfileConflictArgs = {
  input: UpdateProfileConflictInput;
};

export type MutationUpdateProfileCreditTypeSortOrderArgs = {
  firstProfileCreditTypeId: Scalars['Float'];
  secondProfileCreditTypeId: Scalars['Float'];
};

export type MutationUpdateProfileListNameArgs = {
  input: UpdateListNameInput;
};

export type MutationUpdateProfileMediaArgs = {
  profileMedia: ProfileMediaInput;
};

export type MutationUpdateProfileMediaListArgs = {
  profileMediaList: Array<ProfileMediaInput>;
};

export type MutationUpdateProfileMediaVisibilityArgs = {
  mediaId: Scalars['Int'];
  profileIds: Array<Scalars['Int']>;
};

export type MutationUpdateProfilePetArgs = {
  input: ProfilePetInput;
  profileId: Scalars['Float'];
  profilePetId: Scalars['Float'];
};

export type MutationUpdateProfilePropArgs = {
  profileId: Scalars['Float'];
  profilePropId: Scalars['Float'];
  propId: Scalars['Float'];
};

export type MutationUpdateProfileSkillArgs = {
  input: ProfileSkillInput;
};

export type MutationUpdateProfileSportsEquipmentArgs = {
  profileId: Scalars['Float'];
  profileSportEquipmentId: Scalars['Float'];
  sportEquipmentId: Scalars['Float'];
};

export type MutationUpdateProfileVehicleArgs = {
  input: UpdateProfileVehicleInput;
  profileId: Scalars['Float'];
  profileVehicleId: Scalars['Float'];
};

export type MutationUpdateProfileVisibilitiesArgs = {
  profileId: Scalars['Float'];
  profileVisibilityCodes: Array<Scalars['String']>;
};

export type MutationUpdateProfileWardrobeArgs = {
  profileId: Scalars['Float'];
  profileWardrobeId: Scalars['Float'];
  wardrobeId: Scalars['Float'];
};

export type MutationUpdateProjectArgs = {
  input: UpdateProjectInput;
};

export type MutationUpdateRepresentativeListArgs = {
  input: UpdateRepresentativeListInput;
};

export type MutationUpdateRepresentativeListNameArgs = {
  input: UpdateListNameInput;
};

export type MutationUpdateRequestDueDateArgs = {
  id: Scalars['ID'];
  input: UpdateDueDateInput;
};

export type MutationUpdateRoleArgs = {
  input: RoleUpdateInput;
};

export type MutationUpdateRoleStatusArgs = {
  roleIds: Array<Scalars['Int']>;
  roleStatusCode: RoleStatusCodes;
};

export type MutationUpdateRolesWardrobeBulkArgs = {
  input: Array<RoleUpdateWardrobeInput>;
};

export type MutationUpdateScheduleBreakArgs = {
  breakId: Scalars['Int'];
  endTime: Scalars['DateTime'];
  scheduleId: Scalars['Int'];
  startTime: Scalars['DateTime'];
};

export type MutationUpdateScheduleWithAddressArgs = {
  addressInput?: Maybe<AddressInput>;
  scheduleInput: UpdateScheduleInput;
};

export type MutationUpdateSubmissionArgs = {
  input: SubmissionUpdateInput;
  syncIndexing?: Maybe<Scalars['Boolean']>;
};

export type MutationUpdateSubmissionStatusArgs = {
  input: UpdateSubmissionStatusInput;
};

export type MutationUpdateSubmissionsInAuditionTalentPoolArgs = {
  sessionId: Scalars['Int'];
  submissionSnapshotIds: Array<AuditionSubmissionSnapshotInput>;
};

export type MutationUpdateSubmissionsStatusArgs = {
  statusCode: Scalars['String'];
  submissionIds: Array<Scalars['BigInt']>;
};

export type MutationUpdateVerificationEmailArgs = {
  audience: Scalars['String'];
  email: Scalars['String'];
};

export type MutationUpgradePcOrgToCdArgs = {
  organizationId: Scalars['Float'];
};

export type MutationVerifyBauAccountArgs = {
  token: Scalars['String'];
};

export type MutationWidenPublicationRolesArgs = {
  messageToReps?: Maybe<Scalars['String']>;
  messageToTalents?: Maybe<Scalars['String']>;
  roleIds: Array<Scalars['Int']>;
  rolePublicationSettings: Array<RolePublicationSettingInput>;
};

export type Neck = {
  __typename?: 'Neck';
  /** Imperial Feet Inches */
  IMPERIAL_FEET_INCHES?: Maybe<Scalars['String']>;
  /** Imperial Inches */
  IMPERIAL_INCHES: Scalars['Float'];
  /** Metric Centimeters */
  METRIC_CENTIMETERS: Scalars['Int'];
  /** Centimeters */
  cm: Scalars['Int'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** Inches */
  inch: Scalars['Float'];
  /** Inches rounded */
  inchRounded: Scalars['String'];
  /** Show in imperial UI */
  showInImperialUI: Scalars['Boolean'];
};

/** Note object type */
export type Note = {
  __typename?: 'Note';
  /** Get Account object for the Note */
  account: Account;
  /** Account id who created the note */
  accountId: Scalars['Int'];
  /** Comment */
  comment: Scalars['String'];
  /** Created Date */
  created: Scalars['DateTime'];
  entityId: Scalars['BigInt'];
  entityType: EntityType;
  /** Note Id */
  id: Scalars['Int'];
  noteModifier?: Maybe<NoteModifier>;
  noteType?: Maybe<NoteType>;
  /** Project status at the moment when note was added */
  projectStatus?: Maybe<ProjectStatus>;
};

/** Note Modifier object */
export type NoteModifier = {
  __typename?: 'NoteModifier';
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  entityType: EntityType;
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

/** Paginated result with [Note] objects */
export type NotePaginatedResult = {
  __typename?: 'NotePaginatedResult';
  /** List of Note objects */
  objects: Array<Note>;
  /** Current page */
  page: Scalars['Int'];
  /** Total count of rows */
  totalCount: Scalars['Int'];
  /** Total pages */
  totalPages: Scalars['Int'];
};

/** Note Type object */
export type NoteType = {
  __typename?: 'NoteType';
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

export const NoteTypeEnum = {
  AddIn: 'ADD_IN',
  AdminNote: 'ADMIN_NOTE',
  AgentNote: 'AGENT_NOTE',
  CdTalentNote: 'CD_TALENT_NOTE',
  FastcaptureNote: 'FASTCAPTURE_NOTE',
  PermanentNote: 'PERMANENT_NOTE',
  PermanentSubmissionNote: 'PERMANENT_SUBMISSION_NOTE',
  SubmissionNote: 'SUBMISSION_NOTE',
} as const;

export type NoteTypeEnum = typeof NoteTypeEnum[keyof typeof NoteTypeEnum];
export type Notification = {
  __typename?: 'Notification';
  context?: Maybe<NotificationContext>;
  from?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  message: Scalars['String'];
  subject: Scalars['String'];
  timestamp: Scalars['DateTime'];
  toAccountId?: Maybe<Scalars['Int']>;
  toArtistId?: Maybe<Scalars['Int']>;
  toProfileId: Scalars['Int'];
  type: Scalars['String'];
  viewed?: Maybe<Scalars['Boolean']>;
};

export type NotificationContext = {
  __typename?: 'NotificationContext';
  requestId?: Maybe<Scalars['ID']>;
  requestType?: Maybe<RequestType>;
};

/** Notification Entity Subscription object type */
export type NotificationEntitySubscription = {
  __typename?: 'NotificationEntitySubscription';
  /** Subscription Creator Id */
  accountId: Scalars['Int'];
  /** Artist Id */
  artistId: Scalars['Int'];
  /** Created Date */
  created: Scalars['DateTime'];
  /** Entity Id */
  entityId?: Maybe<Scalars['BigInt']>;
  entityType?: Maybe<EntityType>;
  /** Entity Type Id */
  entityTypeId?: Maybe<Scalars['Int']>;
  /** Notification Id */
  id?: Maybe<Scalars['ID']>;
  /** Notification Id */
  notificationId?: Maybe<Scalars['Int']>;
  notificationNature?: Maybe<NotificationNature>;
  notificationType?: Maybe<NotificationType>;
  /** Organization Id */
  organizationId?: Maybe<Scalars['Int']>;
  projectType?: Maybe<ProjectType>;
  rolePaidType?: Maybe<PaidType>;
  roleTarget?: Maybe<RoleTarget>;
};

/** Notification Nature object */
export type NotificationNature = {
  __typename?: 'NotificationNature';
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

/** Order By options, default set to timestamp DESC */
export type NotificationOrderByInput = {
  /** Timestamp Sort field */
  timestamp: SortOrder;
};

export type NotificationPagedList = {
  __typename?: 'NotificationPagedList';
  data: Array<Notification>;
  page: Scalars['Int'];
  totalCount: Scalars['Int'];
  totalPages: Scalars['Int'];
};

/** Add/Update Notification Subscription Input Type */
export type NotificationSubscriptionInput = {
  /** Account Id that notification subscription will be assigned to */
  accountId?: Maybe<Scalars['Int']>;
  /** Artist Id that notification subscription will be assigned to */
  artistId?: Maybe<Scalars['Int']>;
  /** Entity Type Subscription Array */
  entitySubscription?: Maybe<Array<EntitySubscriptionInput>>;
  /** Notification Subscription ID which should be updated */
  notificationId?: Maybe<Scalars['ID']>;
  notificationPhone?: Maybe<Scalars['ID']>;
  /** Notification Type Subscription Array */
  notificationTypeSubscription?: Maybe<Array<NotificationTypeSubscriptionInput>>;
  /** Organization Id that notification subscription will be assigned to */
  organizationId?: Maybe<Scalars['Int']>;
};

/** Notification Type object */
export type NotificationType = {
  __typename?: 'NotificationType';
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

/** Notification Notitifcation Type Subscription object type */
export type NotificationTypeNotificationSubscription = {
  __typename?: 'NotificationTypeNotificationSubscription';
  /** Subscription Creator Id */
  accountId: Scalars['Int'];
  /** Artist Id */
  artistId: Scalars['Int'];
  /** Created Date */
  created: Scalars['DateTime'];
  entityType?: Maybe<EntityType>;
  /** Notification Id */
  notificationId?: Maybe<Scalars['Int']>;
  notificationNature?: Maybe<NotificationNature>;
  /** Notification Nature Id */
  notificationNatureId?: Maybe<Scalars['Int']>;
  notificationType?: Maybe<NotificationType>;
  /** Notification Type Id */
  notificationTypeId?: Maybe<Scalars['Int']>;
  /** Organization Id */
  organizationId?: Maybe<Scalars['Int']>;
  projectType?: Maybe<ProjectType>;
  rolePaidType?: Maybe<PaidType>;
  roleTarget?: Maybe<RoleTarget>;
};

/** Input type for notification type subscription */
export type NotificationTypeSubscriptionInput = {
  /** Notification Nature CODE */
  notificationNatureCode: Scalars['String'];
  /** Notification Type CODE */
  notificationTypeCode: Scalars['String'];
  /** Subscription status */
  subscriptionStatus: Scalars['Boolean'];
};

/** Account status object */
export type OnboardingStatus = {
  __typename?: 'OnboardingStatus';
  /** code */
  code: Scalars['String'];
  /** Is this enabled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

/** Input type for ordered items like Working Location or Ethnic Appearance */
export type OrderedItemInput = {
  id: Scalars['ID'];
  order: Scalars['Int'];
};

/** Organization object */
export type Organization = {
  __typename?: 'Organization';
  /** Abbreviation */
  abbreviation?: Maybe<Scalars['String']>;
  accountCount?: Maybe<Scalars['Float']>;
  /** Organization accounts */
  accounts: Array<Account>;
  /** Linked organizations */
  addresses?: Maybe<Array<Address>>;
  contacts?: Maybe<Array<Contact>>;
  country: Array<Country>;
  created?: Maybe<Scalars['DateTime']>;
  /** Creator ID */
  creatorId?: Maybe<Scalars['Int']>;
  /** Diversity disclaimer */
  diversityDisclaimer?: Maybe<Scalars['String']>;
  divisions: Array<Organization>;
  dmas?: Maybe<Array<Dma>>;
  features?: Maybe<Array<Feature>>;
  /** Primary ID */
  id: Scalars['Int'];
  /** Tells whether it is organization or division */
  isOrganization?: Maybe<Scalars['Boolean']>;
  /** Last updated/modified datetime */
  lastUpdated?: Maybe<Scalars['DateTime']>;
  linkedAccount: Scalars['Float'];
  linkedAccountDivision: Array<Organization>;
  linkedDivisionId?: Maybe<Scalars['Float']>;
  linkedDivisions: Array<Organization>;
  /** Linked organizations */
  linkedOrganizations: Array<Organization>;
  logo?: Maybe<Media>;
  /** Logo media ID */
  logoMediaId?: Maybe<Scalars['Int']>;
  /** Organization name */
  name?: Maybe<Scalars['String']>;
  /** Note */
  note?: Maybe<Scalars['String']>;
  /** Parent organization ID */
  organizationParentId?: Maybe<Scalars['Int']>;
  organizationPhone?: Maybe<Array<Phone>>;
  organizationStatus: Array<OrganizationStatus>;
  /** Parent Organization name */
  parentName?: Maybe<Scalars['String']>;
  parentOrganization?: Maybe<Organization>;
  /** Organization phone list */
  phone: Array<Scalars['String']>;
  profileCount?: Maybe<Scalars['Float']>;
  /** Profile list ID */
  profileListId?: Maybe<Scalars['Int']>;
  /** Organization profiles */
  profiles: Array<Profile>;
  /** Project casting assistant */
  projectCastingAssistant?: Maybe<Scalars['String']>;
  /** Project casting associate */
  projectCastingAssociate?: Maybe<Scalars['String']>;
  /** Project casting director */
  projectCastingDirector?: Maybe<Scalars['String']>;
  representationAgeCategory?: Maybe<Array<RepresentationAgeCategory>>;
  representationCategory?: Maybe<Array<RepresentationCategory>>;
  representationCategoryList?: Maybe<Array<Scalars['Int']>>;
  representationProfile: Array<Profile>;
  representationType: Array<RepresentationType>;
  /** Representation type ID */
  representationTypeId?: Maybe<Scalars['Int']>;
  representationTypes: Array<RepresentationType>;
  /** Schedule address note */
  scheduleAddressNote?: Maybe<Scalars['String']>;
  searchDivisions: Array<Organization>;
  /** Organization status */
  status?: Maybe<Scalars['Float']>;
  /** System role ID */
  sytemRoleId?: Maybe<Scalars['Int']>;
  tags: Array<Tag>;
  /** Tile scheme ID */
  tileSchemeId?: Maybe<Scalars['Int']>;
  /** Website url */
  websiteUrl?: Maybe<Scalars['String']>;
};

/** Organization object */
export type OrganizationAccountsArgs = {
  statusIds?: Maybe<Array<Scalars['Int']>>;
};

/** Object that represent realtion between organization and account */
export type OrganizationAccount = {
  __typename?: 'OrganizationAccount';
  accountId: Scalars['Float'];
  isAdmin: Scalars['Boolean'];
  organizationId: Scalars['Float'];
  organizationStatus: Scalars['Float'];
};

export type OrganizationAccountInput = {
  enabled: Scalars['Boolean'];
  isAdmin: Scalars['Boolean'];
  organizationId: Scalars['Int'];
};

export type OrganizationDictionaryItem = {
  __typename?: 'OrganizationDictionaryItem';
  /** Organization abbreviation */
  abbreviation?: Maybe<Scalars['String']>;
  /** Primary ID */
  id: Scalars['Int'];
  /** Organization name */
  name?: Maybe<Scalars['String']>;
};

export type OrganizationDictionaryItemPagedList = {
  __typename?: 'OrganizationDictionaryItemPagedList';
  data: Array<OrganizationDictionaryItem>;
  page: Scalars['Int'];
  totalCount: Scalars['Int'];
  totalPages: Scalars['Int'];
};

/** Input type for Organization Feature */
export type OrganizationFeatureInput = {
  enabled: Scalars['Boolean'];
  featureId: Scalars['Int'];
};

export type OrganizationFilter = {
  __typename?: 'OrganizationFilter';
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type OrganizationInfo = {
  __typename?: 'OrganizationInfo';
  category: Array<RepresentationCategory>;
  categoryName: Array<Scalars['String']>;
  /** Primary ID */
  id: Scalars['Int'];
  name: Scalars['String'];
};

/** Creates or update organization contact or address on given input values */
export type OrganizationInput = {
  /** Address Id */
  addressId?: Maybe<Scalars['Float']>;
  /** City */
  city: Scalars['String'];
  /** Company Address Line 1 */
  companyAddressLine1: Scalars['String'];
  /** Company Address Line 2 */
  companyAddressLine2?: Maybe<Scalars['String']>;
  /** Company Phone Number */
  companyPhoneNumber?: Maybe<Scalars['String']>;
  /** Contact Id */
  contactId?: Maybe<Scalars['Float']>;
  /** Country Id */
  countryId: Scalars['Float'];
  /** is update org info */
  isUpdateOrgInfo: Scalars['Boolean'];
  /** Organization Id */
  organizationId: Scalars['Float'];
  /** Organization Parent Id */
  parentOrganizationId?: Maybe<Scalars['Float']>;
  /** Primary Contact Email */
  primaryContactEmail: Scalars['String'];
  /** Primary Contact Name */
  primaryContactName: Scalars['String'];
  /** Primary Contact Phone Number */
  primaryContactPhoneNumber: Scalars['String'];
  /** State Id */
  stateId?: Maybe<Scalars['Float']>;
  /** Zip */
  zip: Scalars['String'];
};

export type OrganizationItem = {
  __typename?: 'OrganizationItem';
  /** abbreviation */
  abbreviation?: Maybe<Scalars['String']>;
  /** Account Count */
  accountCount?: Maybe<Scalars['Int']>;
  accounts?: Maybe<Array<AccountItem>>;
  created?: Maybe<Scalars['DateTime']>;
  divisions?: Maybe<Array<OrganizationItem>>;
  dmas?: Maybe<Array<DmaItem>>;
  /** Primary ID */
  id: Scalars['Int'];
  logo?: Maybe<MediaItem>;
  /** Organization name */
  name?: Maybe<Scalars['String']>;
  /** Parent organization ID */
  organizationParentId?: Maybe<Scalars['Int']>;
  /** Profile Count */
  profileCount?: Maybe<Scalars['Int']>;
  representationCategory?: Maybe<Array<RepresentationCategory>>;
  representationType?: Maybe<RepresentationType>;
  updated?: Maybe<Scalars['DateTime']>;
};

export type OrganizationItemPagedList = {
  __typename?: 'OrganizationItemPagedList';
  data: Array<OrganizationItem>;
  page: Scalars['Int'];
  totalCount: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type OrganizationLogo = {
  __typename?: 'OrganizationLogo';
  fileKey: Scalars['String'];
  id: Scalars['Float'];
};

/** Organization search input */
export type OrganizationSearchInput = {
  /** Organization abbreviation */
  abbreviation?: Maybe<Scalars['String']>;
  /** List of DMA Id */
  dmas?: Maybe<Array<Scalars['Int']>>;
  /** Defines whether search should use 'add' or 'or' clause with input parameters */
  multiMatch?: Maybe<Scalars['Boolean']>;
  /** Organization name */
  name?: Maybe<Scalars['String']>;
  /** Organization Id */
  organizationId?: Maybe<Scalars['Int']>;
  /** Organization parent Id */
  organizationParentId?: Maybe<Scalars['Int']>;
  /** Organization parent Ids */
  organizationParentIds?: Maybe<Array<Scalars['Int']>>;
  /** Organization Status Ids */
  organizationStatusIds?: Maybe<Scalars['Int']>;
  parent?: Maybe<Scalars['Boolean']>;
  /** List of Representation Age Category Id */
  representationAgeCategoryIds?: Maybe<Array<Scalars['Int']>>;
  /** List of Representation Category Id */
  representationCategoryIds?: Maybe<Array<Scalars['Int']>>;
  /** List of Representation Category Id */
  representationCategoryList?: Maybe<Array<Scalars['Int']>>;
  /** Organization Type Id */
  representationTypeId?: Maybe<Scalars['Int']>;
  /** List of Representation Type Id */
  representationTypeIds?: Maybe<Array<Scalars['Int']>>;
  /** System Role Id for account/user */
  systemRoleId?: Maybe<Scalars['Int']>;
};

/** Organization search result */
export type OrganizationSearchResult = {
  __typename?: 'OrganizationSearchResult';
  /** List of organization */
  organizations?: Maybe<Array<Organization>>;
  /** Total records count */
  totalCount: Scalars['Int'];
};

/** Organization Status */
export type OrganizationStatus = {
  __typename?: 'OrganizationStatus';
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

/** Input for get orgs by representation type + piece of/full name of org */
export type OrganizationsByRepTypeAndNameInput = {
  /**
   * Org name or part of the Org name. Could be null in case if first N(page cfg)
   * records need to be presented in order to sort by name asc
   */
  orgName?: Maybe<Scalars['String']>;
  /** Codes of sought org representation type */
  orgRepTypeCodes: Array<Scalars['String']>;
  /** Pagination config */
  page: PageInput;
  /** Optional: ids of orgs used for search by org rep type+org name */
  targetOrganizationIds?: Maybe<Array<Scalars['Int']>>;
};

/** Object that represent organization data retreived by org representation type and partial/full name match */
export type OrganizationsByRepTypeAndNameResult = {
  __typename?: 'OrganizationsByRepTypeAndNameResult';
  orgId: Scalars['Float'];
  /** Organization object */
  organization: Organization;
};

/** Paginated result with [OrganizationsByRepTypeAndNameResult] objects */
export type OrganizationsByRepTypeAndNameResultPaginatedResult = {
  __typename?: 'OrganizationsByRepTypeAndNameResultPaginatedResult';
  /** List of OrganizationsByRepTypeAndNameResult objects */
  objects: Array<OrganizationsByRepTypeAndNameResult>;
  /** Current page */
  page: Scalars['Int'];
  /** Total count of rows */
  totalCount: Scalars['Int'];
  /** Total pages */
  totalPages: Scalars['Int'];
};

/** Object that represent Reps divisions/agencies and count of their submissions to particular role */
export type OrganizationsByRoleSubmissionsAndName = {
  __typename?: 'OrganizationsByRoleSubmissionsAndName';
  orgId: Scalars['Int'];
  /** Organization object */
  organization: Organization;
  submissionsCount: Scalars['BigInt'];
};

/** Paginated result with [OrganizationsByRoleSubmissionsAndName] objects */
export type OrganizationsByRoleSubmissionsAndNamePaginatedResult = {
  __typename?: 'OrganizationsByRoleSubmissionsAndNamePaginatedResult';
  /** List of OrganizationsByRoleSubmissionsAndName objects */
  objects: Array<OrganizationsByRoleSubmissionsAndName>;
  /** Current page */
  page: Scalars['Int'];
  /** Total count of rows */
  totalCount: Scalars['Int'];
  /** Total pages */
  totalPages: Scalars['Int'];
};

export type PcAccountUpdateInput = {
  accountId: Scalars['ID'];
  companyName?: Maybe<Scalars['String']>;
  facebookLink?: Maybe<Scalars['String']>;
  imdbLink?: Maybe<Scalars['String']>;
  instagramLink?: Maybe<Scalars['String']>;
  institutionName?: Maybe<Scalars['String']>;
  portfolio?: Maybe<Scalars['String']>;
  professionalBio?: Maybe<Scalars['String']>;
  twitterLink?: Maybe<Scalars['String']>;
  vimeoLink?: Maybe<Scalars['String']>;
  youtubeLink?: Maybe<Scalars['String']>;
};

/** Determined location Address Input for creating PC project */
export type PcProjectDeterminedAddressInput = {
  /** City */
  city: Scalars['String'];
  /** Country CODE */
  countryCode: Scalars['String'];
  /** Location notes */
  locationNotes?: Maybe<Scalars['String']>;
};

/** Specific location Address Input for creating IPC project */
export type PcProjectSpecificAddressInput = {
  /** Address Line 1 */
  addressLine1: Scalars['String'];
  /** Address Line 2 */
  addressLine2?: Maybe<Scalars['String']>;
  /** City */
  city: Scalars['String'];
  /** Country CODE */
  countryCode: Scalars['String'];
  /** Location notes */
  locationNotes?: Maybe<Scalars['String']>;
  /** ZIP/Postal Code */
  postalCode: Scalars['String'];
  /** State / Province Id */
  stateId: Scalars['Int'];
};

/** Page Input object */
export type PageInput = {
  /** Page number */
  pageNumber: Scalars['Int'];
  /** Page size */
  pageSize: Scalars['Int'];
};

/** PaidType object */
export type PaidType = {
  __typename?: 'PaidType';
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

/** Measurement object */
export type Pants = {
  __typename?: 'Pants';
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Gender */
  gender: BasicSetting;
  /** Primary ID */
  id: Scalars['Int'];
  /** Size for AU */
  sizeAU: Scalars['String'];
  /** Size for EU */
  sizeEU: Scalars['String'];
  /** Numeric size */
  sizeNumeric: Scalars['Int'];
  /** Size for UK */
  sizeUK: Scalars['String'];
  /** Size for US */
  sizeUS: Scalars['String'];
};

/** Partial BAU account details */
export type PartialBauAccountDetails = {
  __typename?: 'PartialBauAccountDetails';
  accountStatusCode: Scalars['String'];
  partialEmail: Scalars['String'];
  partialPhones: Array<Scalars['String']>;
  projectNames?: Maybe<Array<Scalars['String']>>;
  roles: Array<SystemRole>;
  stageName?: Maybe<Scalars['String']>;
};

export type PartialBauAccountDetailsInput = {
  legacyInstance?: Maybe<Scalars['String']>;
  legacyLogin: Scalars['String'];
  migratedAccountID?: Maybe<Scalars['Float']>;
};

export const PayPreferencesEnum = {
  No: 'NO',
  PayIsDeferred: 'PAY_IS_DEFERRED',
  Unlisted: 'UNLISTED',
  Yes: 'YES',
} as const;

export type PayPreferencesEnum =
  typeof PayPreferencesEnum[keyof typeof PayPreferencesEnum];
export const PaypalLocation = {
  Au: 'AU',
  Eu: 'EU',
} as const;

export type PaypalLocation = typeof PaypalLocation[keyof typeof PaypalLocation];
/** Pet object */
export type Pet = {
  __typename?: 'Pet';
  /** child objects */
  childObjects: Array<Pet>;
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** parent object */
  parentObject?: Maybe<Pet>;
  /** Selectable Flag */
  selectable: Scalars['Boolean'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

/** PetSize object */
export type PetSize = {
  __typename?: 'PetSize';
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

export type Phone = {
  __typename?: 'Phone';
  entityId?: Maybe<Scalars['BigInt']>;
  entityTypeId?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  phoneTypeId?: Maybe<Scalars['Int']>;
};

/** Piercing object */
export type Piercing = {
  __typename?: 'Piercing';
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

/** Input type for search by piercing attributes */
export type PiercingInput = {
  /** Piercing id list */
  piercingId?: Maybe<Array<Scalars['ID']>>;
  /** Piercing description */
  piercingNote?: Maybe<Scalars['String']>;
};

export type PlanFeatureModel = {
  __typename?: 'PlanFeatureModel';
  code: Scalars['String'];
  credit: Scalars['Int'];
  currency?: Maybe<Currency>;
  isPermanent: Scalars['Boolean'];
  itemCode: Scalars['String'];
  itemId: Scalars['ID'];
  name: Scalars['String'];
  planId: Scalars['ID'];
  price?: Maybe<Scalars['Float']>;
};

/** Subscription Plan */
export type PlanModel = {
  __typename?: 'PlanModel';
  billingCode?: Maybe<Scalars['String']>;
  billingProviderId?: Maybe<Scalars['ID']>;
  code?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  currency?: Maybe<Currency>;
  enabled?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  isBasePlan?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  planCurrencyCode?: Maybe<Scalars['String']>;
  planStatusId?: Maybe<Scalars['ID']>;
  planTerm?: Maybe<PlanTermModel>;
  price?: Maybe<Scalars['Float']>;
  sortOrder?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['DateTime']>;
};

export type PlanTermModel = {
  __typename?: 'PlanTermModel';
  code?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

/** Presentation */
export type Presentation = {
  __typename?: 'Presentation';
  /** Creation Date */
  createdAt: Scalars['DateTime'];
  /** Account of creator */
  createdBy?: Maybe<Account>;
  /** Creator Account ID */
  createdById: Scalars['Int'];
  /** Number of Folders in Presentation */
  foldersCount: Scalars['Int'];
  /** GUID */
  guid: Scalars['ID'];
  /** ID of presentation */
  id: Scalars['Int'];
  isLive: Scalars['Boolean'];
  /** Account of updater */
  linkExpired?: Maybe<Scalars['Boolean']>;
  /** Link expiration date */
  linkExpiresAt?: Maybe<Scalars['DateTime']>;
  /** Name of presentation */
  name: Scalars['String'];
  organization: Organization;
  passwordSet: Scalars['Boolean'];
  /** presentation type */
  project?: Maybe<Project>;
  /** Project ID of presentation */
  projectId?: Maybe<Scalars['Int']>;
  settings?: Maybe<PresentationSettings>;
  /** presentation type */
  type?: Maybe<PresentationType>;
  /** Update Date */
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** Account of updater */
  updatedBy?: Maybe<Account>;
  /** Updated Account ID */
  updatedById?: Maybe<Scalars['Int']>;
};

export type PresentationFilterData = {
  __typename?: 'PresentationFilterData';
  commentersAccountIds?: Maybe<Array<Scalars['String']>>;
  folders?: Maybe<Array<PresentationFilterFolder>>;
  picksUser?: Maybe<Array<Scalars['String']>>;
  roles?: Maybe<Array<PresentationFilterRole>>;
};

export type PresentationFilterFolder = {
  __typename?: 'PresentationFilterFolder';
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type PresentationFilterInput = {
  /** Users who made comments on presentation */
  commentersAccountIds?: Maybe<Array<Scalars['String']>>;
  /** Users who made pick on presenatation */
  pickUsers?: Maybe<Array<Scalars['String']>>;
  presenetationFolderIds?: Maybe<Array<Scalars['Int']>>;
  presentationGuid?: Maybe<Scalars['String']>;
  presentationId?: Maybe<Scalars['Int']>;
  roleIds?: Maybe<Array<Scalars['Int']>>;
  roleNames?: Maybe<Array<Scalars['String']>>;
  stageName?: Maybe<Scalars['String']>;
};

export type PresentationFilterRole = {
  __typename?: 'PresentationFilterRole';
  id?: Maybe<Scalars['Float']>;
  name: Scalars['String'];
};

/** Presentation Folder */
export type PresentationFolder = {
  __typename?: 'PresentationFolder';
  /** Date when was created */
  createdAt: Scalars['DateTime'];
  /** Groups Count */
  groupCount: Scalars['Int'];
  /** ID of presentation folder */
  id: Scalars['Int'];
  /** Name of presentation folder */
  name: Scalars['String'];
  /** Order of appearance */
  order: Scalars['Int'];
  /** ID of presentation */
  presentationId: Scalars['Int'];
  /** Submissions Count */
  submissionCount: Scalars['Int'];
  /** Talents Count */
  talentCount: Scalars['Int'];
  /** Date when was updated */
  updatedAt?: Maybe<Scalars['DateTime']>;
};

/** Presentation Folder input type */
export type PresentationFolderInput = {
  /** Name for presentation folder */
  name: Scalars['String'];
  /** Presentation ID */
  presentationId: Scalars['Int'];
};

export type PresentationFolderPublic = {
  __typename?: 'PresentationFolderPublic';
  /** Date when was created */
  createdAt: Scalars['DateTime'];
  /** Groups Count */
  groupCount: Scalars['Int'];
  groups: Array<PresentationGroupPublic>;
  groupsByFilter: Array<PresentationGroupPublic>;
  /** ID of presentation folder */
  id: Scalars['Int'];
  /** Name of presentation folder */
  name: Scalars['String'];
  /** Order of appearance */
  order: Scalars['Int'];
  presentation: PresentationPublic;
  /** ID of presentation */
  presentationId: Scalars['Int'];
  /** Submissions Count */
  submissionCount: Scalars['Int'];
  /** Talents Count */
  talentCount: Scalars['Int'];
  /** Folder talents of the package presentation */
  talents: Array<PresentationTalentPublic>;
  talentsWithPicksCount: Scalars['Int'];
  /** Date when was updated */
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PresentationFolderPublicGroupsArgs = {
  hasPicks?: Maybe<Scalars['Boolean']>;
};

export type PresentationFolderPublicGroupsByFilterArgs = {
  input: PresentationFilterInput;
};

export type PresentationFolderPublicTalentsArgs = {
  pageInput?: Maybe<PageInput>;
};

/** Presentation Folder Talent */
export type PresentationFolderTalent = {
  __typename?: 'PresentationFolderTalent';
  /** Total count of comments for the talent */
  commentCount: Scalars['Int'];
  /** ID of the presentation folder */
  folderId: Scalars['Int'];
  /** ID of the presentation group */
  groupId: Scalars['Int'];
  id: Scalars['ID'];
  /** Total count of picks for the talent */
  pickCount: Scalars['Int'];
  pickedBy?: Maybe<Array<ProfilePick>>;
  profile?: Maybe<Profile>;
};

/** Presentation Folder Update input type */
export type PresentationFolderUpdateInput = {
  /** Name for presentation folder */
  name: Scalars['String'];
  /** Presentation Folder ID */
  presentationFolderId: Scalars['Int'];
};

/** Presentation Group */
export type PresentationGroup = {
  __typename?: 'PresentationGroup';
  cover?: Maybe<Media>;
  /** Date when created */
  createdAt: Scalars['DateTime'];
  /** ID of presentation group */
  id: Scalars['Int'];
  media?: Maybe<Array<PresentationGroupMedia>>;
  mediaCount?: Maybe<Array<MediaCount>>;
  /** Name of presentation group */
  name?: Maybe<Scalars['String']>;
  /** Order of appearance */
  order: Scalars['Int'];
  presentation: Presentation;
  presentationFolder: PresentationFolder;
  /** Stage names of added talents */
  stageNames?: Maybe<Array<Scalars['String']>>;
  submissionIds: Array<Scalars['BigInt']>;
  /** Count of added talents */
  talentCount?: Maybe<Scalars['Int']>;
  /** Date when updated */
  updatedAt?: Maybe<Scalars['DateTime']>;
};

/** Presentation Group */
export type PresentationGroupMediaArgs = {
  mediaType?: Maybe<Scalars['String']>;
};

/** Represent relation between Presentation Group and Media */
export type PresentationGroupMedia = {
  __typename?: 'PresentationGroupMedia';
  id: Scalars['Int'];
  /** Media object */
  media: Media;
  /** Id of media */
  mediaId: Scalars['Int'];
  /** Name */
  name?: Maybe<Scalars['String']>;
  /** Order of appearance */
  order: Scalars['Int'];
};

export type PresentationGroupPublic = {
  __typename?: 'PresentationGroupPublic';
  cover?: Maybe<Media>;
  /** Date when created */
  createdAt: Scalars['DateTime'];
  /** ID of presentation group */
  id: Scalars['Int'];
  media?: Maybe<Array<PresentationGroupMedia>>;
  mediaCount?: Maybe<Array<MediaCount>>;
  /** Name of presentation group */
  name?: Maybe<Scalars['String']>;
  /** Order of appearance */
  order: Scalars['Int'];
  presentation?: Maybe<PresentationPublic>;
  presentationFolder?: Maybe<PresentationFolderPublic>;
  /** Stage names of added talents */
  stageNames?: Maybe<Array<Scalars['String']>>;
  submissionIds?: Maybe<Array<Scalars['BigInt']>>;
  submissions: Array<PresentationSubmissionPublic>;
  /** Count of added talents */
  talentCount?: Maybe<Scalars['Int']>;
  talents: Array<PresentationTalentPublic>;
  /** Date when updated */
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PresentationGroupPublicMediaArgs = {
  mediaType?: Maybe<Scalars['String']>;
};

export type PresentationGroupPublicSubmissionsArgs = {
  hasPicks?: Maybe<Scalars['Boolean']>;
};

export type PresentationGroupPublicTalentsArgs = {
  hasPicks?: Maybe<Scalars['Boolean']>;
  userName?: Maybe<Scalars['String']>;
};

/** Presentation Group Submission */
export type PresentationGroupSubmission = {
  __typename?: 'PresentationGroupSubmission';
  /** Total count of comments for the submission */
  commentCount: Scalars['Int'];
  /** Submission cover */
  cover?: Maybe<Media>;
  /** ID of the presentation group */
  groupId: Scalars['Int'];
  /** ID of connection between presentation group and submission */
  id: Scalars['Int'];
  /** Total count of picks for the submission */
  pickCount: Scalars['Int'];
  /** Custom presentation group talent role name. */
  roleName?: Maybe<Scalars['String']>;
  submission: Submission;
};

/** Paginated result with [PresentationGroupSubmission] objects */
export type PresentationGroupSubmissionPaginatedResult = {
  __typename?: 'PresentationGroupSubmissionPaginatedResult';
  /** List of PresentationGroupSubmission objects */
  objects: Array<PresentationGroupSubmission>;
  /** Current page */
  page: Scalars['Int'];
  /** Total count of rows */
  totalCount: Scalars['Int'];
  /** Total pages */
  totalPages: Scalars['Int'];
};

/** Presentation Group Update input type */
export type PresentationGroupUpdateInput = {
  /** Name for presentation group */
  name?: Maybe<Scalars['String']>;
  /** Presentation Group ID */
  presentationGroupId: Scalars['Int'];
};

/** Presentation Log Report Folder Model */
export type PresentationLogFolderModel = {
  __typename?: 'PresentationLogFolderModel';
  id: Scalars['ID'];
  items?: Maybe<Array<PresentationLogGroupModel>>;
  name?: Maybe<Scalars['String']>;
};

/** Presentation Log Report Payload Group Model */
export type PresentationLogGroupModel = {
  __typename?: 'PresentationLogGroupModel';
  id: Scalars['ID'];
  items?: Maybe<Array<PresentationReportTalentModel>>;
  name?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
};

/** Presentation Log Report Presentation Model */
export type PresentationLogPresentationModel = {
  __typename?: 'PresentationLogPresentationModel';
  id: Scalars['ID'];
  items?: Maybe<Array<PresentationLogFolderModel>>;
  name?: Maybe<Scalars['String']>;
};

/** Presentation Log Report Model */
export type PresentationLogReportModel = {
  __typename?: 'PresentationLogReportModel';
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<Scalars['Int']>;
  csvFileName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  organizationId?: Maybe<Scalars['Int']>;
  payload?: Maybe<PresentationLogReportPayloadModel>;
  presentationFolderIds?: Maybe<Array<Scalars['Int']>>;
  presentationId: Scalars['Int'];
  reportType: ReportTypeEnum;
  status: ReportStatusEnum;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

/** Presentation Log Report Payload Model */
export type PresentationLogReportPayloadModel = {
  __typename?: 'PresentationLogReportPayloadModel';
  castingCompanyLogo?: Maybe<ReportMediaModel>;
  presentation?: Maybe<PresentationLogPresentationModel>;
  projectName: Scalars['String'];
};

export type PresentationOrganizationPublic = {
  __typename?: 'PresentationOrganizationPublic';
  id: Scalars['Int'];
  logo?: Maybe<Media>;
  name?: Maybe<Scalars['String']>;
  parentName?: Maybe<Scalars['String']>;
};

/** Presentation Pick Report Presentation Model */
export type PresentationPickPresentationModel = {
  __typename?: 'PresentationPickPresentationModel';
  id: Scalars['ID'];
  items?: Maybe<Array<PresentationPickRoleModel>>;
  name?: Maybe<Scalars['String']>;
};

/** Presentation Pick Report Model */
export type PresentationPickReportModel = {
  __typename?: 'PresentationPickReportModel';
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<Scalars['Int']>;
  csvFileName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  organizationId?: Maybe<Scalars['Int']>;
  payload?: Maybe<PresentationPickReportPayloadModel>;
  presentationFolderIds?: Maybe<Array<Scalars['Int']>>;
  presentationId: Scalars['Int'];
  reportType: ReportTypeEnum;
  status: ReportStatusEnum;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

/** Presentation Pick Report Payload Model */
export type PresentationPickReportPayloadModel = {
  __typename?: 'PresentationPickReportPayloadModel';
  castingCompanyLogo?: Maybe<ReportMediaModel>;
  presentation?: Maybe<PresentationPickPresentationModel>;
  projectName: Scalars['String'];
};

/** Presentation Pick Report Role Model */
export type PresentationPickRoleModel = {
  __typename?: 'PresentationPickRoleModel';
  id: Scalars['ID'];
  items?: Maybe<Array<PresentationReportTalentModel>>;
  name?: Maybe<Scalars['String']>;
};

export type PresentationProjectPublic = {
  __typename?: 'PresentationProjectPublic';
  id: Scalars['Int'];
  internalName?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export type PresentationPublic = {
  __typename?: 'PresentationPublic';
  /** Creation Date */
  createdAt: Scalars['DateTime'];
  /** Account of creator */
  createdBy?: Maybe<Account>;
  /** Creator Account ID */
  createdById: Scalars['Int'];
  folder?: Maybe<Array<PresentationFolderPublic>>;
  folders: Array<PresentationFolder>;
  /** Number of Folders in Presentation */
  foldersCount: Scalars['Int'];
  /** GUID */
  guid: Scalars['ID'];
  /** ID of presentation */
  id: Scalars['Int'];
  isLive: Scalars['Boolean'];
  /** Account of updater */
  linkExpired?: Maybe<Scalars['Boolean']>;
  /** Link expiration date */
  linkExpiresAt?: Maybe<Scalars['DateTime']>;
  /** Name of presentation */
  name: Scalars['String'];
  organization?: Maybe<PresentationOrganizationPublic>;
  passwordSet: Scalars['Boolean'];
  project?: Maybe<PresentationProjectPublic>;
  /** Project ID of presentation */
  projectId?: Maybe<Scalars['Int']>;
  settings?: Maybe<PresentationSettings>;
  /** presentation type */
  type?: Maybe<PresentationType>;
  /** Update Date */
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** Account of updater */
  updatedBy?: Maybe<Account>;
  /** Updated Account ID */
  updatedById?: Maybe<Scalars['Int']>;
};

export type PresentationPublicFolderArgs = {
  folderId: Array<Scalars['Int']>;
};

/** Presentation Report Create Input Arguments */
export type PresentationReportCreateInput = {
  displayOptions?: Maybe<PresentationReportDisplayOptionsModel>;
  presentationFolderIds?: Maybe<Array<Scalars['Int']>>;
  presentationId: Scalars['Int'];
};

export type PresentationReportCreatePublicInput = {
  presentationFolderIds?: Maybe<Array<Scalars['Int']>>;
  presentationKey: Scalars['ID'];
  publicUserName: Scalars['String'];
};

/** Presentation Report Display Options Model */
export type PresentationReportDisplayOptionsModel = {
  displayOnlyTalentWithPicks?: Maybe<Array<DisplayOnlyTalentWithPicksEnum>>;
  displayTalentInfoOptions?: Maybe<Array<DisplayTalentInfoOptionsEnum>>;
  displayTalentPerPageOptions?: Maybe<DisplayTalentPerPageOptionsEnum>;
  displayTalentPhotoOptions?: Maybe<Array<DisplayTalentPhotoOptionsEnum>>;
};

/** Presentation Report Talent Model */
export type PresentationReportTalentModel = {
  __typename?: 'PresentationReportTalentModel';
  cover?: Maybe<ReportMediaModel>;
  dateOfBirth?: Maybe<Scalars['DateTime']>;
  genderAppearance?: Maybe<Array<SubFieldsGql>>;
  headshotMedia?: Maybe<ReportMediaModel>;
  id: Scalars['Int'];
  isPersonal?: Maybe<Scalars['Boolean']>;
  minor?: Maybe<Scalars['Boolean']>;
  notes?: Maybe<Array<Scalars['String']>>;
  orgAbbreviation?: Maybe<Scalars['String']>;
  orgLogo?: Maybe<OrganizationLogo>;
  orgName?: Maybe<Scalars['String']>;
  orgParentName?: Maybe<Scalars['String']>;
  orgPhone?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  roleName?: Maybe<Scalars['String']>;
  sizeSheets?: Maybe<PresentationSizeSheetsTalentModel>;
  snapshotMedia?: Maybe<ReportMediaModel>;
  stageName?: Maybe<Scalars['String']>;
  talentEmail?: Maybe<Scalars['String']>;
  talentNote?: Maybe<PresentationReportTalentNoteModel>;
  talentUnions?: Maybe<Array<Scalars['String']>>;
};

/** Presentation Report Talent Note Comment */
export type PresentationReportTalentNoteCommentModel = {
  __typename?: 'PresentationReportTalentNoteCommentModel';
  author: Scalars['String'];
  comment: Scalars['String'];
  id: Scalars['String'];
  submissionId: Scalars['BigInt'];
};

/** Presentation Report Talent Note */
export type PresentationReportTalentNoteModel = {
  __typename?: 'PresentationReportTalentNoteModel';
  comments?: Maybe<Array<PresentationReportTalentNoteCommentModel>>;
  commentsCount?: Maybe<Scalars['Float']>;
  pickedBy?: Maybe<Array<Scalars['String']>>;
  picksCount?: Maybe<Scalars['Float']>;
};

export type PresentationSettings = {
  __typename?: 'PresentationSettings';
  allowDownloadMedia: Scalars['Boolean'];
  leaveFeedback?: Maybe<Scalars['Boolean']>;
  seeOthersFeedback?: Maybe<Scalars['Boolean']>;
};

export type PresentationSettingsInput = {
  allowDownloadMedia?: Maybe<Scalars['Boolean']>;
  leaveFeedback?: Maybe<Scalars['Boolean']>;
  seeOthersFeedback?: Maybe<Scalars['Boolean']>;
};

export type PresentationSizeSheetsMetricsModel = {
  __typename?: 'PresentationSizeSheetsMetricsModel';
  cm?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  inch?: Maybe<Scalars['String']>;
  inchRounded?: Maybe<Scalars['String']>;
};

export type PresentationSizeSheetsProfileSizeModel = {
  __typename?: 'PresentationSizeSheetsProfileSizeModel';
  category?: Maybe<SubFieldsGql>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  sizeModifier?: Maybe<SubFieldsGql>;
};

/** Presentation Size Sheets Report Model */
export type PresentationSizeSheetsReportModel = {
  __typename?: 'PresentationSizeSheetsReportModel';
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<Scalars['Int']>;
  csvFileName?: Maybe<Scalars['String']>;
  displayOnlyTalentWithPicks?: Maybe<Array<DisplayOnlyTalentWithPicksEnum>>;
  displayTalentInfoOptions?: Maybe<Array<DisplayTalentInfoOptionsEnum>>;
  displayTalentPerPageOptions?: Maybe<DisplayTalentPerPageOptionsEnum>;
  displayTalentPhotoOptions?: Maybe<Array<DisplayTalentPhotoOptionsEnum>>;
  id: Scalars['ID'];
  organizationId?: Maybe<Scalars['Int']>;
  payload?: Maybe<PresentationLogReportPayloadModel>;
  presentationFolderIds?: Maybe<Array<Scalars['Int']>>;
  presentationId: Scalars['Int'];
  reportType: ReportTypeEnum;
  status: ReportStatusEnum;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PresentationSizeSheetsSizeMetricsModel = {
  __typename?: 'PresentationSizeSheetsSizeMetricsModel';
  category?: Maybe<SubFieldsGql>;
  gender?: Maybe<SubFieldsGql>;
  id: Scalars['Int'];
  shoeModifier?: Maybe<SubFieldsGql>;
  sizeAU?: Maybe<Scalars['String']>;
  sizeEU?: Maybe<Scalars['String']>;
  sizeUK?: Maybe<Scalars['String']>;
  sizeUS?: Maybe<Scalars['String']>;
};

/** Presentation Report Talent Model Size Sheets */
export type PresentationSizeSheetsTalentModel = {
  __typename?: 'PresentationSizeSheetsTalentModel';
  bust?: Maybe<PresentationSizeSheetsMetricsModel>;
  chestSize?: Maybe<PresentationSizeSheetsMetricsModel>;
  coat?: Maybe<Scalars['String']>;
  cupSize?: Maybe<Scalars['String']>;
  dressSize?: Maybe<PresentationSizeSheetsSizeMetricsModel>;
  gloveSize?: Maybe<PresentationSizeSheetsMetricsModel>;
  hatSize?: Maybe<PresentationSizeSheetsMetricsModel>;
  height?: Maybe<PresentationSizeSheetsMetricsModel>;
  hipSize?: Maybe<PresentationSizeSheetsMetricsModel>;
  inseam?: Maybe<PresentationSizeSheetsMetricsModel>;
  neck?: Maybe<PresentationSizeSheetsMetricsModel>;
  profilePants?: Maybe<Array<PresentationSizeSheetsSizeMetricsModel>>;
  profileShoeSizes?: Maybe<Array<PresentationSizeSheetsSizeMetricsModel>>;
  profileSizes?: Maybe<Array<PresentationSizeSheetsProfileSizeModel>>;
  profileTshirtSizes?: Maybe<Array<PresentationSizeSheetsProfileSizeModel>>;
  sleeve?: Maybe<PresentationSizeSheetsMetricsModel>;
  underbust?: Maybe<PresentationSizeSheetsMetricsModel>;
  waist?: Maybe<PresentationSizeSheetsMetricsModel>;
  weight?: Maybe<PresentationSizeSheetsWeightMetricsModel>;
};

export type PresentationSizeSheetsWeightMetricsModel = {
  __typename?: 'PresentationSizeSheetsWeightMetricsModel';
  id: Scalars['Int'];
  kg?: Maybe<Scalars['Float']>;
  lbs?: Maybe<Scalars['Float']>;
};

export type PresentationSubmissionComment = {
  __typename?: 'PresentationSubmissionComment';
  comment: Scalars['String'];
  /** Author's Account ID is exists */
  createdBy?: Maybe<Scalars['Int']>;
  date: Scalars['DateTime'];
  /** Presentation Group Talent Comment ID */
  id: Scalars['Int'];
  submissionId: Scalars['BigInt'];
  userName: Scalars['String'];
};

/** Paginated result with [PresentationSubmissionComment] objects */
export type PresentationSubmissionCommentPaginatedResult = {
  __typename?: 'PresentationSubmissionCommentPaginatedResult';
  /** List of PresentationSubmissionComment objects */
  objects: Array<PresentationSubmissionComment>;
  /** Current page */
  page: Scalars['Int'];
  /** Total count of rows */
  totalCount: Scalars['Int'];
  /** Total pages */
  totalPages: Scalars['Int'];
};

export type PresentationSubmissionFeedback = {
  __typename?: 'PresentationSubmissionFeedback';
  commentsCount: Scalars['Int'];
  pickedBy: Array<SubmissionPick>;
};

export type PresentationSubmissionPublic = {
  __typename?: 'PresentationSubmissionPublic';
  commentCount?: Maybe<Scalars['Int']>;
  cover?: Maybe<Media>;
  /** Primary ID */
  id: Scalars['BigInt'];
  /** Media */
  media?: Maybe<Array<SubmissionMedia>>;
  mediaCount?: Maybe<Array<MediaCount>>;
  /** Note */
  note?: Maybe<Scalars['String']>;
  pickCount?: Maybe<Scalars['Int']>;
  pickedBy?: Maybe<Array<TalentPickPublic>>;
  profile?: Maybe<PublicProfile>;
  profileId?: Maybe<Scalars['Int']>;
  /** Profile Working Location ID */
  profileWorkingLocationId?: Maybe<Scalars['Int']>;
  projectId?: Maybe<Scalars['Int']>;
  /** Requested Media */
  requestedMedia?: Maybe<Array<SubmissionMedia>>;
  roleId?: Maybe<Scalars['Int']>;
  roleName?: Maybe<Scalars['String']>;
  /** Customized Profile Working Location */
  workingLocation?: Maybe<ProfileWorkingLocation>;
};

export type PresentationTalentPublic = {
  __typename?: 'PresentationTalentPublic';
  commentCount?: Maybe<Scalars['Int']>;
  cover?: Maybe<Media>;
  dateOfBirth?: Maybe<Scalars['DateTime']>;
  groupId?: Maybe<Scalars['Int']>;
  guid?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  minor?: Maybe<Scalars['Boolean']>;
  pickCount?: Maybe<Scalars['Int']>;
  pickedBy?: Maybe<Array<TalentPickPublic>>;
  projectGuid?: Maybe<Scalars['String']>;
  roleGuid?: Maybe<Scalars['String']>;
  roleName?: Maybe<Scalars['String']>;
  stageName?: Maybe<Scalars['String']>;
  submissionId?: Maybe<Scalars['BigInt']>;
  talentUnions?: Maybe<Array<TalentUnion>>;
};

/** Paginated result with [PresentationTalentPublic] objects */
export type PresentationTalentPublicPaginatedResult = {
  __typename?: 'PresentationTalentPublicPaginatedResult';
  /** List of PresentationTalentPublic objects */
  objects: Array<PresentationTalentPublic>;
  /** Current page */
  page: Scalars['Int'];
  /** Total count of rows */
  totalCount: Scalars['Int'];
  /** Total pages */
  totalPages: Scalars['Int'];
};

/** PresentationType object */
export type PresentationType = {
  __typename?: 'PresentationType';
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

/** Presentation Update input type */
export type PresentationUpdateInput = {
  /** Date of link expiration */
  linkExpiresAt?: Maybe<Scalars['DateTime']>;
  /** Name for presentation */
  name?: Maybe<Scalars['String']>;
  /** Password */
  password?: Maybe<Scalars['String']>;
  /** Presentation ID */
  presentationId: Scalars['Int'];
  settings?: Maybe<PresentationSettingsInput>;
};

/** Talent Profile - May be associated with Account */
export type Profile = {
  __typename?: 'Profile';
  /** Checks if profile have granted access to roster */
  accessGranted: Scalars['Boolean'];
  accountId?: Maybe<Scalars['Float']>;
  ageInYears?: Maybe<Scalars['Boolean']>;
  /** Profile Artist ID */
  artistId?: Maybe<Scalars['Float']>;
  /** Profile audio assets */
  audios?: Maybe<Array<ProfileMedia>>;
  billingItems?: Maybe<Array<BillingItemModel>>;
  /** Blurb */
  blurb?: Maybe<Scalars['String']>;
  /** Bust Object */
  bust?: Maybe<Bust>;
  /** Chest size Object */
  chestSize?: Maybe<ChestSize>;
  /** Coat Object */
  coat?: Maybe<Coat>;
  /** Conflicts for the profile */
  conflicts: Array<ProfileConflict>;
  contactInfo?: Maybe<ProfileContactInfo>;
  cover?: Maybe<Media>;
  /** Created at Date */
  created?: Maybe<Scalars['DateTime']>;
  /** Profile Credits */
  credits: Array<Credit>;
  /** Profile Credits Count */
  creditsCount: Scalars['Int'];
  /** Cup size Object */
  cupSize?: Maybe<CupSize>;
  /** Date of birth */
  dateOfBirth?: Maybe<Scalars['DateTime']>;
  /** stores/holds the id of the person who has deactivated the profile */
  deactivatedBy?: Maybe<Scalars['Float']>;
  /** Default submission note */
  defaultSubmissionNote?: Maybe<Scalars['String']>;
  /** Document type(s) */
  documentTypes?: Maybe<Array<Document>>;
  /** Profile document assets */
  documents?: Maybe<Array<ProfileMedia>>;
  /** Dress size Object */
  dressSize?: Maybe<ClothesSize>;
  /** Ethnic Appearance(s) */
  ethnicAppearances?: Maybe<Array<ProfileEthnicAppearance>>;
  /** Eye Color Object */
  eyeColor?: Maybe<EyeColor>;
  /** Facial Hair Type(s) */
  facialHair?: Maybe<Array<FacialHair>>;
  /** Gender Appearance(s) */
  genderAppearances?: Maybe<Array<GenderAppearance>>;
  /** Glove size Object */
  gloveSize?: Maybe<Glove>;
  /** GUID */
  guid?: Maybe<Scalars['String']>;
  /** Hair Color Object */
  hairColor?: Maybe<HairColor>;
  /** Hair Style Object */
  hairStyle?: Maybe<HairStyle>;
  /** Profile has audio reel */
  hasAudioReel?: Maybe<Scalars['Boolean']>;
  hasAuditionHistory: Scalars['Boolean'];
  /** has Representation */
  hasRepresentation?: Maybe<Scalars['Boolean']>;
  /** Profile has resume */
  hasResume?: Maybe<Scalars['Boolean']>;
  /** Profile has video reel */
  hasVideoReel?: Maybe<Scalars['Boolean']>;
  /** Hat size Object */
  hatSize?: Maybe<HatSize>;
  /** Height Object */
  height?: Maybe<Height>;
  /** Hide credit year */
  hideCreditYear: Scalars['Boolean'];
  /** Hip size Object */
  hipSize?: Maybe<Hip>;
  /** Primary ID */
  id: Scalars['ID'];
  /** Inseam size Object */
  inseam?: Maybe<Inseam>;
  isActive: Scalars['Boolean'];
  /**
   * Returns true if profile was deactivated by a Rep user, returns false if
   * profile was deactivated by a Talent, returns null when there is no information
   * about the deactivating account
   */
  isDeactivatedByReps?: Maybe<Scalars['Boolean']>;
  isDropped: Scalars['Boolean'];
  isInactive: Scalars['Boolean'];
  /** If Profile is overscaled */
  isOverscaled: Scalars['Boolean'];
  /** Identify the personal or represented profile. */
  isPersonal: Scalars['Boolean'];
  isPlayableAgeLockedToTalent: Scalars['Boolean'];
  /** Last note for the profile */
  lastNote?: Maybe<Note>;
  /** Manager Email */
  managerEmail?: Maybe<Scalars['String']>;
  /** All profile media */
  mediaAssets?: Maybe<Array<ProfileMedia>>;
  /** Profile's primary photo */
  mediaSummary: Array<MediaCount>;
  /** Is minor */
  minor?: Maybe<Scalars['Boolean']>;
  /** Multiple Birth Object */
  multipleBirth?: Maybe<MultipleBirth>;
  /** Neck size Object */
  neck?: Maybe<Neck>;
  /** Note */
  note?: Maybe<Scalars['String']>;
  /** Notes for the profile */
  notes: Array<Note>;
  organization?: Maybe<Organization>;
  organizations?: Maybe<Array<Organization>>;
  /** Other experiences */
  otherExperiences?: Maybe<Scalars['String']>;
  /** Overscale Note */
  overscaleNote?: Maybe<Scalars['String']>;
  /** Parent Name */
  parent?: Maybe<Scalars['String']>;
  /** Profile phone */
  phone?: Maybe<Scalars['String']>;
  /** Profile photo assets */
  photos?: Maybe<Array<ProfileMedia>>;
  /** Note about piercing */
  piercingNote?: Maybe<Scalars['String']>;
  /** The age a talent can play */
  playableAge?: Maybe<Scalars['Float']>;
  /** The minimum age a talent can play */
  playableAgeMax?: Maybe<Scalars['Float']>;
  /** The maximum age a talent can play */
  playableAgeMin?: Maybe<Scalars['Float']>;
  /**
   * Date of pregnancy
   * @deprecated This field is deprecated and will be deleted once the compatible changes at the front end will be added everyewhere for pregnancyDue reference. Use pregnancyDue instead
   */
  pregnancy?: Maybe<Scalars['DateTime']>;
  /** Date of pregnancy */
  pregnancyDue?: Maybe<Scalars['DateTime']>;
  /** Profession */
  profession?: Maybe<Scalars['String']>;
  /** Get the artist media profile */
  profile: Profile;
  /** Access Token of a Profile, generated by Granting Access or Creating a Profile */
  profileAccessToken?: Maybe<Scalars['String']>;
  /** ProfileAccessToken created date */
  profileAccessTokenCreated?: Maybe<Scalars['DateTime']>;
  /** Profile Account System Role */
  profileAccountRole?: Maybe<Scalars['String']>;
  /** Get profile bookouts */
  profileBookOuts: Array<ProfileBookOuts>;
  /** Gender Identities */
  profileGenderIdentities?: Maybe<Array<ProfileGenderIdentity>>;
  /** Primary ID */
  profileId: Scalars['ID'];
  /** The Profile List ids where current profile participated */
  profileLists: Array<Scalars['Int']>;
  profileMainDivision?: Maybe<Organization>;
  profileMainOrganization?: Maybe<Organization>;
  /** media assets */
  profileMedia?: Maybe<Array<ProfileMedia>>;
  /** Profile Pants */
  profilePants: Array<Pants>;
  /** Profile pets */
  profilePets: Array<ProfilePet>;
  /** Profile piercings */
  profilePiercings: Array<Piercing>;
  /** Profile shoe sizes */
  profileShoeSizes: Array<ProfileShoeSize>;
  /** Profile general size */
  profileSizes: Array<ProfileSize>;
  /** Profile Status Object */
  profileStatus?: Maybe<ProfileStatus>;
  profileStatusId?: Maybe<Scalars['Int']>;
  /** Profile TshirtSize */
  profileTshirtSizes: Array<TShirtSize>;
  /** Profile Type */
  profileType?: Maybe<ProfileType>;
  /** Profile vehicles */
  profileVehicles: Array<ProfileVehicle>;
  /** profileVisibility Object */
  profileVisiblities?: Maybe<Array<ProfileVisibility>>;
  /** Wardrobes */
  profileWardrobes?: Maybe<Array<ProfileWardrobe>>;
  /** Project Type */
  projectType?: Maybe<Scalars['String']>;
  /** Prop Type(s) */
  props?: Maybe<Array<ProfileProp>>;
  /** Job Persuing Type(s) */
  pursuing?: Maybe<Array<Pursuing>>;
  /** User's resume document */
  resume?: Maybe<ProfileMedia>;
  /** SeekingRepresentation Object */
  seekingRepresentations?: Maybe<Array<SeekingRepresentation>>;
  selectionType: ProfileSelectionType;
  /** Skills and their Levels */
  skills?: Maybe<Array<ProfileSkill>>;
  /** Sleeve Object */
  sleeve?: Maybe<Sleeve>;
  /** Sport equipments */
  sportEquipments?: Maybe<Array<ProfileSportEquipment>>;
  /** Stage Name */
  stageName: Scalars['String'];
  /** Returns submission */
  submission?: Maybe<Submission>;
  /** Submission request's media assets */
  submissionRequestMedia: Array<SubmissionMedia>;
  /** Profile email */
  talentEmail?: Maybe<Scalars['String']>;
  /** Talent unions */
  talentUnions?: Maybe<Array<TalentProfileUnion>>;
  /** Profile tattoo */
  tattoo?: Maybe<Tattoo>;
  /** Tattoo Note */
  tattooNote?: Maybe<Scalars['String']>;
  /** Underbust size Object */
  underbust?: Maybe<UnderBust>;
  /** Unique Attribute Type(s) */
  uniqueAttributes?: Maybe<Array<UniqueAttribute>>;
  /** Updated at Date */
  updated?: Maybe<Scalars['DateTime']>;
  /** Profile video assets */
  videos?: Maybe<Array<ProfileMedia>>;
  /** Waist Object */
  waist?: Maybe<Waist>;
  /** Weight Object */
  weight?: Maybe<Weight>;
  /** Willingness Objects */
  willingness: Array<Willingness>;
  /** Work permit expiration date */
  workPermitExp?: Maybe<Scalars['DateTime']>;
  /** Working Locations */
  workingLocations?: Maybe<Array<ProfileWorkingLocation>>;
};

/** Talent Profile - May be associated with Account */
export type ProfileHasAuditionHistoryArgs = {
  organizationId?: Maybe<Scalars['Float']>;
};

/** Talent Profile - May be associated with Account */
export type ProfilePhotosArgs = {
  isPrimary?: Maybe<Scalars['Boolean']>;
};

/** Talent Profile - May be associated with Account */
export type ProfileSelectionTypeArgs = {
  roleId: Scalars['Float'];
};

/** Talent Profile - May be associated with Account */
export type ProfileSubmissionArgs = {
  roleId: Scalars['Float'];
};

/** Talent Profile - May be associated with Account */
export type ProfileSubmissionRequestMediaArgs = {
  roleId: Scalars['Float'];
};

/** Profile Access Token */
export type ProfileAccessToken = {
  __typename?: 'ProfileAccessToken';
  /** Artist Id */
  artistId: Scalars['Float'];
  /** Organization Id */
  organizationId: Scalars['Float'];
  /** ProfileAccessToken created date */
  profileAccessTokenCreated?: Maybe<Scalars['DateTime']>;
  /** Profile Id */
  profileId: Scalars['Float'];
};

/** Input type for Profile Book Out dates */
export type ProfileBookOutInput = {
  /** End Date */
  endDate?: Maybe<Scalars['DateTime']>;
  /** Profile Book Out Id */
  profileBookoutId?: Maybe<Scalars['Float']>;
  /** Profile Id */
  profileId?: Maybe<Scalars['Float']>;
  /** Start Date */
  startDate?: Maybe<Scalars['DateTime']>;
};

export type ProfileBookOuts = {
  __typename?: 'ProfileBookOuts';
  /** End Date */
  endDate?: Maybe<Scalars['DateTime']>;
  /** Profile Id */
  id?: Maybe<Scalars['ID']>;
  /** Profile Book Out Id */
  profileBookoutId?: Maybe<Scalars['Int']>;
  /** Profile Id */
  profileId?: Maybe<Scalars['Int']>;
  /** Start Date */
  startDate?: Maybe<Scalars['DateTime']>;
};

export type ProfileConflict = {
  __typename?: 'ProfileConflict';
  code?: Maybe<Scalars['String']>;
  conflictId?: Maybe<Scalars['Float']>;
  expiration?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  note?: Maybe<Scalars['String']>;
  profileConflictId?: Maybe<Scalars['Float']>;
  profileId?: Maybe<Scalars['Float']>;
};

export type ProfileContactInfo = {
  __typename?: 'ProfileContactInfo';
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

/** Input type for Create profile */
export type ProfileCreateInput = {
  /** for linking Profile to account not from current context */
  accountId?: Maybe<Scalars['Float']>;
  /** for linking Profile to an existing artist */
  artistId?: Maybe<Scalars['Float']>;
  /** Date of birth */
  dateOfBirth?: Maybe<Scalars['DateTime']>;
  /** First Name */
  firstName?: Maybe<Scalars['String']>;
  /** Invitation token from Roster Invitation Request */
  invitationToken?: Maybe<Scalars['String']>;
  /** Last Name */
  lastName?: Maybe<Scalars['String']>;
  /** is minor */
  minor?: Maybe<Scalars['Boolean']>;
  /** minor date of birth */
  minorDateOfBirth?: Maybe<Scalars['DateTime']>;
  /** Note */
  note?: Maybe<Scalars['String']>;
  /** Organization Id */
  organizationId?: Maybe<Scalars['Float']>;
  /** Profile access token granted by Rep */
  profileAccessToken?: Maybe<Scalars['String']>;
  /** profile status code */
  profileStatusCode?: Maybe<Scalars['String']>;
  /** profileStatusId */
  profileStatusId?: Maybe<Scalars['Int']>;
  /** Profile Type code */
  profileTypeCode?: Maybe<Scalars['String']>;
  /** Send Email */
  sendEmail?: Maybe<Scalars['Boolean']>;
  /** Stage Name */
  stageName: Scalars['String'];
  /** Talent Email */
  talentEmail?: Maybe<Scalars['String']>;
};

/** Context object for Profile Direct Message */
export type ProfileDirectMessageContextAndProfile = {
  __typename?: 'ProfileDirectMessageContextAndProfile';
  organizationDivision: Scalars['String'];
  organizationLogo: Scalars['String'];
  project?: Maybe<ProfileDirectMessageProjectContext>;
  role?: Maybe<ProfileDirectMessageRoleContext>;
};

/** Profile Direct Message Context input */
export type ProfileDirectMessageContextInput = {
  roleId?: Maybe<Scalars['Int']>;
  senderOrgId: Scalars['Int'];
};

/** SubContext object for Project in Profile Direct Message context */
export type ProfileDirectMessageProjectContext = {
  __typename?: 'ProfileDirectMessageProjectContext';
  castingCompanyName: Scalars['String'];
  name: Scalars['String'];
};

/** SubContext object for Role in Profile Direct Message context */
export type ProfileDirectMessageRoleContext = {
  __typename?: 'ProfileDirectMessageRoleContext';
  name: Scalars['String'];
};

/** Profile Gender Identity */
export type ProfileEthnicAppearance = {
  __typename?: 'ProfileEthnicAppearance';
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** Order of appearance */
  order?: Maybe<Scalars['Float']>;
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

export type ProfileFilter = {
  __typename?: 'ProfileFilter';
  id: Scalars['Int'];
  stageName: Scalars['String'];
};

/** All possible way for creating personal profile */
export const ProfileFromEnum = {
  New: 'NEW',
  None: 'NONE',
  Rep: 'REP',
  Unrep: 'UNREP',
} as const;

export type ProfileFromEnum = typeof ProfileFromEnum[keyof typeof ProfileFromEnum];
/** Profile Gender Identity */
export type ProfileGenderIdentity = {
  __typename?: 'ProfileGenderIdentity';
  /** Profile Gender Identity */
  genderIdentity: GenderIdentity;
  /** Profile Gender Other Identity Note  */
  genderOtherIdentityNote?: Maybe<Scalars['String']>;
};

/** Profile Ids by Account */
export type ProfileIdsByAccount = {
  __typename?: 'ProfileIdsByAccount';
  /** AccountId */
  accountId?: Maybe<Scalars['Float']>;
  /** Profile ID */
  profileId?: Maybe<Scalars['Float']>;
};

/** Update or Create B21 Profile from BAU */
export type ProfileInput = {
  /** Artist ID */
  artistId?: Maybe<Scalars['Int']>;
  /** Profile max playable age */
  maxPlayableAge: Scalars['Int'];
  /** Profile min playable age */
  minPlayableAge: Scalars['Int'];
  /** Profile primary appearance ID */
  primaryAppearanceId: Scalars['Int'];
  /** Profile primary location ID */
  primaryLocationId: Scalars['Int'];
  /** Profile ID */
  profileId: Scalars['Int'];
};

/** Profile List Details */
export type ProfileList = {
  __typename?: 'ProfileList';
  /** List creation date */
  created: Scalars['DateTime'];
  /** List's Creator Account */
  createdBy?: Maybe<Account>;
  /** List ID */
  id: Scalars['ID'];
  /** List Type Object */
  listType?: Maybe<ListType>;
  /** Account of last list editor */
  modifiedBy?: Maybe<Account>;
  /** List Name */
  name: Scalars['String'];
  /** Organization of represe */
  organization?: Maybe<Organization>;
  /** Organization ID */
  organizationId?: Maybe<Scalars['Int']>;
  profiles: ProfileSearch;
  /** Total count of profiles */
  totalProfiles: Scalars['Float'];
  /** Last list updated date */
  updated?: Maybe<Scalars['DateTime']>;
};

/** Profile List Details */
export type ProfileListProfilesArgs = {
  page: PageInput;
  profileSearchInput?: Maybe<ProfileSearchInput>;
};

/** Paginated result with [ProfileList] objects */
export type ProfileListPaginatedResult = {
  __typename?: 'ProfileListPaginatedResult';
  /** List of ProfileList objects */
  objects: Array<ProfileList>;
  /** Current page */
  page: Scalars['Int'];
  /** Total count of rows */
  totalCount: Scalars['Int'];
  /** Total pages */
  totalPages: Scalars['Int'];
};

/** Profile Media */
export type ProfileMedia = {
  __typename?: 'ProfileMedia';
  created: Scalars['DateTime'];
  /**
   * Deprecated
   * @deprecated This field is redundant as profile media visibility depends only on existence in profile_media table.
   */
  hidden: Scalars['Boolean'];
  id: Scalars['ID'];
  isPrimary: Scalars['Boolean'];
  media: Media;
  order: Scalars['Float'];
  /** @deprecated See the B21-2790: As for the photosCount field, it shouldn't be there at all. Profile photos count should be returned in a different place. */
  photosCount?: Maybe<Scalars['Int']>;
  profileMediaId: Scalars['Float'];
};

/** Profile Media */
export type ProfileMediaInput = {
  /** Is media hidden on profile? */
  isHidden?: Maybe<Scalars['Boolean']>;
  /** Is media primary? (Primary photo, video reel or audio reel) */
  isPrimary?: Maybe<Scalars['Boolean']>;
  /** Media order of appearance */
  order?: Maybe<Scalars['Int']>;
  /** Profile Media Id */
  profileMediaId: Scalars['ID'];
};

/** Profile pet */
export type ProfilePet = {
  __typename?: 'ProfilePet';
  /** child objects */
  childObjects: Array<Pet>;
  /** code */
  code: Scalars['String'];
  /** Count */
  count?: Maybe<Scalars['Float']>;
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** parent object */
  parentObject?: Maybe<Pet>;
  /** Pet Size */
  petSize?: Maybe<PetSize>;
  /** Profile pet relation id */
  profilePetId?: Maybe<Scalars['Float']>;
  /** Selectable Flag */
  selectable: Scalars['Boolean'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

/** Input type for Profile Pet */
export type ProfilePetInput = {
  /** Pet count */
  count: Scalars['Int'];
  /** Pet Id */
  petId: Scalars['Int'];
  /** Pet Size Id */
  petSizeId?: Maybe<Scalars['Int']>;
};

export type ProfilePick = {
  __typename?: 'ProfilePick';
  /** ID Pick */
  id: Scalars['Int'];
  userName: Scalars['String'];
};

/** Profile prop */
export type ProfileProp = {
  __typename?: 'ProfileProp';
  /** child objects */
  childObjects: Array<Prop>;
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** parent object */
  parentObject?: Maybe<Prop>;
  /** Profile prop relation id */
  profilePropId?: Maybe<Scalars['Float']>;
  /** Selectable Flag */
  selectable: Scalars['Boolean'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

/** Profile search object */
export type ProfileSearch = {
  __typename?: 'ProfileSearch';
  facets?: Maybe<Array<Facet>>;
  /** Search profile list */
  profiles?: Maybe<Array<Profile>>;
  /** Total number of profiles */
  totalCount?: Maybe<Scalars['Int']>;
};

/** Search input */
export type ProfileSearchInput = {
  /** blurb */
  blurb?: Maybe<Scalars['ID']>;
  /** Range of IDs for bust size */
  bustId?: Maybe<IdRangeInput>;
  /** Range of IDs for chest size */
  chestSizeId?: Maybe<IdRangeInput>;
  /** Range for Coat Ids */
  coatId?: Maybe<IdRangeInput>;
  /** Range of IDs for cup size */
  cupSizeId?: Maybe<IdRangeInput>;
  /** Document Ids */
  documentIds?: Maybe<Array<Scalars['ID']>>;
  /** Range of IDs for dress size */
  dressId?: Maybe<IdRangeInput>;
  /** Ethninc Appearance Ids */
  ethnicAppearanceIds?: Maybe<Array<Scalars['ID']>>;
  ethnicAppearances?: Maybe<Array<EthnicAppearanceEnum>>;
  excludeBookOutDates?: Maybe<DateRangeInput>;
  excludeConflictIds?: Maybe<Array<Scalars['Int']>>;
  /** Representative Profile List Ids - search profile/s if it SHOULD NOT be included into Reps Profile List */
  excludeProfileListIds?: Maybe<Array<Scalars['Int']>>;
  /** Work Unions Ids which should be excluded from the search */
  excludeTalentUnionIds?: Maybe<Array<Scalars['ID']>>;
  /** Work Unions Ids which should be excluded from the search */
  excludeTalentUnions?: Maybe<Array<TalentUnionEnum>>;
  /** Eye Color Id */
  eyeColorId?: Maybe<Array<Scalars['ID']>>;
  /** Facial Hair Ids */
  facialHairIds?: Maybe<Array<Scalars['ID']>>;
  /** Gender Appearance Ids */
  genderAppearanceIds?: Maybe<Array<Scalars['ID']>>;
  genderAppearances?: Maybe<Array<GenderAppearanceEnum>>;
  /** Gender Identity Codes */
  genderIdentities?: Maybe<Array<GenderIdentityEnum>>;
  /** Gender Identity Ids */
  genderIdentityIds?: Maybe<Array<Scalars['ID']>>;
  /** Range for Glove Size Ids */
  gloveSizeId?: Maybe<IdRangeInput>;
  /** Hair Color Id */
  hairColorId?: Maybe<Array<Scalars['ID']>>;
  /** Hair Style Id */
  hairStyleId?: Maybe<Array<Scalars['ID']>>;
  /** Has Representation */
  hasRepresentation?: Maybe<Scalars['Boolean']>;
  /** Range of Hat Size Ids */
  hatSizeId?: Maybe<IdRangeInput>;
  /** Height Range by Ids */
  heightRange?: Maybe<IdRangeInput>;
  /** Range of IDs for hip size */
  hipSizeId?: Maybe<IdRangeInput>;
  /** Range for Inseam size Ids */
  inseamId?: Maybe<IdRangeInput>;
  /** New profiles */
  isNew?: Maybe<Scalars['Boolean']>;
  /** Search by minor's age */
  minorAge?: Maybe<AgeRangeInput>;
  /** Multiple Birth Id */
  multipleBirthId?: Maybe<Array<Scalars['ID']>>;
  /** Range for Neck Ids */
  neckId?: Maybe<IdRangeInput>;
  /** Organization ID */
  organizationId?: Maybe<Scalars['Float']>;
  /** Range of IDs for pants size */
  pantsId?: Maybe<IdRangeInput>;
  /** Pet Ids */
  petIds?: Maybe<Array<Scalars['Int']>>;
  /** Pet Size Id */
  petSizeId?: Maybe<Scalars['Int']>;
  /** Piercing search by list of id and/or description */
  piercing?: Maybe<PiercingInput>;
  /** Playable Age Range */
  playableAge?: Maybe<AgeRangeInput>;
  /** Date Range */
  pregnancyDueRange?: Maybe<DateRangeInput>;
  /** Profession */
  profession?: Maybe<Scalars['String']>;
  /** Profile Ids to search in */
  profileIds?: Maybe<Array<Scalars['Int']>>;
  /** Representative Profile List Ids - search profile/s if it included into Reps Profile List */
  profileListIds?: Maybe<Array<Scalars['Int']>>;
  /** Profile Status Id */
  profileStatusId?: Maybe<Array<Scalars['ID']>>;
  /** Search By Profile Statuses */
  profileStatusToSearch?: Maybe<ProfileStatusSearchEnum>;
  /** Search by profile type */
  profileTypeId?: Maybe<Scalars['Int']>;
  /** Prop Id */
  propIds?: Maybe<Array<Scalars['ID']>>;
  /** Pursuing Ids */
  pursuingIds?: Maybe<Array<Scalars['ID']>>;
  /** Relationship To Minor Id */
  relationshipToMinorId?: Maybe<Array<Scalars['ID']>>;
  /** Representative Ids */
  representativeIds?: Maybe<Array<Scalars['Int']>>;
  /** List Ids */
  representativeListIds?: Maybe<Array<Scalars['Int']>>;
  /** Representation Ids */
  seekingRepresentations?: Maybe<Array<Scalars['ID']>>;
  /** Shoe Modifier ID */
  shoeModifierId?: Maybe<Scalars['ID']>;
  /** Range of Shoe Size IDs */
  shoeSizeId?: Maybe<IdRangeInput>;
  /** Range of General Size IDs */
  sizeId?: Maybe<IdRangeInput>;
  /** Size Modifier ID */
  sizeModifierId?: Maybe<Scalars['ID']>;
  /** Search by skill ids and their level ids */
  skills?: Maybe<Array<SkillSearchInput>>;
  /** Range for Sleeve Ids */
  sleeveId?: Maybe<IdRangeInput>;
  /** Search by Sport Equipment IDs */
  sportEquipmentIds?: Maybe<Array<Scalars['Int']>>;
  /** Stage name */
  stageName?: Maybe<Scalars['String']>;
  /** Work Unions Ids */
  talentUnionIds?: Maybe<Array<Scalars['ID']>>;
  talentUnions?: Maybe<Array<TalentUnionEnum>>;
  /** Tattoo search by list of id and/or description */
  tattoo?: Maybe<TattooInput>;
  /** Range for t-shirt Size Ids */
  tshirtSizeId?: Maybe<IdRangeInput>;
  /** Range of IDs for underbust size */
  underbustId?: Maybe<IdRangeInput>;
  /** Unique Attribute Ids */
  uniqueAttributeIds?: Maybe<Array<Scalars['ID']>>;
  /** Search by vehicle object */
  vehicle?: Maybe<VehicleSearchInput>;
  /** Range for Waist Ids */
  waistId?: Maybe<IdRangeInput>;
  /** Wardrobe Ids */
  wardrobeIds?: Maybe<Array<Scalars['Int']>>;
  /** Weight Range by IDs */
  weightRange?: Maybe<IdRangeInput>;
  /** Willingness Ids */
  willingnessIds?: Maybe<Array<Scalars['ID']>>;
  /** Work permit expiration Range */
  workPermitExpRange?: Maybe<DateRangeInput>;
  /** Working Location Ids */
  workingLocationIds?: Maybe<Array<Scalars['ID']>>;
};

/** Project by org id search result */
export type ProfileSearchResultByOrgId = {
  __typename?: 'ProfileSearchResultByOrgId';
  /** Profile Id */
  id?: Maybe<Scalars['Int']>;
  /** Profile stage name */
  stageName?: Maybe<Scalars['String']>;
};

/** Paginated result with [ProfileSearchResultByOrgId] objects */
export type ProfileSearchResultByOrgIdPaginatedResult = {
  __typename?: 'ProfileSearchResultByOrgIdPaginatedResult';
  /** List of ProfileSearchResultByOrgId objects */
  objects: Array<ProfileSearchResultByOrgId>;
  /** Current page */
  page: Scalars['Int'];
  /** Total count of rows */
  totalCount: Scalars['Int'];
  /** Total pages */
  totalPages: Scalars['Int'];
};

/** Profile sort field options */
export const ProfileSearchSortField = {
  FirstName: 'FirstName',
  LastName: 'LastName',
  Random: 'Random',
} as const;

export type ProfileSearchSortField =
  typeof ProfileSearchSortField[keyof typeof ProfileSearchSortField];
export type ProfileSearchSortOption = {
  fieldName: ProfileSearchSortField;
  /** Default value: ASC */
  sortOrder?: Maybe<SortOrderEnum>;
};

export const ProfileSelectionType = {
  None: 'NONE',
  Selected: 'SELECTED',
  SelectedForOtherRoles: 'SELECTED_FOR_OTHER_ROLES',
  Submitted: 'SUBMITTED',
  SubmittedForOtherRoles: 'SUBMITTED_FOR_OTHER_ROLES',
} as const;

export type ProfileSelectionType =
  typeof ProfileSelectionType[keyof typeof ProfileSelectionType];
/** Profile Shoe Size */
export type ProfileShoeSize = {
  __typename?: 'ProfileShoeSize';
  /** Gender */
  category: BasicSetting;
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** Shoe Modifier */
  shoeModifier?: Maybe<ShoeModifier>;
  /** ShoeSize for AU */
  shoeSizeAU: Scalars['String'];
  /** ShoeSize for EU */
  shoeSizeEU: Scalars['String'];
  /** ShoeSize for UK */
  shoeSizeUK: Scalars['String'];
  /** ShoeSize for US */
  shoeSizeUS: Scalars['String'];
  /** short order */
  sortOrder: Scalars['Float'];
};

/** Input type for Profile Shoe Size */
export type ProfileShoeSizeInput = {
  /** Shoe Modifier Id */
  shoeModifierId?: Maybe<Scalars['Int']>;
  /** Shoe Size Id */
  shoeSizeId?: Maybe<Scalars['Int']>;
};

/** Profile Size */
export type ProfileSize = {
  __typename?: 'ProfileSize';
  category: BasicSetting;
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** Size gender ID */
  sizeGenderId: Scalars['ID'];
  /** Size Modifier */
  sizeModifier?: Maybe<SizeModifier>;
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

/** Input type for Profile Size */
export type ProfileSizeInput = {
  /** Size Id */
  sizeId?: Maybe<Scalars['Int']>;
  /** Size Modifier Id */
  sizeModifierId?: Maybe<Scalars['Int']>;
};

/** Skill and it`s level */
export type ProfileSkill = {
  __typename?: 'ProfileSkill';
  /** child objects */
  childObjects: Array<Skill>;
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** Skill level */
  level?: Maybe<SkillLevel>;
  /** name */
  name: Scalars['String'];
  /** parent object */
  parentObject?: Maybe<Skill>;
  /** Profile media id */
  profileMediaId?: Maybe<Scalars['Float']>;
  /** Profile skill id */
  profileSkillId?: Maybe<Scalars['Float']>;
  /** Selectable Flag */
  selectable: Scalars['Boolean'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

/** Input type to update profile skill */
export type ProfileSkillInput = {
  /** Note */
  note?: Maybe<Scalars['ID']>;
  /** Profile Media Id */
  profileMediaId?: Maybe<Scalars['ID']>;
  /** Profile Skill Id */
  profileSkillId: Scalars['BigInt'];
  /** Skill Level Id */
  skillLevelId?: Maybe<Scalars['ID']>;
};

/** Profile sport equipment */
export type ProfileSportEquipment = {
  __typename?: 'ProfileSportEquipment';
  /** child objects */
  childObjects: Array<SportEquipment>;
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** parent object */
  parentObject?: Maybe<SportEquipment>;
  /** Profile sport equipment relation id */
  profileSportEquipmentId?: Maybe<Scalars['Float']>;
  /** Selectable Flag */
  selectable: Scalars['Boolean'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

/** ProfileStatus object */
export type ProfileStatus = {
  __typename?: 'ProfileStatus';
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

export const ProfileStatusSearchEnum = {
  Current: 'CURRENT',
  Former: 'FORMER',
  FormerAndCurrent: 'FORMER_AND_CURRENT',
} as const;

export type ProfileStatusSearchEnum =
  typeof ProfileStatusSearchEnum[keyof typeof ProfileStatusSearchEnum];
/** ProfileType object */
export type ProfileType = {
  __typename?: 'ProfileType';
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

/** Input type for update profile */
export type ProfileUpdateInput = {
  ageInYears?: Maybe<Scalars['Boolean']>;
  /** artist id */
  artistId?: Maybe<Scalars['ID']>;
  /** blurb */
  blurb?: Maybe<Scalars['ID']>;
  /** bustId */
  bustId?: Maybe<Scalars['ID']>;
  /** chestSizeId */
  chestSizeId?: Maybe<Scalars['ID']>;
  /** coatId */
  coatId?: Maybe<Scalars['ID']>;
  /** consentDate */
  consentDate?: Maybe<Scalars['DateTime']>;
  /** cupSizeId */
  cupSizeId?: Maybe<Scalars['ID']>;
  /** Date of birth */
  dateOfBirth?: Maybe<Scalars['DateTime']>;
  /** managerEmail */
  defaultSubmissionNote?: Maybe<Scalars['String']>;
  /** documentIds */
  documentIds?: Maybe<Array<Scalars['ID']>>;
  /** dressId */
  dressId?: Maybe<Scalars['ID']>;
  /** Ethnic Appearance Ids */
  ethnicAppearance?: Maybe<Array<OrderedItemInput>>;
  /** eyeColorId */
  eyeColorId?: Maybe<Scalars['ID']>;
  /** facialHairStyleIds */
  facialHairStyleIds?: Maybe<Array<Scalars['ID']>>;
  /** First Name */
  firstName?: Maybe<Scalars['String']>;
  /** gender */
  gender?: Maybe<GenderInput>;
  /** gloveSizeId */
  gloveSizeId?: Maybe<Scalars['ID']>;
  /** hairColorId */
  hairColorId?: Maybe<Scalars['ID']>;
  /** hairStyleId */
  hairStyleId?: Maybe<Scalars['ID']>;
  /** is Representation */
  hasRepresentation?: Maybe<Scalars['Boolean']>;
  /** hatSizeId */
  hatSizeId?: Maybe<Scalars['ID']>;
  /** heightId */
  heightId?: Maybe<Scalars['ID']>;
  /** Hide credit year */
  hideCreditYear?: Maybe<Scalars['Boolean']>;
  /** hipSizeId */
  hipSizeId?: Maybe<Scalars['ID']>;
  /** Profile id */
  id: Scalars['ID'];
  /** inseamId */
  inseamId?: Maybe<Scalars['ID']>;
  /** If Profile is overscaled */
  isOverscaled?: Maybe<Scalars['Boolean']>;
  /** Last Name */
  lastName?: Maybe<Scalars['String']>;
  /** managerEmail */
  managerEmail?: Maybe<Scalars['String']>;
  /** is minor */
  minor?: Maybe<Scalars['Boolean']>;
  /** Minor date of birth */
  minorDateOfBirth?: Maybe<Scalars['DateTime']>;
  /** multipleBirthId */
  multipleBirthId?: Maybe<Scalars['ID']>;
  /** neckId */
  neckId?: Maybe<Scalars['ID']>;
  /** otherExperiences */
  otherExperiences?: Maybe<Scalars['String']>;
  /** Overscale Note */
  overscaleNote?: Maybe<Scalars['String']>;
  /** Pants IDs */
  pantsIds?: Maybe<Array<Scalars['ID']>>;
  /** phone */
  phone?: Maybe<Scalars['String']>;
  /** piercingIds */
  piercingIds?: Maybe<Array<Scalars['ID']>>;
  /** piercing note */
  piercingNote?: Maybe<Scalars['String']>;
  /** playableAge at */
  playableAge?: Maybe<Scalars['Int']>;
  /** playableAge */
  playableAgeRange?: Maybe<AgeRangeInput>;
  /** pregnancyDueDate */
  pregnancyDue?: Maybe<Scalars['DateTime']>;
  /** profession */
  profession?: Maybe<Scalars['String']>;
  /** Profile access token granted by Rep */
  profileAccessToken?: Maybe<Scalars['String']>;
  /** profile status code */
  profileStatusCode?: Maybe<Scalars['String']>;
  /** pursuing ids */
  pursuingIds?: Maybe<Array<Scalars['ID']>>;
  /** _relationship_note */
  relationshipNote?: Maybe<Scalars['String']>;
  /** relationshipToMinorId */
  relationshipToMinorId?: Maybe<Scalars['ID']>;
  /** rosterIds */
  rosterIds?: Maybe<Array<Scalars['ID']>>;
  /** Representation Ids */
  seekingRepresentations?: Maybe<Array<Scalars['ID']>>;
  /** Profile Shoe Size */
  shoeSize?: Maybe<Array<ProfileShoeSizeInput>>;
  /** Profile Size */
  size?: Maybe<Array<ProfileSizeInput>>;
  /** Skills and Skills Levels */
  skills?: Maybe<Array<SkillInput>>;
  /** sleeveId */
  sleeveId?: Maybe<Scalars['ID']>;
  /** Stage Name */
  stageName?: Maybe<Scalars['String']>;
  /** talentEmail */
  talentEmail?: Maybe<Scalars['String']>;
  /** Talent Unions */
  talentUnions?: Maybe<Array<TalentUnionInput>>;
  /** tattooId */
  tattooId?: Maybe<Scalars['ID']>;
  /** tattooNote */
  tattooNote?: Maybe<Scalars['String']>;
  /** tshirt size ids */
  tshirtSizeIds?: Maybe<Array<Scalars['Float']>>;
  /** underbustId */
  underbustId?: Maybe<Scalars['ID']>;
  /** unique atribute ids */
  uniqueAttributeIds?: Maybe<Array<Scalars['ID']>>;
  /** waistId */
  waistId?: Maybe<Scalars['ID']>;
  /** wardrobe ids */
  wardrobeIds?: Maybe<Array<Scalars['ID']>>;
  /** weightId */
  weightId?: Maybe<Scalars['ID']>;
  /** willingness ids */
  willingnessIds?: Maybe<Array<Scalars['ID']>>;
  /** Work permit expiration date */
  workPermitExp?: Maybe<Scalars['DateTime']>;
  /** Working Locations */
  workingLocations?: Maybe<Array<OrderedItemInput>>;
};

/** Profile vehicle */
export type ProfileVehicle = {
  __typename?: 'ProfileVehicle';
  /** Profile vehicle relation id */
  profileVehicleId?: Maybe<Scalars['Float']>;
  /** Vehicle Name */
  vehicleName?: Maybe<Scalars['String']>;
  /** Vehicle type make */
  vehicleTypeMake?: Maybe<VehicleTypeMake>;
  /** Vehicle Year */
  vehicleYear?: Maybe<Scalars['Float']>;
};

/** Input type for Profile Vehicle */
export type ProfileVehicleInput = {
  /** Vehicle name */
  name?: Maybe<Scalars['String']>;
  /** Vehicle type make id */
  vehicleTypeMakeId: Scalars['Float'];
  /** Vehicle year */
  year?: Maybe<Scalars['Float']>;
};

/** Profile Visibility object */
export type ProfileVisibility = {
  __typename?: 'ProfileVisibility';
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

/** Profile wardrobe */
export type ProfileWardrobe = {
  __typename?: 'ProfileWardrobe';
  /** child objects */
  childObjects: Array<Wardrobe>;
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** parent object */
  parentObject?: Maybe<Wardrobe>;
  /** Profile wardrobe relation id */
  profileWardrobeId?: Maybe<Scalars['Float']>;
  /** Selectable Flag */
  selectable: Scalars['Boolean'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

/** Profile working location */
export type ProfileWorkingLocation = {
  __typename?: 'ProfileWorkingLocation';
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** Profile working location id */
  profileWorkingLocationId: Scalars['Float'];
  /** child objects */
  region?: Maybe<Region>;
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

/** Project object */
export type Project = {
  __typename?: 'Project';
  /** Account name */
  accountName?: Maybe<Scalars['String']>;
  /** Project accounts */
  accounts?: Maybe<Array<Account>>;
  /** AD agency */
  adAgency?: Maybe<Scalars['String']>;
  /** Additional provisions */
  additionalProvisions?: Maybe<Scalars['String']>;
  /** Project Attachment Security Id - show attachments to reps only - otherwise it will be also viewable on casting billboard */
  attachmentDisplayTypeId?: Maybe<Scalars['ID']>;
  /** Project audition address */
  auditionAddress?: Maybe<AuditionAddress>;
  canTalentSubmitSelfTape?: Maybe<Scalars['Boolean']>;
  /** Casting assistant */
  castingAssistant?: Maybe<Scalars['String']>;
  /** Casting associate */
  castingAssociate?: Maybe<Scalars['String']>;
  /** Casting company name */
  castingCompany?: Maybe<Scalars['String']>;
  /** Casting director */
  castingDirector?: Maybe<Scalars['String']>;
  /** Conflict note */
  conflictNote?: Maybe<Scalars['String']>;
  /** Contact email */
  contactEmail?: Maybe<Scalars['String']>;
  /** Contact info permissions */
  contactInfoPermissions?: Maybe<Scalars['Boolean']>;
  /** Contact phone */
  contactPhone?: Maybe<Scalars['String']>;
  /** Created date */
  created?: Maybe<Scalars['DateTime']>;
  /** Created By Account Id */
  createdBy?: Maybe<Scalars['Float']>;
  /** Is project created by a PC user */
  createdByPC: Scalars['Boolean'];
  /**
   * Do not use this field
   * @deprecated Use 'created' field instead
   */
  creationDate?: Maybe<Scalars['DateTime']>;
  /** Director */
  director?: Maybe<Scalars['String']>;
  /** Displayed Project Union */
  displayedProjectUnion: Scalars['String'];
  /** Executive producer */
  executiveProducer?: Maybe<Scalars['String']>;
  /** Project public GUID */
  guid?: Maybe<Scalars['String']>;
  /** Is hidden */
  hidden?: Maybe<Scalars['Boolean']>;
  /** Primary ID */
  id: Scalars['ID'];
  /** Project internal name */
  internalName?: Maybe<Scalars['String']>;
  isAuditionInPerson?: Maybe<Scalars['Boolean']>;
  isSpecificLocation?: Maybe<Scalars['Boolean']>;
  lastModifiedAt: Scalars['DateTime'];
  /** Last Role Published Date */
  lastRolePublishedDate?: Maybe<Scalars['DateTime']>;
  /** Legacy instance ID */
  legacyInstance?: Maybe<Scalars['String']>;
  /** Legacy instance URL */
  legacyInstanceUrl?: Maybe<Scalars['String']>;
  /** Legacy project ID */
  legacyProjectId?: Maybe<Scalars['ID']>;
  /** Project asset */
  media?: Maybe<Array<Media>>;
  /** Project name */
  name?: Maybe<Scalars['String']>;
  /** Network */
  network?: Maybe<Scalars['String']>;
  /** Project Notes */
  notes?: Maybe<Scalars['String']>;
  /** Project organizations */
  organizations?: Maybe<Array<Organization>>;
  /** Parent Project- eg series  */
  parent?: Maybe<Project>;
  /** Photographer */
  photographer?: Maybe<Scalars['String']>;
  /** Producer */
  producer?: Maybe<Scalars['String']>;
  /** Production company */
  productionCompany?: Maybe<Scalars['String']>;
  /** Project Conflicts */
  projectConflicts?: Maybe<Array<Conflict>>;
  /** Project Id */
  projectId?: Maybe<Scalars['Float']>;
  /** Project internal name */
  projectInternalName?: Maybe<Scalars['String']>;
  /** Project name */
  projectName?: Maybe<Scalars['String']>;
  /** Parent ID */
  projectParentId?: Maybe<Scalars['ID']>;
  /** Project type */
  projectStatus?: Maybe<ProjectStatus>;
  /** Project type */
  projectType?: Maybe<ProjectType>;
  /** Project Unions */
  projectUnion?: Maybe<Array<ProjectUnionDetails>>;
  /** Project rate */
  rate?: Maybe<Scalars['String']>;
  /** Release Locations DMA */
  releaseLocations?: Maybe<Array<Dma>>;
  /** Request brief */
  requestBrief?: Maybe<Scalars['Boolean']>;
  /** Request brief instruction */
  requestBriefInstruction?: Maybe<Scalars['String']>;
  /** Project roles */
  roles?: Maybe<Array<Role>>;
  /** Project side visibility */
  sideVisibility?: Maybe<ProjectSidesVisibility>;
  /** Studio */
  studio?: Maybe<Scalars['String']>;
  /** Submissions due */
  submissionsDueBy?: Maybe<Scalars['DateTime']>;
  /** Synopsis */
  synopsis?: Maybe<Scalars['String']>;
  /** Tile scheme ID */
  tileSchemeId?: Maybe<Scalars['ID']>;
  /** Total records count */
  totalCount?: Maybe<Scalars['Float']>;
  /** Updated date */
  updated?: Maybe<Scalars['DateTime']>;
  /** Usage */
  usage?: Maybe<Scalars['String']>;
  /** Writer */
  writer?: Maybe<Scalars['String']>;
};

/** Project object */
export type ProjectRolesArgs = {
  roleIds?: Maybe<Array<Scalars['Int']>>;
  roleStatusFilter?: Maybe<RoleStatusFilter>;
};

/** Filters for searching suitable projects from backlot */
export type ProjectBacklotSearchInput = {
  /** Country Ids */
  countryIds?: Maybe<Array<Scalars['Int']>>;
  /** Name */
  name?: Maybe<Scalars['String']>;
  /** Organization Id */
  organizationId?: Maybe<Scalars['Int']>;
  /** Project Creator Mail */
  projectCreatorEmail?: Maybe<Scalars['String']>;
  /** Project Id */
  projectId?: Maybe<Scalars['Int']>;
  /** Project Status Code */
  projectStatusCode?: Maybe<Array<Scalars['String']>>;
};

/** Search result for backlot projects */
export type ProjectBacklotSearchResult = {
  __typename?: 'ProjectBacklotSearchResult';
  /** Casting Company Id */
  castingCompanyId?: Maybe<Scalars['Int']>;
  /** Casting Company Name */
  castingCompanyName?: Maybe<Scalars['String']>;
  /** Contact Email */
  contactEmail?: Maybe<Scalars['String']>;
  /** Countries */
  country?: Maybe<Country>;
  /** Project Created Date */
  created?: Maybe<Scalars['DateTime']>;
  /** Internal Name */
  internalName?: Maybe<Scalars['String']>;
  /** Project Name */
  name?: Maybe<Scalars['String']>;
  /** Project Id */
  projectId?: Maybe<Scalars['Int']>;
  /** Project Status */
  projectStatus?: Maybe<ProjectStatus>;
  /** Project Status Id */
  projectStatusId?: Maybe<Scalars['Int']>;
  /** Project Type */
  projectType?: Maybe<ProjectType>;
  /** Project Type Id */
  projectTypeId?: Maybe<Scalars['Int']>;
  /** Project Update Date */
  updated?: Maybe<Scalars['DateTime']>;
};

/** Paginated result with [ProjectBacklotSearchResult] objects */
export type ProjectBacklotSearchResultPaginatedResult = {
  __typename?: 'ProjectBacklotSearchResultPaginatedResult';
  /** List of ProjectBacklotSearchResult objects */
  objects: Array<ProjectBacklotSearchResult>;
  /** Current page */
  page: Scalars['Int'];
  /** Total count of rows */
  totalCount: Scalars['Int'];
  /** Total pages */
  totalPages: Scalars['Int'];
};

export type ProjectBase = {
  __typename?: 'ProjectBase';
  /** Primary ID */
  id: Scalars['ID'];
  /** Project internal name */
  internalName?: Maybe<Scalars['String']>;
  lastModifiedAt: Scalars['DateTime'];
  /** Project name */
  name?: Maybe<Scalars['String']>;
  /** Project type */
  projectStatus?: Maybe<ProjectStatus>;
  /** Project type */
  projectType?: Maybe<ProjectType>;
};

/** Paginated result with [ProjectBase] objects */
export type ProjectBasePaginatedResult = {
  __typename?: 'ProjectBasePaginatedResult';
  /** List of ProjectBase objects */
  objects: Array<ProjectBase>;
  /** Current page */
  page: Scalars['Int'];
  /** Total count of rows */
  totalCount: Scalars['Int'];
  /** Total pages */
  totalPages: Scalars['Int'];
};

export type ProjectFilter = {
  __typename?: 'ProjectFilter';
  id: Scalars['ID'];
  name: Scalars['String'];
};

/** Filters for searching suitable projects */
export type ProjectFilterInput = {
  /** Which casting organization's project should it be? */
  castingOrganizationIds?: Maybe<Array<Scalars['ID']>>;
  /** Which organization division should be considered? */
  dmaIds?: Maybe<Array<Scalars['ID']>>;
  /** Has requests attached? */
  hasRequests?: Maybe<Scalars['Boolean']>;
  /** Has selects attached? */
  hasSelects?: Maybe<Scalars['Boolean']>;
  /** Has submissions attached? */
  hasSubmissions?: Maybe<Scalars['Boolean']>;
  /** Should the project contain only kids roles? */
  isKidsRolesOnly?: Maybe<Scalars['Boolean']>;
  /** Is project viewed */
  isViewed?: Maybe<Scalars['Boolean']>;
  /** Which organization this project belongs? */
  organizationId?: Maybe<Scalars['Float']>;
  /** Search in the name */
  projectName?: Maybe<Scalars['String']>;
  /** What project types (by ID) should project have? */
  projectTypeIds?: Maybe<Array<Scalars['ID']>>;
  /** Which project unions should be considered? */
  projectUnionIds?: Maybe<Array<Scalars['ID']>>;
  /** Search in role name */
  roleName?: Maybe<Scalars['String']>;
  /** Search by roleTypes array using codes */
  roleTypes?: Maybe<Array<Scalars['String']>>;
  /** What submission date should it be? */
  submissionDueDate?: Maybe<SubmissionDueDateSearchEnum>;
};

export type ProjectLocation = {
  __typename?: 'ProjectLocation';
  id: Scalars['ID'];
  projectId: Scalars['Int'];
  projectLocations: Array<Scalars['String']>;
};

/** Add Note Input Type */
export type ProjectNoteInput = {
  /** Text of the note */
  comment: Scalars['String'];
  /** Project ID */
  projectId?: Maybe<Scalars['BigInt']>;
};

export type ProjectNotificationToRepsInput = {
  message: Scalars['String'];
  projectId: Scalars['Int'];
};

/** Add organization as project attribute */
export type ProjectOrganizationInput = {
  accessTypeId: Scalars['ID'];
  organizationId: Scalars['ID'];
};

/** Project Overview CD Report */
export type ProjectOverviewCdReportModel = {
  __typename?: 'ProjectOverviewCDReportModel';
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<Scalars['Int']>;
  csvFileName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  organizationId?: Maybe<Scalars['Int']>;
  payload?: Maybe<ProjectOverviewCdReportPayloadModel>;
  projectId: Scalars['Int'];
  reportType: ReportTypeEnum;
  status: ReportStatusEnum;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

/** Project Overview CD Report Payload */
export type ProjectOverviewCdReportPayloadModel = {
  __typename?: 'ProjectOverviewCDReportPayloadModel';
  castingCompanyLogo?: Maybe<ReportMediaModel>;
  displayRoleOption: DisplayRoleOptionsEnum;
  projectInfo: ProjectReportInfoModel;
  projectRoles: Array<ProjectReportCdRoleModel>;
};

/** Project Overview Report */
export type ProjectOverviewReportModel = {
  __typename?: 'ProjectOverviewReportModel';
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<Scalars['Int']>;
  csvFileName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  organizationId?: Maybe<Scalars['Int']>;
  payload?: Maybe<ProjectOverviewReportPayloadModel>;
  projectId: Scalars['Int'];
  reportType: ReportTypeEnum;
  status: ReportStatusEnum;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

/** Project Overview Report Payload */
export type ProjectOverviewReportPayloadModel = {
  __typename?: 'ProjectOverviewReportPayloadModel';
  divisionLogo?: Maybe<ReportMediaModel>;
  divisionName?: Maybe<Scalars['String']>;
  projectInfo: ProjectReportInfoModel;
  projectRoles: Array<ProjectReportRoleModel>;
};

/** Project Report Attachment */
export type ProjectReportAttachmentModel = {
  __typename?: 'ProjectReportAttachmentModel';
  id: Scalars['Float'];
  name: Scalars['String'];
};

/** Project Report Input Arguments */
export type ProjectReportCdCreateInput = {
  displayRoleOption: DisplayRoleOptionsEnum;
  projectId: Scalars['Int'];
  roleTypes: Array<Scalars['String']>;
};

/** Project Report Role */
export type ProjectReportCdRoleModel = {
  __typename?: 'ProjectReportCDRoleModel';
  ageRange: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  displayedRoleEthnicAppearance?: Maybe<Scalars['String']>;
  displayedRoleGenderAppearance: Scalars['String'];
  displayedRoleUnion?: Maybe<Scalars['String']>;
  ethnicAppearance?: Maybe<Array<Scalars['String']>>;
  gender: Array<Scalars['String']>;
  id: Scalars['Float'];
  name: Scalars['String'];
  paidType?: Maybe<Scalars['String']>;
  photos?: Maybe<Array<ReportMediaModel>>;
  rate?: Maybe<Scalars['String']>;
  rateNote?: Maybe<Scalars['String']>;
  ratePerType?: Maybe<Scalars['String']>;
  rateSummary?: Maybe<Scalars['String']>;
  requestMediaInstruction?: Maybe<Scalars['String']>;
  requestMediaTypes?: Maybe<Array<Scalars['String']>>;
  requestSubmissionsFrom?: Maybe<Array<ReportPublicationSettings>>;
  roleDateWithLocation?: Maybe<Array<ReportRoleDateWithLocation>>;
  roleEthnicityNationality?: Maybe<Scalars['String']>;
  roleSkills?: Maybe<Array<Scalars['String']>>;
  roleStatus: Scalars['String'];
  roleType: Scalars['String'];
  sexualSituationDescription?: Maybe<Scalars['String']>;
  sexualSituations?: Maybe<Array<Scalars['String']>>;
  sides?: Maybe<Array<ReportMediaObjectModel>>;
  sidesVisibility?: Maybe<Scalars['String']>;
  spot?: Maybe<Scalars['String']>;
  submissionInstruction?: Maybe<Scalars['String']>;
  wardrobe?: Maybe<Scalars['String']>;
  workRequirement?: Maybe<Scalars['String']>;
};

/** Project Report Input Arguments */
export type ProjectReportCreateInput = {
  projectId: Scalars['Int'];
};

/** Project Info */
export type ProjectReportInfoModel = {
  __typename?: 'ProjectReportInfoModel';
  adAgency?: Maybe<Scalars['String']>;
  additionalProvisions?: Maybe<Scalars['String']>;
  attachments: Array<ProjectReportAttachmentModel>;
  castingAssistant?: Maybe<Scalars['String']>;
  castingAssociate?: Maybe<Scalars['String']>;
  castingCompany?: Maybe<Scalars['String']>;
  castingDirector?: Maybe<Scalars['String']>;
  conflictsNameList: Array<Scalars['String']>;
  conflictsNote?: Maybe<Scalars['String']>;
  director?: Maybe<Scalars['String']>;
  displayedProjectUnion?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  executiveProducer?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  network?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  photographer?: Maybe<Scalars['String']>;
  producer?: Maybe<Scalars['String']>;
  productionCompany?: Maybe<Scalars['String']>;
  projectNotes?: Maybe<Scalars['String']>;
  projectSynopsis?: Maybe<Scalars['String']>;
  projectType: Scalars['String'];
  rate?: Maybe<Scalars['String']>;
  studio?: Maybe<Scalars['String']>;
  usageRun?: Maybe<Scalars['String']>;
  writer?: Maybe<Scalars['String']>;
};

/** Project Report Role */
export type ProjectReportRoleModel = {
  __typename?: 'ProjectReportRoleModel';
  ageRange: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  displayedRoleUnion?: Maybe<Scalars['String']>;
  ethnicAppearance: Array<Scalars['String']>;
  gender: Array<Scalars['String']>;
  id: Scalars['Float'];
  name: Scalars['String'];
  paidType?: Maybe<Scalars['String']>;
  rate?: Maybe<Scalars['String']>;
  rateNote?: Maybe<Scalars['String']>;
  ratePer?: Maybe<Scalars['String']>;
  rateSummary?: Maybe<Scalars['String']>;
  roleType: Scalars['String'];
  sexualSituations: Array<Scalars['String']>;
  submissions: Array<Scalars['String']>;
};

export type ProjectRequestsInfo = {
  __typename?: 'ProjectRequestsInfo';
  /** # of Requested talent in Project with worksheer request status of New, Rescheduled, Review  */
  newProjectRequestsCount?: Maybe<Scalars['Float']>;
  /** Total Project Requests regardless of status */
  totalProjectRequestsCount: Scalars['Float'];
};

/** Project by org id search result */
export type ProjectSearchResultsByOrgId = {
  __typename?: 'ProjectSearchResultsByOrgId';
  /** Project Id */
  id?: Maybe<Scalars['Int']>;
  /** Project name */
  projectName?: Maybe<Scalars['String']>;
};

/** Paginated result with [ProjectSearchResultsByOrgId] objects */
export type ProjectSearchResultsByOrgIdPaginatedResult = {
  __typename?: 'ProjectSearchResultsByOrgIdPaginatedResult';
  /** List of ProjectSearchResultsByOrgId objects */
  objects: Array<ProjectSearchResultsByOrgId>;
  /** Current page */
  page: Scalars['Int'];
  /** Total count of rows */
  totalCount: Scalars['Int'];
  /** Total pages */
  totalPages: Scalars['Int'];
};

/** Project Sides Visibility object */
export type ProjectSidesVisibility = {
  __typename?: 'ProjectSidesVisibility';
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

/** Project Status Object */
export type ProjectStatus = {
  __typename?: 'ProjectStatus';
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

/** Project status filter options */
export const ProjectStatusFilterEnum = {
  Archived: 'Archived',
  Current: 'Current',
} as const;

export type ProjectStatusFilterEnum =
  typeof ProjectStatusFilterEnum[keyof typeof ProjectStatusFilterEnum];
/** Project Report Input Arguments */
export type ProjectSubmissionCreateInput = {
  projectId: Scalars['Int'];
  roleIds: Array<Scalars['Int']>;
  talentStatus: TalentStatusEnum;
};

/** Project Submission Report */
export type ProjectSubmissionReportModel = {
  __typename?: 'ProjectSubmissionReportModel';
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<Scalars['Int']>;
  csvFileName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  organizationId?: Maybe<Scalars['Int']>;
  payload?: Maybe<ProjectSubmissionReportPayloadModel>;
  projectId: Scalars['Int'];
  reportType: ReportTypeEnum;
  status: ReportStatusEnum;
  talentStatus: TalentStatusEnum;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

/** Project Overview CD Report Payload */
export type ProjectSubmissionReportPayloadModel = {
  __typename?: 'ProjectSubmissionReportPayloadModel';
  divisionLogo?: Maybe<ReportMediaModel>;
  divisionName?: Maybe<Scalars['String']>;
  projectInfo: ProjectReportInfoModel;
  projectRolesAcceptingSubmissions?: Maybe<Array<ProjectSubmissionReportRoleModel>>;
  projectRolesClosedSubmissions?: Maybe<Array<ProjectSubmissionReportRoleModel>>;
};

/** Project Submission Report Role */
export type ProjectSubmissionReportRoleModel = {
  __typename?: 'ProjectSubmissionReportRoleModel';
  ageRange?: Maybe<Scalars['String']>;
  ethnicAppearance?: Maybe<Array<Scalars['String']>>;
  gender?: Maybe<Array<Scalars['String']>>;
  id: Scalars['Float'];
  name: Scalars['String'];
  roleType: Scalars['String'];
  submissions?: Maybe<Array<Scalars['String']>>;
};

/** Available project types */
export type ProjectType = {
  __typename?: 'ProjectType';
  /** child objects */
  childObjects: Array<ProjectType>;
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** parent object */
  parentObject?: Maybe<ProjectType>;
  /** Selectable Flag */
  selectable: Scalars['Boolean'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

/** Project Union Details */
export type ProjectUnionDetails = {
  __typename?: 'ProjectUnionDetails';
  /** Union contract id */
  contractId?: Maybe<Scalars['String']>;
  /** Contract Status */
  contractStatus?: Maybe<ContractStatus>;
  /** Union contract status id */
  contractStatusId?: Maybe<Scalars['Int']>;
  /** Union details */
  union: TalentUnion;
};

export type ProjectVisibility = {
  __typename?: 'ProjectVisibility';
  /** States if the project has any role with selected talent from user current agency */
  isAnyRoleSelected: Scalars['Boolean'];
  /** States if the project has any role with submitted talent from user current agency */
  isAnyRoleSubmitted: Scalars['Boolean'];
  /** States if the project was viewed by the context user */
  isViewed: Scalars['Boolean'];
  /** Project ID */
  project: Project;
  /** States if the project has any requests for current reps agency */
  requestsInfo?: Maybe<ProjectRequestsInfo>;
};

export type ProjectVisibilityResult = {
  __typename?: 'ProjectVisibilityResult';
  /** project_id - is_viewed pair */
  projectVisibilities: Array<ProjectVisibility>;
  /** Clusterized info about project locations */
  projectsLocations: Array<ProjectLocation>;
  /** Total number of projects */
  totalCount?: Maybe<Scalars['Int']>;
  /** Total number of new or updated requests */
  totalCountOfNewOrUpdatedRequests: Scalars['Int'];
  /** Total number of requests */
  totalCountOfRequests: Scalars['Int'];
};

/** Project for Workflow */
export type ProjectWorkflow = {
  __typename?: 'ProjectWorkflow';
  castingCompany?: Maybe<Scalars['String']>;
  /** Conflict note */
  conflictNote?: Maybe<Scalars['String']>;
  createdByPC: Scalars['Boolean'];
  /** Displayed project union */
  displayedProjectUnion?: Maybe<Scalars['String']>;
  /** Displayed project union short */
  displayedProjectUnionShort?: Maybe<Scalars['String']>;
  guid?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  /** Project Notes */
  notes?: Maybe<Scalars['String']>;
  /** Project Conflicts */
  projectConflicts?: Maybe<Array<Conflict>>;
  /** Project Status */
  projectStatus?: Maybe<ProjectStatus>;
  projectType: ProjectType;
  projectUnions: Array<ProjectUnionDetails>;
  synopsis?: Maybe<Scalars['String']>;
};

/** Prop object */
export type Prop = {
  __typename?: 'Prop';
  /** child objects */
  childObjects: Array<Prop>;
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** parent object */
  parentObject?: Maybe<Prop>;
  /** Selectable Flag */
  selectable: Scalars['Boolean'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

export type PublicCredit = {
  __typename?: 'PublicCredit';
  /** Created at Date */
  created: Scalars['DateTime'];
  creditMedia: Array<Media>;
  /** Credit Sort ordering */
  creditOrder: Scalars['Int'];
  /** Credit Type */
  creditType?: Maybe<CreditType>;
  /** The director of the Project */
  director?: Maybe<Scalars['String']>;
  guid: Scalars['String'];
  /** Highlighted */
  highlighted: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** Profile Credit Type Id */
  profileCreditTypeId: Scalars['Float'];
  /** Profile ID */
  profileId: Scalars['Int'];
  /** Role title */
  role?: Maybe<Scalars['String']>;
  /** Credit Type Sort ordering */
  sortOrder: Scalars['Int'];
  /** Title */
  title?: Maybe<Scalars['String']>;
  /** Updated at Date */
  updated: Scalars['DateTime'];
  /** Year */
  year?: Maybe<Scalars['Int']>;
};

export type PublicProfile = {
  __typename?: 'PublicProfile';
  /** Checks if profile have granted access to roster */
  accessGranted: Scalars['Boolean'];
  accountId?: Maybe<Scalars['Float']>;
  ageInYears?: Maybe<Scalars['Boolean']>;
  /** Profile Artist ID */
  artistId?: Maybe<Scalars['Float']>;
  /** Profile audio assets */
  audios?: Maybe<Array<ProfileMedia>>;
  billingItems?: Maybe<Array<BillingItemModel>>;
  /** Blurb */
  blurb?: Maybe<Scalars['String']>;
  /** Bust Object */
  bust?: Maybe<Bust>;
  /** Chest size Object */
  chestSize?: Maybe<ChestSize>;
  /** Coat Object */
  coat?: Maybe<Coat>;
  /** Conflicts for the profile */
  conflicts: Array<ProfileConflict>;
  contactInfo?: Maybe<ProfileContactInfo>;
  /** Profile's primary photo */
  cover?: Maybe<Media>;
  /** Created at Date */
  created?: Maybe<Scalars['DateTime']>;
  /** Profile Credits */
  credits: Array<PublicCredit>;
  /** Profile Credits Count */
  creditsCount: Scalars['Int'];
  /** Cup size Object */
  cupSize?: Maybe<CupSize>;
  /** Date of birth */
  dateOfBirth?: Maybe<Scalars['DateTime']>;
  /** stores/holds the id of the person who has deactivated the profile */
  deactivatedBy?: Maybe<Scalars['Float']>;
  /** Default submission note */
  defaultSubmissionNote?: Maybe<Scalars['String']>;
  /** Document type(s) */
  documentTypes?: Maybe<Array<Document>>;
  /** Profile document assets */
  documents?: Maybe<Array<ProfileMedia>>;
  /** Dress size Object */
  dressSize?: Maybe<ClothesSize>;
  /** Ethnic Appearance(s) */
  ethnicAppearances?: Maybe<Array<ProfileEthnicAppearance>>;
  /** Eye Color Object */
  eyeColor?: Maybe<EyeColor>;
  /** Facial Hair Type(s) */
  facialHair?: Maybe<Array<FacialHair>>;
  /** Gender Appearance(s) */
  genderAppearances?: Maybe<Array<GenderAppearance>>;
  /** Glove size Object */
  gloveSize?: Maybe<Glove>;
  /** GUID */
  guid?: Maybe<Scalars['String']>;
  /** Hair Color Object */
  hairColor?: Maybe<HairColor>;
  /** Hair Style Object */
  hairStyle?: Maybe<HairStyle>;
  /** Profile has audio reel */
  hasAudioReel?: Maybe<Scalars['Boolean']>;
  hasAuditionHistory: Scalars['Boolean'];
  /** has Representation */
  hasRepresentation?: Maybe<Scalars['Boolean']>;
  /** Profile has resume */
  hasResume?: Maybe<Scalars['Boolean']>;
  /** Profile has video reel */
  hasVideoReel?: Maybe<Scalars['Boolean']>;
  /** Hat size Object */
  hatSize?: Maybe<HatSize>;
  /** Height Object */
  height?: Maybe<Height>;
  /** Hide credit year */
  hideCreditYear: Scalars['Boolean'];
  /** Hip size Object */
  hipSize?: Maybe<Hip>;
  /** Primary ID */
  id: Scalars['ID'];
  /** Inseam size Object */
  inseam?: Maybe<Inseam>;
  isActive: Scalars['Boolean'];
  /**
   * Returns true if profile was deactivated by a Rep user, returns false if
   * profile was deactivated by a Talent, returns null when there is no information
   * about the deactivating account
   */
  isDeactivatedByReps?: Maybe<Scalars['Boolean']>;
  isDropped: Scalars['Boolean'];
  isInactive: Scalars['Boolean'];
  /** If Profile is overscaled */
  isOverscaled: Scalars['Boolean'];
  /** Identify the personal or represented profile. */
  isPersonal: Scalars['Boolean'];
  isPlayableAgeLockedToTalent: Scalars['Boolean'];
  /** Last note for the profile */
  lastNote?: Maybe<Note>;
  /** Manager Email */
  managerEmail?: Maybe<Scalars['String']>;
  /** All profile media */
  mediaAssets?: Maybe<Array<ProfileMedia>>;
  /** Profile's primary photo */
  mediaSummary: Array<MediaCount>;
  /** Is minor */
  minor?: Maybe<Scalars['Boolean']>;
  /** Multiple Birth Object */
  multipleBirth?: Maybe<MultipleBirth>;
  /** Neck size Object */
  neck?: Maybe<Neck>;
  /** Note */
  note?: Maybe<Scalars['String']>;
  /** Notes for the profile */
  notes: Array<Note>;
  organization?: Maybe<Organization>;
  organizations?: Maybe<Array<Organization>>;
  /** Other experiences */
  otherExperiences?: Maybe<Scalars['String']>;
  /** Overscale Note */
  overscaleNote?: Maybe<Scalars['String']>;
  /** Parent Name */
  parent?: Maybe<Scalars['String']>;
  /** Profile phone */
  phone?: Maybe<Scalars['String']>;
  /** Profile photo assets */
  photos?: Maybe<Array<ProfileMedia>>;
  /** Note about piercing */
  piercingNote?: Maybe<Scalars['String']>;
  /** The age a talent can play */
  playableAge?: Maybe<Scalars['Float']>;
  /** The minimum age a talent can play */
  playableAgeMax?: Maybe<Scalars['Float']>;
  /** The maximum age a talent can play */
  playableAgeMin?: Maybe<Scalars['Float']>;
  /**
   * Date of pregnancy
   * @deprecated This field is deprecated and will be deleted once the compatible changes at the front end will be added everyewhere for pregnancyDue reference. Use pregnancyDue instead
   */
  pregnancy?: Maybe<Scalars['DateTime']>;
  /** Date of pregnancy */
  pregnancyDue?: Maybe<Scalars['DateTime']>;
  /** Profession */
  profession?: Maybe<Scalars['String']>;
  /** Get the artist media profile */
  profile: Profile;
  /** Access Token of a Profile, generated by Granting Access or Creating a Profile */
  profileAccessToken?: Maybe<Scalars['String']>;
  /** ProfileAccessToken created date */
  profileAccessTokenCreated?: Maybe<Scalars['DateTime']>;
  /** Profile account country */
  profileAccountCountry?: Maybe<Country>;
  /** Profile Account System Role */
  profileAccountRole?: Maybe<Scalars['String']>;
  /** Get profile bookouts */
  profileBookOuts: Array<ProfileBookOuts>;
  /** Gender Identities */
  profileGenderIdentities?: Maybe<Array<ProfileGenderIdentity>>;
  /** Primary ID */
  profileId: Scalars['ID'];
  /** The Profile List ids where current profile participated */
  profileLists: Array<Scalars['Int']>;
  profileMainDivision?: Maybe<Organization>;
  profileMainOrganization?: Maybe<Organization>;
  /** media assets */
  profileMedia?: Maybe<Array<ProfileMedia>>;
  /** Profile Pants */
  profilePants: Array<Pants>;
  /** Profile pets */
  profilePets: Array<ProfilePet>;
  /** Profile piercings */
  profilePiercings: Array<Piercing>;
  /** Profile shoe sizes */
  profileShoeSizes: Array<ProfileShoeSize>;
  /** Profile general size */
  profileSizes: Array<ProfileSize>;
  /** Profile Status Object */
  profileStatus?: Maybe<ProfileStatus>;
  profileStatusId?: Maybe<Scalars['Int']>;
  /** Profile TshirtSize */
  profileTshirtSizes: Array<TShirtSize>;
  /** Profile Type */
  profileType?: Maybe<ProfileType>;
  /** Profile vehicles */
  profileVehicles: Array<ProfileVehicle>;
  /** profileVisibility Object */
  profileVisiblities?: Maybe<Array<ProfileVisibility>>;
  /** Wardrobes */
  profileWardrobes?: Maybe<Array<ProfileWardrobe>>;
  /** Project Type */
  projectType?: Maybe<Scalars['String']>;
  /** Prop Type(s) */
  props?: Maybe<Array<ProfileProp>>;
  /** Job Persuing Type(s) */
  pursuing?: Maybe<Array<Pursuing>>;
  /** User's resume document */
  resume?: Maybe<ProfileMedia>;
  /** SeekingRepresentation Object */
  seekingRepresentations?: Maybe<Array<SeekingRepresentation>>;
  selectionType: ProfileSelectionType;
  /** Skills and their Levels */
  skills?: Maybe<Array<ProfileSkill>>;
  /** Sleeve Object */
  sleeve?: Maybe<Sleeve>;
  /** Sport equipments */
  sportEquipments?: Maybe<Array<ProfileSportEquipment>>;
  /** Stage Name */
  stageName: Scalars['String'];
  /** Returns submission */
  submission?: Maybe<PublicSubmission>;
  /** Submission request's media assets */
  submissionRequestMedia: Array<SubmissionMedia>;
  /** Profile email */
  talentEmail?: Maybe<Scalars['String']>;
  /** Talent unions */
  talentUnions?: Maybe<Array<TalentProfileUnion>>;
  /** Profile tattoo */
  tattoo?: Maybe<Tattoo>;
  /** Tattoo Note */
  tattooNote?: Maybe<Scalars['String']>;
  /** Underbust size Object */
  underbust?: Maybe<UnderBust>;
  /** Unique Attribute Type(s) */
  uniqueAttributes?: Maybe<Array<UniqueAttribute>>;
  /** Updated at Date */
  updated?: Maybe<Scalars['DateTime']>;
  /** Profile video assets */
  videos?: Maybe<Array<ProfileMedia>>;
  /** Waist Object */
  waist?: Maybe<Waist>;
  /** Weight Object */
  weight?: Maybe<Weight>;
  /** Willingness Objects */
  willingness: Array<Willingness>;
  /** Work permit expiration date */
  workPermitExp?: Maybe<Scalars['DateTime']>;
  /** Working Locations */
  workingLocations?: Maybe<Array<ProfileWorkingLocation>>;
};

export type PublicProfileHasAuditionHistoryArgs = {
  organizationId?: Maybe<Scalars['Float']>;
};

export type PublicProfilePhotosArgs = {
  isPrimary?: Maybe<Scalars['Boolean']>;
};

export type PublicProfileSelectionTypeArgs = {
  roleId: Scalars['Float'];
};

export type PublicProfileSubmissionArgs = {
  roleId: Scalars['Float'];
};

export type PublicProfileSubmissionRequestMediaArgs = {
  roleId: Scalars['Float'];
};

/** Public Submission object */
export type PublicSubmission = {
  __typename?: 'PublicSubmission';
  /** Primary ID */
  id: Scalars['BigInt'];
  /** Media */
  media?: Maybe<Array<SubmissionMedia>>;
  mediaCount?: Maybe<Array<MediaCount>>;
  /** Note */
  note?: Maybe<Scalars['String']>;
  profile?: Maybe<PublicProfile>;
  profileId?: Maybe<Scalars['Int']>;
  /** Profile Working Location ID */
  profileWorkingLocationId?: Maybe<Scalars['Int']>;
  /** Requested Media */
  requestedMedia?: Maybe<Array<SubmissionMedia>>;
  /** Customized Profile Working Location */
  workingLocation?: Maybe<ProfileWorkingLocation>;
};

/** Publication Setting object */
export type PublicationSetting = {
  __typename?: 'PublicationSetting';
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

/** Generate purchase based on items or subscription */
export type PurchaseInput = {
  artistId?: Maybe<Scalars['Int']>;
  /** Billing items */
  items?: Maybe<Array<BillingItemInput>>;
  providerCouponCodes?: Maybe<Array<Scalars['String']>>;
  /** Billing subscriptions */
  subscriptions?: Maybe<Array<BillingSubscriptionInput>>;
  threeDSecureActionResultTokenId?: Maybe<Scalars['String']>;
  /** Billing Token */
  token?: Maybe<Scalars['String']>;
};

export type PurchaseModel = {
  __typename?: 'PurchaseModel';
  cardType?: Maybe<Scalars['String']>;
  couponCodes?: Maybe<Array<Scalars['String']>>;
  creditsApplied: Scalars['Float'];
  currency: Currency;
  discount?: Maybe<Scalars['Float']>;
  email: Scalars['String'];
  invoiceId?: Maybe<Scalars['String']>;
  items: Array<BillingItemModel>;
  lastFour?: Maybe<Scalars['String']>;
  subscriptions: Array<BillingItemModel>;
  total: Scalars['Float'];
};

/** Pursuing object */
export type Pursuing = {
  __typename?: 'Pursuing';
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  accountStatuses: Array<AccountStatus>;
  accountsIndexable: Scalars['JSON'];
  /** Get all active projects list */
  activeProjectListWithVisibilities: ProjectVisibilityResult;
  /** Get all active roles for a Project with optional parameter to filter roles for organization */
  activeProjectRoles: Array<Role>;
  artistByAccount: Array<Artist>;
  /** Get Artist by BAU Account */
  artistByBauAccount: Array<BauArtist>;
  artistSubscriptions: Array<SubscriptionModel>;
  /** Artists by ids */
  artists: Array<Artist>;
  artistsIndexable: Scalars['JSON'];
  askQuestionRequestDetails: AskQuestionRequest;
  askQuestionSubRequestDetails: AskQuestionSubRequest;
  /** Gets single record of Audition Group by provided group id */
  auditionGroup: AuditionGroup;
  /** Gets audition group ids record by profile and session id */
  auditionGroupIdsByProfile?: Maybe<Array<AuditionGroupTalent>>;
  /** Gets paginated result of Audition Groups by provided session id */
  auditionGroupsBySession: AuditionGroupPaginatedResult;
  /** Gets paginated result of Audition Sessions by provided project id */
  auditionSessionsByProject: AuditionSessionPaginatedResult;
  auditionSources: Array<AuditionSource>;
  authHealth: Scalars['String'];
  /** Returns true if username and password are matched, otherwise false */
  authenticate: Scalars['Boolean'];
  buildRolesOrganizationMatchNotificationPayloads: RolesPublishedContextNotificationContextAndRecipient;
  busts: Array<Bust>;
  /** Projects with Fit For You roles */
  castingBillboardRoles?: Maybe<RoleSearchResult>;
  cdWorksheet: SubmissionPaginatedResult;
  chestSizes: Array<ChestSize>;
  coats: Array<Coat>;
  /** Compare a password with hashedPassword */
  comparePassword: Scalars['Boolean'];
  compensation: Array<Compensation>;
  conflicts: Array<Conflict>;
  contractStatuses: Array<ContractStatus>;
  countries: Array<Country>;
  countryWithDma: Array<Country>;
  creditTypes: Array<CreditType>;
  /** Get all the profile's credits in the db */
  credits?: Maybe<Array<Credit>>;
  cupSizes: Array<CupSize>;
  currentUser: BauAccount;
  divisionCastingOrganizations: Array<Organization>;
  dmas: Array<Dma>;
  documentTypes: Array<Document>;
  dresses: Array<ClothesSize>;
  ethnicAppearances: Array<EthnicAppearance>;
  eyeColors: Array<EyeColor>;
  facialHairs: Array<FacialHair>;
  featureByType: Array<Feature>;
  features: Array<Feature>;
  genderAppearances: Array<GenderAppearance>;
  genderIdentities: Array<GenderIdentity>;
  generalSizes: Array<GeneralSize>;
  getAccountByIds: Array<Account>;
  /** List of sessions */
  getAccountSessions: Array<Session>;
  getAccountSystemRoleCodes: Array<AccountsSystemRoleCodes>;
  getActiveOnboardedPaypalAccounts: Array<AccountActiveOnboardedPaypal>;
  getActiveSubRequestsBySubmissionIds: Array<RequestSubmission>;
  getActivityLogsBySubmissionId: ActivityLogPagedList;
  getArtist: Artist;
  getArtistByProfileId: Artist;
  getArtistByProfiles: Array<Artist>;
  /** Audition history of the talent within the company */
  getAuditionHistory: AuditionHistoryPaginatedResult;
  /** Gets single record of Audition Session by provided session id */
  getAuditionSession?: Maybe<AuditionSession>;
  getAuditionTalentPool?: Maybe<AuditionTalentPool>;
  /** This endpoint is specifically designed for FastCapture adapater usage for retrieving the audition talentpool list */
  getAuditionTalentPoolFlat?: Maybe<AuditionTalentPool>;
  /** Returns tuple of min/max available seconds for shifting, e.g. [-3600, 3600] */
  getAvailableScheduleTimeShifting: Array<Scalars['Int']>;
  /** Returns available submission ids for request */
  getAvailableSubmissionIdsForRequest: Array<Scalars['BigInt']>;
  getBauCountries?: Maybe<Array<BauCountry>>;
  /** Fetch last calendar history change */
  getCalendarLastHistoryChange?: Maybe<ScheduleHistory>;
  /** Fetch calendar revision by calendar id and version */
  getCalendarRevision: ScheduleDetail;
  getChatMessageByTopic: GetChatMessagesByTopicModel;
  getCommentsForPresentationSubmissionPublic: Array<PresentationSubmissionComment>;
  getCommentsForPresentationSubmissionPublicBySubmissionId: PresentationSubmissionCommentPaginatedResult;
  getCommentsForSubmission: Array<PresentationSubmissionComment>;
  getCommentsForSubmissions: PresentationSubmissionCommentPaginatedResult;
  getCompanyDictionary: OrganizationDictionaryItemPagedList;
  getComplexAccountInfo: Account;
  getEnterpriseUserOrganization?: Maybe<UserOrganization>;
  /** Get fit for you values for the specific artist id (Used at Casting Billboard ) */
  getFitForYouValuesForArtist?: Maybe<DefaultFitForYouArtist>;
  getFreeCreditItems: Array<FreeCreditItemModel>;
  getIdByLegacyId: Redirect;
  getInternalNotesByAccountId: NotePaginatedResult;
  getInternalWelcomeContext: InternalWelcomeContextNotificationContextAndRecipient;
  getLastActivityLogBySubmissionIds: Array<ActivityLog>;
  getLastNote: Array<Note>;
  /** Get account by legacy profileId */
  getLegacyAccountDetails: Array<LegacyAccount>;
  getMediaByArtist: Array<ArtistMedia>;
  getMediaMediaTypeById: Array<MediaMediaType>;
  getMessageAfterId: GetChatMessagesByTopicModel;
  /** Get notification settings for specific account */
  getNotificationEntitySubscriptionByAccount?: Maybe<
    Array<NotificationEntitySubscription>
  >;
  /** Get notification settings for specific artist */
  getNotificationEntitySubscriptionByArtist?: Maybe<
    Array<NotificationEntitySubscription>
  >;
  /** Get notification settings for specific account */
  getNotificationNotificationSubscriptionByAccount?: Maybe<
    Array<NotificationTypeNotificationSubscription>
  >;
  /** Get notification settings for specific account */
  getNotificationNotificationSubscriptionByAccounts?: Maybe<
    Array<NotificationTypeNotificationSubscription>
  >;
  /** Get notification settings for specific artist */
  getNotificationNotificationSubscriptionByArtist?: Maybe<
    Array<NotificationTypeNotificationSubscription>
  >;
  /** Get notification settings for artists */
  getNotificationNotificationSubscriptionByArtists?: Maybe<
    Array<NotificationTypeNotificationSubscription>
  >;
  /** Returns paginated result of organization profile lists which logged in user belongs to. */
  getOrganizationProfileLists: ProfileListPaginatedResult;
  /** Returns paginated result of organization representative lists which logged in user belongs to. */
  getOrganizationRepresentativeLists: RepresentativeListPaginatedResult;
  /** Paginated query for get organizations by specified representation type and partial/full org name match */
  getOrganizationsByRepTypeAndName: OrganizationsByRepTypeAndNameResultPaginatedResult;
  getPackageFolderTalent: Array<PresentationFolderTalent>;
  getPhone: Array<Phone>;
  getPlanFeatures: Array<PlanFeatureModel>;
  getPlans: Array<PlanModel>;
  /** Retrieve Presentation by filters */
  getPresentationByFilters: PresentationPublic;
  /** Retrieve Presentation filters Data */
  getPresentationFiltersData: PresentationFilterData;
  /** Query for getting Presentation folder talent(s) by folder ids */
  getPresentationFolderTalent: Array<PresentationFolderTalent>;
  /** Query for getting Presentation folder talent(s) by talent ids */
  getPresentationFolderTalentById: Array<PresentationFolderTalent>;
  /** Gets list of presentation folders for the presentation */
  getPresentationFolders: Array<PresentationFolder>;
  /** Gets presentation folders details */
  getPresentationFoldersDetails: Array<PresentationFolder>;
  /** Retrieve Presentation Group by filters */
  getPresentationGroupByFilters?: Maybe<PresentationGroupPublic>;
  getPresentationGroupPublic?: Maybe<PresentationGroupPublic>;
  getPresentationGroupSubmissions: PresentationGroupSubmissionPaginatedResult;
  /** Query for getting Presentation Groups for the Presentation Folder */
  getPresentationGroupsByFolder: Array<PresentationGroup>;
  getPresentationGroupsSubmissions: PresentationGroupSubmissionPaginatedResult;
  getPresentationGroupsSubmissionsPublic: PresentationTalentPublicPaginatedResult;
  /** Gets info about media which should be archived */
  getPresentationMediaDownloadInfo: Array<MediaToArchive>;
  /** Retrieve Presentation by GUID */
  getPresentationPublic: PresentationPublic;
  /** Retrieve Presentations by IDs */
  getPresentations: Array<Presentation>;
  /** Retrieve Presentations by project */
  getPresentationsByProject: Array<Presentation>;
  /** Get profileAccessToken details */
  getProfileByAccessToken?: Maybe<ProfileAccessToken>;
  getProfileByLegacyPersonId?: Maybe<Array<BauProfile>>;
  getProfileDirectMessageContext: ProfileDirectMessageContextAndProfile;
  /** Get all the profiles by artist */
  getProfilesByArtist: Array<Profile>;
  /** Get backlot project seach result */
  getProjectBacklot: ProjectBacklotSearchResultPaginatedResult;
  /** Get all roles for a Project by role Status */
  getProjectRolesByOrg: Array<Role>;
  getPublishedOrganizationIdsForProject: Array<Scalars['Float']>;
  /** Retrieve Presentations for representative organizations */
  getRepPresentations: RepPresentations;
  getReportById?: Maybe<ReportUnion>;
  getReportByIdPublic?: Maybe<ReportUnion>;
  getReportCsvUrlById?: Maybe<Scalars['String']>;
  getRepresentativeSystemRole: Array<RepresentationSystemRole>;
  /** Get all closed roles for representatives */
  getRepsReadOnlyProjectRoles: Array<Role>;
  getRolesFitForYouNotificationContext: Array<RolesFitForYouContext>;
  getScheduleReminderContext: ScheduleReminder;
  /** @deprecated Use getScheduleSlots instead */
  getScheduleSlot?: Maybe<ScheduleSlot>;
  getScheduleSlots?: Maybe<Array<ScheduleSlot>>;
  /** Fetch Slots summary by scheduleId */
  getScheduleSlotsSummary: Array<ScheduleSlotSummary>;
  getScheduleTimeframe: ScheduleTimeframe;
  /** Fetch Schedules Details by Ids */
  getSchedules: Array<ScheduleDetail>;
  getSubRequestsCount: Scalars['Float'];
  /** Get submissions for given role and profile id */
  getSubmissionByRoleProfile: Array<Submission>;
  getSubmissionFeedback: PresentationSubmissionFeedback;
  getSubmissionIdsByAuditionGroups: Array<Scalars['BigInt']>;
  /** Query for getting Submissions IDs by Presentation Group */
  getSubmissionIdsByPresentationGroupId: Array<Scalars['BigInt']>;
  /** Get submission profile information for given submission id */
  getSubmissionProfile: SubmissionProfile;
  /** Returns list of submissions for given profileId */
  getSubmissionsByProfileId: Array<Submission>;
  getSubmissionsByProjectAndProfile: SubmissionPaginatedResult;
  getSubmissionsByRole: SubmissionPaginatedResult;
  /** Returns submissions data for workflow */
  getSubmissionsDataForWorkflow: Array<SubmissionWorkflow>;
  /** Returns submissions data for workflow. (Short) */
  getSubmissionsDataForWorkflowShort: Array<SubmissionWorkflowShort>;
  getTalentAccessProfileContext: TalentAccessProfileContextNotificationContextAndRecipient;
  /** Gets talent pool for the schedule */
  getTalentPoolForSchedule: Array<ScheduleTalentPool>;
  /** Gets the count for all the profiles for a project. */
  getTotalProfileCount: Scalars['Float'];
  /** Get account id, phone and legacy email for UNCLAIMED profile */
  getUnclaimedProfileRecipientAccount?: Maybe<Account>;
  /** Get account id, phone and legacy email for UNCLAIMED profile */
  getUnclaimedProfilesRecipientAccount?: Maybe<Array<UnclaimedAccount>>;
  getVerificationEmailContext: BaseEmailContextNotificationContextAndRecipient;
  getWelcomeContext: WelcomeContextNotificationContextAndRecipient;
  gloves: Array<Glove>;
  hairColors: Array<HairColor>;
  hairStyles: Array<HairStyle>;
  /** Hash a password */
  hashPassword: Scalars['String'];
  hatSizes: Array<HatSize>;
  heights: Array<Height>;
  hips: Array<Hip>;
  inseams: Array<Inseam>;
  isPresentationMediaArchiveReady: Scalars['Boolean'];
  lookupBauUsername: Scalars['String'];
  mediaAsset?: Maybe<Media>;
  mediaAssets: Array<Media>;
  mediaFileTypes: Array<MediaFileType>;
  mediaRequestDetails: MediaRequest;
  mediaSubRequestDetails: MediaSubRequest;
  mediaTypes: Array<MediaType>;
  multipleBirths: Array<MultipleBirth>;
  myAccount: Account;
  necks: Array<Neck>;
  organizationByAccount?: Maybe<Array<OrganizationAccount>>;
  organizationFeature?: Maybe<Array<Feature>>;
  /** Get projects for a organization */
  organizationProjects: ProjectBasePaginatedResult;
  organizationStatus: Array<OrganizationStatus>;
  /** Return Organization objects from an id array */
  organizations: Array<Organization>;
  organizationsByRoleSubmissionsAndName: OrganizationsByRoleSubmissionsAndNamePaginatedResult;
  organizationsIndexable: Scalars['JSON'];
  paidTypes: Array<PaidType>;
  pants: Array<Pants>;
  /** Returns partial BAU account details by provided legacy login and instance */
  partialBauAccountDetails: PartialBauAccountDetails;
  petSizes: Array<PetSize>;
  pets: Array<Pet>;
  piercings: Array<Piercing>;
  /** Query for getting Presentation Group details */
  presentationGroupDetails: Array<PresentationGroup>;
  presentationTypes: Array<PresentationType>;
  previewPurchase: PurchaseModel;
  previousScheduleResponses: Array<ScheduleInvitePreviousResponse>;
  /** Get all the profile ids by account */
  profileIdsByAccounts?: Maybe<Array<ProfileIdsByAccount>>;
  /** Returns List Details for given list ID */
  profileListDetails: ProfileList;
  profileStatuses: Array<ProfileStatus>;
  profileTypes: Array<ProfileType>;
  /** Get all the profiles in the db */
  profiles?: Maybe<Array<Profile>>;
  profilesIndexable: Scalars['JSON'];
  /** Get project details by id */
  project: Project;
  /** Get Roles for project */
  projectRoles: Array<Role>;
  projectStatus: Array<ProjectStatus>;
  projectTypes: Array<ProjectType>;
  projectUnions: Array<TalentUnion>;
  /** Get projects by id's */
  projects: Array<Project>;
  /** Get project(s) modification(s) by id's */
  projectsModifications: Array<Project>;
  props: Array<Prop>;
  /** Retrieve Profile by GUID */
  publicProfile?: Maybe<PublicProfile>;
  publicProjectName?: Maybe<Scalars['String']>;
  publicRoleName?: Maybe<Scalars['String']>;
  pursuings: Array<Pursuing>;
  repOrganizationList?: Maybe<Array<RepOrganizationList>>;
  representationAgeCategory: Array<RepresentationAgeCategory>;
  representationCategories: Array<RepresentationCategory>;
  representationCategoryByType: Array<RepresentationCategory>;
  representationTypes: Array<RepresentationType>;
  /** Returns Representative List Details for given list ID */
  representativeListDetails: RepresentativeList;
  repsWorksheet: RepsWorksheetItemPagedList;
  repsWorksheetFilters: RepsWorksheetFilters;
  requests: RequestPagedList;
  /** Get the role from modification by RoleId */
  roleModification?: Maybe<Role>;
  rolePreviousStatus: Array<RolePreviousStatus>;
  roleSidesVisibilities: Array<RoleSidesVisibility>;
  roleTargets: Array<RoleTarget>;
  roleTypes: Array<RoleType>;
  roleUnions: Array<RoleUnion>;
  /** Get the roles by id's */
  roles: Array<Role>;
  rolesIndexable: Scalars['JSON'];
  /** Get roster invitation history for provided talent's name and email */
  rosterInvitationTalentHistory: Array<RosterTalentInvitation>;
  rosterInvitations: RosterTalentInvitationPagedList;
  /** Get details for talent invitation by token */
  rosterTalentInvitationByToken: RosterTalentInvitation;
  /** Fetch Schedule Details by scheduleId */
  scheduleDetails: ScheduleDetail;
  scheduleInviteRequestNotes: ScheduleInviteRequestNotes;
  scheduleInviteResponseStatusCounts: Array<ScheduleInviteResponseStatusCounts>;
  scheduleInviteSubRequestDetails: ScheduleInviteSubRequest;
  scheduleResponses: Array<ScheduleInviteResponse>;
  scheduleResponsesCanceled: Array<ScheduleInviteResponse>;
  searchAccounts: AccountItemPagedList;
  searchCompanies: OrganizationItemPagedList;
  searchCompanyDivisions: OrganizationItemPagedList;
  searchNotifications: NotificationPagedList;
  /** Search in organizations */
  searchOrganizations: OrganizationSearchResult;
  /** Searching Profiles */
  searchProfiles?: Maybe<ProfileSearch>;
  searchProfilesByOrgId: ProfileSearchResultByOrgIdPaginatedResult;
  searchProjectsByOrg: ProjectSearchResultsByOrgIdPaginatedResult;
  searchRepresentatives: RepresentativeSearchResult;
  /** Searching Schedules */
  searchSchedules?: Maybe<SchedulePaginatedResult>;
  searchSubmissions: SubmissionPaginatedResult;
  searchSubmissionsByAuditionGroupId: SubmissionPaginatedResult;
  seekingRepresentations: Array<SeekingRepresentation>;
  sexualSituations: Array<SexualSituation>;
  shoeModifier: Array<ShoeModifier>;
  shoeSizes: Array<ShoeSize>;
  sizeModifiers: Array<SizeModifier>;
  skillLevels: Array<SkillLevel>;
  skills: Array<Skill>;
  sleeves: Array<Sleeve>;
  /** Fetch Slots with Submissions by scheduleId */
  slotsWithSubmissionsByScheduleId: Array<Slot>;
  sportEquipments: Array<SportEquipment>;
  states: Array<State>;
  submissionStatuses: Array<SubmissionStatus>;
  /** Returns list of submissions for submissionIds */
  submissions: Array<Submission>;
  submissionsIndexable: Scalars['JSON'];
  systemRoles: Array<SystemRole>;
  /** Returns talent response by rep's request id */
  talentResponse?: Maybe<RepWorksheetResponse>;
  talentUnions: Array<TalentUnion>;
  tattoos: Array<Tattoo>;
  tileSchemaValues: Array<TileSchemaValue>;
  timeZones: Array<TimeZone>;
  tshirtSizes: Array<TShirtSize>;
  underBusts: Array<UnderBust>;
  uniqueAttributes: Array<UniqueAttribute>;
  vehicleMakes: Array<VehicleMake>;
  vehicleTypeMakes: Array<VehicleTypeMake>;
  vehicleTypes: Array<VehicleType>;
  /** Redirect user to Onboarding or B21 application */
  verifyAccount: Scalars['Json'];
  verifyAccountByBauCookie: Scalars['Json'];
  verifyToken: Scalars['Boolean'];
  waists: Array<Waist>;
  wardrobes: Array<Wardrobe>;
  weights: Array<Weight>;
  wfApiHealth: Scalars['String'];
  willingnesses: Array<Willingness>;
};

export type QueryAccountStatusesArgs = {
  input?: Maybe<FilterInput>;
};

export type QueryAccountsIndexableArgs = {
  ids: Array<Scalars['Int']>;
};

export type QueryActiveProjectListWithVisibilitiesArgs = {
  filters?: Maybe<ProjectFilterInput>;
  page?: Maybe<PageInput>;
};

export type QueryActiveProjectRolesArgs = {
  id: Scalars['Float'];
};

export type QueryArtistByAccountArgs = {
  accountId: Scalars['Float'];
};

export type QueryArtistSubscriptionsArgs = {
  input: ArtistSubscriptionInput;
};

export type QueryArtistsArgs = {
  ids: Array<Scalars['Int']>;
};

export type QueryArtistsIndexableArgs = {
  ids: Array<Scalars['Int']>;
};

export type QueryAskQuestionRequestDetailsArgs = {
  id: Scalars['ID'];
};

export type QueryAskQuestionSubRequestDetailsArgs = {
  id: Scalars['ID'];
};

export type QueryAuditionGroupArgs = {
  groupId: Scalars['Int'];
};

export type QueryAuditionGroupIdsByProfileArgs = {
  profileIds: Array<Scalars['Int']>;
  sessionId: Scalars['Int'];
};

export type QueryAuditionGroupsBySessionArgs = {
  pageInput?: Maybe<PageInput>;
  sessionId: Scalars['Int'];
};

export type QueryAuditionSessionsByProjectArgs = {
  pageInput?: Maybe<PageInput>;
  projectId: Array<Scalars['Int']>;
};

export type QueryAuditionSourcesArgs = {
  input?: Maybe<FilterInput>;
};

export type QueryAuthenticateArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type QueryBuildRolesOrganizationMatchNotificationPayloadsArgs = {
  messageToReps?: Maybe<Scalars['String']>;
  organizationId: Scalars['Int'];
  projectId: Scalars['Int'];
  publicationTimestamp: Scalars['DateTime'];
  roleIds: Array<Scalars['Int']>;
};

export type QueryBustsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};

export type QueryCastingBillboardRolesArgs = {
  castingBillBoardFilters: CastingBillboardSearchInput;
  paginationConfig: PageInput;
  sortInput?: Maybe<SortConditionInput>;
};

export type QueryCdWorksheetArgs = {
  filters: CdWorksheetFilterInput;
  page?: Maybe<PageInput>;
};

export type QueryChestSizesArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};

export type QueryCoatsArgs = {
  input?: Maybe<FilterInput>;
};

export type QueryComparePasswordArgs = {
  hashedPassword: Scalars['String'];
  password: Scalars['String'];
};

export type QueryCompensationArgs = {
  input?: Maybe<FilterInput>;
};

export type QueryConflictsArgs = {
  input?: Maybe<FilterInput>;
};

export type QueryContractStatusesArgs = {
  input?: Maybe<FilterInput>;
};

export type QueryCountriesArgs = {
  input?: Maybe<FilterInput>;
};

export type QueryCountryWithDmaArgs = {
  isLimitedOnly?: Maybe<Scalars['Boolean']>;
};

export type QueryCreditTypesArgs = {
  input?: Maybe<FilterInput>;
};

export type QueryCreditsArgs = {
  profileId: Scalars['Float'];
};

export type QueryCupSizesArgs = {
  input?: Maybe<FilterInput>;
};

export type QueryDivisionCastingOrganizationsArgs = {
  organizationId: Scalars['Int'];
  page?: Maybe<PageInput>;
};

export type QueryDmasArgs = {
  input?: Maybe<FilterInput>;
  isLimitedOnly?: Maybe<Scalars['Boolean']>;
};

export type QueryDocumentTypesArgs = {
  input?: Maybe<FilterInput>;
  onlySelectable?: Maybe<Scalars['Boolean']>;
};

export type QueryDressesArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};

export type QueryEthnicAppearancesArgs = {
  input?: Maybe<FilterInput>;
};

export type QueryEyeColorsArgs = {
  input?: Maybe<FilterInput>;
};

export type QueryFacialHairsArgs = {
  input?: Maybe<FilterInput>;
};

export type QueryFeatureByTypeArgs = {
  divisionOnly?: Maybe<Scalars['Boolean']>;
  input?: Maybe<Scalars['Float']>;
};

export type QueryFeaturesArgs = {
  input?: Maybe<FilterInput>;
};

export type QueryGenderAppearancesArgs = {
  input?: Maybe<FilterInput>;
};

export type QueryGenderIdentitiesArgs = {
  input?: Maybe<FilterInput>;
};

export type QueryGeneralSizesArgs = {
  input?: Maybe<FilterInput>;
};

export type QueryGetAccountByIdsArgs = {
  accountIds: Array<Scalars['ID']>;
};

export type QueryGetAccountSessionsArgs = {
  accountId: Scalars['Float'];
};

export type QueryGetAccountSystemRoleCodesArgs = {
  accountIds: Array<Scalars['ID']>;
};

export type QueryGetActiveOnboardedPaypalAccountsArgs = {
  input: AccountPaypalLocationInput;
};

export type QueryGetActiveSubRequestsBySubmissionIdsArgs = {
  requestStatus?: Maybe<Array<RequestStatusUnion>>;
  requestType?: Maybe<RequestType>;
  submissionIds: Array<Scalars['Int']>;
};

export type QueryGetActivityLogsBySubmissionIdArgs = {
  id: Scalars['Int'];
  page: PageInput;
};

export type QueryGetArtistArgs = {
  artistId: Scalars['Int'];
};

export type QueryGetArtistByProfileIdArgs = {
  profileId: Scalars['Int'];
};

export type QueryGetArtistByProfilesArgs = {
  profileIds: Array<Scalars['Int']>;
};

export type QueryGetAuditionHistoryArgs = {
  page: PageInput;
  profileId: Scalars['Int'];
};

export type QueryGetAuditionSessionArgs = {
  sessionId: Scalars['Int'];
};

export type QueryGetAuditionTalentPoolArgs = {
  sessionId: Scalars['Int'];
};

export type QueryGetAuditionTalentPoolFlatArgs = {
  sessionId: Scalars['Int'];
};

export type QueryGetAvailableScheduleTimeShiftingArgs = {
  scheduleId: Scalars['Int'];
  timeframeId: Scalars['Int'];
};

export type QueryGetAvailableSubmissionIdsForRequestArgs = {
  roleIds?: Maybe<Array<Scalars['Int']>>;
  searchInput?: Maybe<SubmissionSearchInput>;
  tileSchemeValueCode?: Maybe<Array<Scalars['String']>>;
};

export type QueryGetCalendarLastHistoryChangeArgs = {
  calendarId: Scalars['ID'];
};

export type QueryGetCalendarRevisionArgs = {
  calendarId: Scalars['ID'];
  version: Scalars['Int'];
};

export type QueryGetChatMessageByTopicArgs = {
  pageSize: Scalars['Int'];
  topicKey: Scalars['String'];
};

export type QueryGetCommentsForPresentationSubmissionPublicArgs = {
  groupId: Scalars['Int'];
  guid: Scalars['String'];
  submissionId: Scalars['BigInt'];
  userName?: Maybe<Scalars['String']>;
};

export type QueryGetCommentsForPresentationSubmissionPublicBySubmissionIdArgs = {
  page: PageInput;
  presentationId: Scalars['Int'];
  submissionIds: Array<Scalars['BigInt']>;
  userName?: Maybe<Scalars['String']>;
};

export type QueryGetCommentsForSubmissionArgs = {
  submissionId: Scalars['BigInt'];
};

export type QueryGetCommentsForSubmissionsArgs = {
  page?: Maybe<PageInput>;
  submissionIds: Array<Scalars['BigInt']>;
};

export type QueryGetCompanyDictionaryArgs = {
  filters?: Maybe<SearchOrganizationsFiltersArgs>;
  page: PageInput;
};

export type QueryGetComplexAccountInfoArgs = {
  accountId: Scalars['Float'];
};

export type QueryGetFitForYouValuesForArtistArgs = {
  artistId?: Maybe<Scalars['Float']>;
};

export type QueryGetFreeCreditItemsArgs = {
  artistId: Scalars['Float'];
};

export type QueryGetIdByLegacyIdArgs = {
  input: RedirectInput;
};

export type QueryGetInternalNotesByAccountIdArgs = {
  accountId: Scalars['Int'];
  page?: Maybe<PageInput>;
};

export type QueryGetInternalWelcomeContextArgs = {
  id: Scalars['Float'];
};

export type QueryGetLastActivityLogBySubmissionIdsArgs = {
  ids: Array<Scalars['Int']>;
};

export type QueryGetLastNoteArgs = {
  entityIds: Array<Scalars['BigInt']>;
  entityTypeCode: EntityTypeEnum;
  noteTypeCode?: Maybe<NoteTypeEnum>;
  organizationId?: Maybe<Scalars['Int']>;
};

export type QueryGetLegacyAccountDetailsArgs = {
  profileId: Scalars['Int'];
};

export type QueryGetMediaByArtistArgs = {
  artistId?: Maybe<Scalars['Float']>;
  mediaTypeCode: Scalars['String'];
};

export type QueryGetMediaMediaTypeByIdArgs = {
  ids: Array<Scalars['Int']>;
};

export type QueryGetMessageAfterIdArgs = {
  afterMessageId: Scalars['String'];
  direction: SearchDirection;
  pageSize: Scalars['Int'];
  topicKey: Scalars['String'];
};

export type QueryGetNotificationEntitySubscriptionByAccountArgs = {
  accountId: Scalars['Float'];
};

export type QueryGetNotificationEntitySubscriptionByArtistArgs = {
  artistId: Scalars['Float'];
};

export type QueryGetNotificationNotificationSubscriptionByAccountArgs = {
  accountId: Scalars['Float'];
};

export type QueryGetNotificationNotificationSubscriptionByAccountsArgs = {
  accountIds: Array<Scalars['Int']>;
};

export type QueryGetNotificationNotificationSubscriptionByArtistArgs = {
  artistId: Scalars['Float'];
};

export type QueryGetNotificationNotificationSubscriptionByArtistsArgs = {
  artistIds: Array<Scalars['Int']>;
};

export type QueryGetOrganizationProfileListsArgs = {
  order?: Maybe<ListSortOrderEnum>;
  page: PageInput;
};

export type QueryGetOrganizationRepresentativeListsArgs = {
  page?: Maybe<PageInput>;
};

export type QueryGetOrganizationsByRepTypeAndNameArgs = {
  input: OrganizationsByRepTypeAndNameInput;
};

export type QueryGetPackageFolderTalentArgs = {
  folderId: Scalars['Int'];
  pageInput?: Maybe<PageInput>;
  profileIds?: Maybe<Array<Scalars['Int']>>;
};

export type QueryGetPhoneArgs = {
  entityType: EntityTypeEnum;
  phoneNumber: Scalars['String'];
};

export type QueryGetPlanFeaturesArgs = {
  planId: Scalars['ID'];
};

export type QueryGetPresentationByFiltersArgs = {
  input: PresentationFilterInput;
};

export type QueryGetPresentationFiltersDataArgs = {
  presentationId: Scalars['Int'];
};

export type QueryGetPresentationFolderTalentArgs = {
  pageInput?: Maybe<PageInput>;
  presentationFolderIds: Array<Scalars['Int']>;
  profileIds?: Maybe<Array<Scalars['Int']>>;
};

export type QueryGetPresentationFolderTalentByIdArgs = {
  groupTalentIds: Array<Scalars['Int']>;
};

export type QueryGetPresentationFoldersArgs = {
  presentationId: Scalars['Int'];
};

export type QueryGetPresentationFoldersDetailsArgs = {
  folderIds: Array<Scalars['Int']>;
};

export type QueryGetPresentationGroupByFiltersArgs = {
  groupId: Scalars['Int'];
  guid: Scalars['String'];
  input: PresentationFilterInput;
};

export type QueryGetPresentationGroupPublicArgs = {
  groupId: Scalars['Int'];
  guid: Scalars['String'];
};

export type QueryGetPresentationGroupSubmissionsArgs = {
  hasPicks?: Maybe<Scalars['Boolean']>;
  page: PageInput;
  presentationGroupId: Scalars['Int'];
};

export type QueryGetPresentationGroupsByFolderArgs = {
  folderId: Scalars['Int'];
  hasPicks?: Maybe<Scalars['Boolean']>;
};

export type QueryGetPresentationGroupsSubmissionsArgs = {
  hasPicks?: Maybe<Scalars['Boolean']>;
  page: PageInput;
  presentationGroupIds: Array<Scalars['Int']>;
};

export type QueryGetPresentationGroupsSubmissionsPublicArgs = {
  hasPicks?: Maybe<Scalars['Boolean']>;
  page: PageInput;
  presentationGroupIds: Array<Scalars['Int']>;
  presentationId: Scalars['Int'];
  userName?: Maybe<Scalars['String']>;
};

export type QueryGetPresentationMediaDownloadInfoArgs = {
  folderId: Scalars['Int'];
};

export type QueryGetPresentationPublicArgs = {
  guid: Scalars['String'];
};

export type QueryGetPresentationsArgs = {
  ids: Array<Scalars['Int']>;
};

export type QueryGetPresentationsByProjectArgs = {
  activeOnly?: Maybe<Scalars['Boolean']>;
  projectId: Scalars['Int'];
};

export type QueryGetProfileByAccessTokenArgs = {
  accessToken: Scalars['String'];
};

export type QueryGetProfileDirectMessageContextArgs = {
  input: ProfileDirectMessageContextInput;
};

export type QueryGetProfilesByArtistArgs = {
  artistId: Scalars['Int'];
};

export type QueryGetProjectBacklotArgs = {
  input: ProjectBacklotSearchInput;
  page?: Maybe<PageInput>;
};

export type QueryGetProjectRolesByOrgArgs = {
  orgId: Scalars['Float'];
  projectId: Scalars['Float'];
  statusFilter: Array<Scalars['String']>;
};

export type QueryGetPublishedOrganizationIdsForProjectArgs = {
  page: PageInput;
  projectId: Scalars['Float'];
};

export type QueryGetRepPresentationsArgs = {
  page?: Maybe<PageInput>;
  sortOrder?: Maybe<SortOrderEnum>;
};

export type QueryGetReportByIdArgs = {
  id: Scalars['ID'];
};

export type QueryGetReportByIdPublicArgs = {
  id: Scalars['ID'];
  publicKey: Scalars['ID'];
};

export type QueryGetReportCsvUrlByIdArgs = {
  id: Scalars['ID'];
};

export type QueryGetRepsReadOnlyProjectRolesArgs = {
  id: Scalars['Float'];
};

export type QueryGetRolesFitForYouNotificationContextArgs = {
  artistAndRoles: Array<FfyContextInput>;
  messageToTalents?: Maybe<Scalars['String']>;
};

export type QueryGetScheduleReminderContextArgs = {
  input: ScheduleReminderInput;
};

export type QueryGetScheduleSlotArgs = {
  id: Scalars['ID'];
};

export type QueryGetScheduleSlotsArgs = {
  ids: Array<Scalars['ID']>;
};

export type QueryGetScheduleSlotsSummaryArgs = {
  scheduleId: Scalars['ID'];
};

export type QueryGetScheduleTimeframeArgs = {
  timeframeId: Scalars['Int'];
};

export type QueryGetSchedulesArgs = {
  ids: Array<Scalars['Int']>;
};

export type QueryGetSubRequestsCountArgs = {
  id: Scalars['ID'];
  status?: Maybe<Array<RequestStatus>>;
};

export type QueryGetSubmissionByRoleProfileArgs = {
  input: GetSubmissionByRoleProfileInput;
};

export type QueryGetSubmissionFeedbackArgs = {
  submissionId: Scalars['BigInt'];
};

export type QueryGetSubmissionIdsByAuditionGroupsArgs = {
  groupIds: Array<Scalars['Int']>;
};

export type QueryGetSubmissionIdsByPresentationGroupIdArgs = {
  groupId: Scalars['Int'];
};

export type QueryGetSubmissionProfileArgs = {
  id: Scalars['BigInt'];
};

export type QueryGetSubmissionsByProfileIdArgs = {
  input?: Maybe<SubmissionByProfileInput>;
  profileId: Scalars['Float'];
};

export type QueryGetSubmissionsByProjectAndProfileArgs = {
  pageInput?: Maybe<PageInput>;
  profileIds: Array<Scalars['Int']>;
  projectIds: Array<Scalars['Int']>;
};

export type QueryGetSubmissionsByRoleArgs = {
  pageInput?: Maybe<PageInput>;
  roleIds: Array<Scalars['Int']>;
  submissionStatusCodes: Array<Scalars['String']>;
  tileSchemeCodes?: Maybe<Array<Scalars['String']>>;
};

export type QueryGetSubmissionsDataForWorkflowArgs = {
  ids: Array<Scalars['BigInt']>;
};

export type QueryGetSubmissionsDataForWorkflowShortArgs = {
  ids: Array<Scalars['BigInt']>;
};

export type QueryGetTalentAccessProfileContextArgs = {
  input: TalentAccessProfileContextInput;
};

export type QueryGetTalentPoolForScheduleArgs = {
  pageInput: PageInput;
  roleIds: Array<Scalars['Int']>;
  scheduleId: Scalars['Int'];
  scheduleSelectInput?: Maybe<SchedulesSelectInput>;
  tileSchemaValueCodes?: Maybe<Array<Scalars['String']>>;
};

export type QueryGetTotalProfileCountArgs = {
  id: Scalars['Float'];
};

export type QueryGetUnclaimedProfileRecipientAccountArgs = {
  profileId: Scalars['Float'];
};

export type QueryGetUnclaimedProfilesRecipientAccountArgs = {
  profileIds: Array<Scalars['Int']>;
};

export type QueryGetVerificationEmailContextArgs = {
  audience?: Maybe<Scalars['String']>;
  token: Scalars['String'];
};

export type QueryGetWelcomeContextArgs = {
  id: Scalars['Float'];
};

export type QueryGlovesArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};

export type QueryHairColorsArgs = {
  input?: Maybe<FilterInput>;
};

export type QueryHairStylesArgs = {
  input?: Maybe<FilterInput>;
};

export type QueryHashPasswordArgs = {
  password: Scalars['String'];
};

export type QueryHatSizesArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};

export type QueryHeightsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};

export type QueryHipsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};

export type QueryInseamsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};

export type QueryIsPresentationMediaArchiveReadyArgs = {
  fileKey: Scalars['String'];
};

export type QueryLookupBauUsernameArgs = {
  legacyEmail: Scalars['String'];
  legacyInstance: Scalars['String'];
  legacyPhone: Scalars['String'];
};

export type QueryMediaAssetArgs = {
  id: Scalars['Int'];
};

export type QueryMediaAssetsArgs = {
  ids: Array<Scalars['Int']>;
};

export type QueryMediaFileTypesArgs = {
  input?: Maybe<FilterInput>;
};

export type QueryMediaRequestDetailsArgs = {
  id: Scalars['ID'];
};

export type QueryMediaSubRequestDetailsArgs = {
  id: Scalars['ID'];
};

export type QueryMediaTypesArgs = {
  input?: Maybe<FilterInput>;
};

export type QueryMultipleBirthsArgs = {
  input?: Maybe<FilterInput>;
};

export type QueryNecksArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};

export type QueryOrganizationByAccountArgs = {
  accountId: Scalars['Float'];
};

export type QueryOrganizationFeatureArgs = {
  organizationId: Scalars['Float'];
};

export type QueryOrganizationProjectsArgs = {
  organizationId: Scalars['Int'];
  page?: Maybe<PageInput>;
  sortInstruction?: Maybe<SortConditionInput>;
  statusFilter?: Maybe<ProjectStatusFilterEnum>;
};

export type QueryOrganizationStatusArgs = {
  input?: Maybe<FilterInput>;
};

export type QueryOrganizationsArgs = {
  ids: Array<Scalars['ID']>;
};

export type QueryOrganizationsByRoleSubmissionsAndNameArgs = {
  divisionOrAgencyName?: Maybe<Scalars['String']>;
  page: PageInput;
  roleId: Scalars['Int'];
};

export type QueryOrganizationsIndexableArgs = {
  ids: Array<Scalars['Int']>;
};

export type QueryPaidTypesArgs = {
  input?: Maybe<FilterInput>;
};

export type QueryPantsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};

export type QueryPartialBauAccountDetailsArgs = {
  input: PartialBauAccountDetailsInput;
};

export type QueryPetSizesArgs = {
  input?: Maybe<FilterInput>;
};

export type QueryPetsArgs = {
  input?: Maybe<FilterInput>;
};

export type QueryPiercingsArgs = {
  input?: Maybe<FilterInput>;
};

export type QueryPresentationGroupDetailsArgs = {
  groupIds: Array<Scalars['Int']>;
};

export type QueryPresentationTypesArgs = {
  input?: Maybe<FilterInput>;
};

export type QueryPreviewPurchaseArgs = {
  input: PurchaseInput;
};

export type QueryPreviousScheduleResponsesArgs = {
  scheduleId: Scalars['Int'];
  submissionIds: Array<Scalars['Int']>;
};

export type QueryProfileIdsByAccountsArgs = {
  accountIds: Array<Scalars['ID']>;
};

export type QueryProfileListDetailsArgs = {
  listId: Scalars['Float'];
};

export type QueryProfileStatusesArgs = {
  input?: Maybe<FilterInput>;
};

export type QueryProfileTypesArgs = {
  input?: Maybe<FilterInput>;
};

export type QueryProfilesArgs = {
  ids: Array<Scalars['ID']>;
};

export type QueryProfilesIndexableArgs = {
  ids: Array<Scalars['Int']>;
};

export type QueryProjectArgs = {
  id: Scalars['Float'];
};

export type QueryProjectRolesArgs = {
  id: Scalars['Float'];
  page?: Maybe<PageInput>;
  roleStatusCodes?: Maybe<Array<RoleStatusCodes>>;
  roleStatusFilter?: Maybe<RoleStatusFilter>;
};

export type QueryProjectStatusArgs = {
  input?: Maybe<FilterInput>;
};

export type QueryProjectTypesArgs = {
  input?: Maybe<FilterInput>;
  onlySelectable?: Maybe<Scalars['Boolean']>;
};

export type QueryProjectUnionsArgs = {
  input?: Maybe<FilterInput>;
};

export type QueryProjectsArgs = {
  ids: Array<Scalars['ID']>;
};

export type QueryProjectsModificationsArgs = {
  ids: Array<Scalars['ID']>;
};

export type QueryPropsArgs = {
  input?: Maybe<FilterInput>;
  onlySelectable?: Maybe<Scalars['Boolean']>;
};

export type QueryPublicProfileArgs = {
  guid: Scalars['String'];
};

export type QueryPublicProjectNameArgs = {
  guid: Scalars['String'];
};

export type QueryPublicRoleNameArgs = {
  guid: Scalars['String'];
};

export type QueryPursuingsArgs = {
  input?: Maybe<FilterInput>;
};

export type QueryRepOrganizationListArgs = {
  input: RepOrganizationListInput;
  page?: Maybe<PageInput>;
};

export type QueryRepresentationAgeCategoryArgs = {
  input?: Maybe<FilterInput>;
};

export type QueryRepresentationCategoriesArgs = {
  input?: Maybe<FilterInput>;
};

export type QueryRepresentationCategoryByTypeArgs = {
  typeId: Scalars['Float'];
};

export type QueryRepresentationTypesArgs = {
  input?: Maybe<FilterInput>;
};

export type QueryRepresentativeListDetailsArgs = {
  listId: Scalars['Float'];
};

export type QueryRepsWorksheetArgs = {
  filters?: Maybe<RepsWorksheetFiltersArgs>;
  page: PageInput;
  sortBy?: Maybe<RepWorksheetFieldOrder>;
};

export type QueryRequestsArgs = {
  page: PageInput;
  projectId: Scalars['Int'];
};

export type QueryRoleModificationArgs = {
  roleId: Scalars['Float'];
};

export type QueryRolePreviousStatusArgs = {
  roleIds: Array<Scalars['Float']>;
  skipRoleStatuses: Array<Scalars['String']>;
};

export type QueryRoleSidesVisibilitiesArgs = {
  input?: Maybe<FilterInput>;
};

export type QueryRoleTargetsArgs = {
  input?: Maybe<FilterInput>;
};

export type QueryRoleTypesArgs = {
  input?: Maybe<RoleTypeFilterInput>;
};

export type QueryRoleUnionsArgs = {
  input?: Maybe<FilterInput>;
};

export type QueryRolesArgs = {
  ids: Array<Scalars['ID']>;
};

export type QueryRolesIndexableArgs = {
  ids: Array<Scalars['Int']>;
};

export type QueryRosterInvitationTalentHistoryArgs = {
  filter: RosterInvitationTalentHistoryFilterInput;
};

export type QueryRosterInvitationsArgs = {
  page: PageInput;
};

export type QueryRosterTalentInvitationByTokenArgs = {
  token: Scalars['String'];
};

export type QueryScheduleDetailsArgs = {
  id: Scalars['ID'];
};

export type QueryScheduleInviteRequestNotesArgs = {
  scheduleId: Scalars['Int'];
};

export type QueryScheduleInviteResponseStatusCountsArgs = {
  scheduleIds: Array<Scalars['Int']>;
};

export type QueryScheduleInviteSubRequestDetailsArgs = {
  id: Scalars['ID'];
};

export type QueryScheduleResponsesArgs = {
  scheduleId: Scalars['Int'];
};

export type QueryScheduleResponsesCanceledArgs = {
  scheduleId: Scalars['Int'];
};

export type QuerySearchAccountsArgs = {
  filters?: Maybe<SearchAccountsFiltersArgs>;
  page: PageInput;
};

export type QuerySearchCompaniesArgs = {
  filters?: Maybe<SearchOrganizationsFiltersArgs>;
  page: PageInput;
};

export type QuerySearchCompanyDivisionsArgs = {
  filters?: Maybe<SearchOrganizationsFiltersArgs>;
  page: PageInput;
};

export type QuerySearchNotificationsArgs = {
  endDate?: Maybe<Scalars['DateTime']>;
  orderBy?: Maybe<NotificationOrderByInput>;
  page: PageInput;
  startDate?: Maybe<Scalars['DateTime']>;
};

export type QuerySearchOrganizationsArgs = {
  input?: Maybe<OrganizationSearchInput>;
  page?: Maybe<PageInput>;
};

export type QuerySearchProfilesArgs = {
  input: ProfileSearchInput;
  page?: Maybe<PageInput>;
  resultType?: Maybe<SearchResultType>;
  sortOptions?: Maybe<Array<ProfileSearchSortOption>>;
};

export type QuerySearchProfilesByOrgIdArgs = {
  page?: Maybe<PageInput>;
  partialStageName?: Maybe<Scalars['String']>;
};

export type QuerySearchProjectsByOrgArgs = {
  page?: Maybe<PageInput>;
  partialProjectName?: Maybe<Scalars['String']>;
};

export type QuerySearchRepresentativesArgs = {
  input: SearchRepresentativeInput;
  page: PageInput;
};

export type QuerySearchSchedulesArgs = {
  input: ScheduleSearchInput;
  page: PageInput;
};

export type QuerySearchSubmissionsArgs = {
  input: SubmissionSearchInput;
  page?: Maybe<PageInput>;
  sortOptions?: Maybe<Array<SubmissionSearchSortOptionsInput>>;
};

export type QuerySearchSubmissionsByAuditionGroupIdArgs = {
  auditionGroupId: Scalars['Int'];
  page: PageInput;
};

export type QuerySeekingRepresentationsArgs = {
  input?: Maybe<FilterInput>;
};

export type QuerySexualSituationsArgs = {
  input?: Maybe<FilterInput>;
};

export type QueryShoeModifierArgs = {
  input?: Maybe<FilterInput>;
};

export type QueryShoeSizesArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};

export type QuerySizeModifiersArgs = {
  input?: Maybe<FilterInput>;
};

export type QuerySkillLevelsArgs = {
  input?: Maybe<FilterInput>;
};

export type QuerySkillsArgs = {
  input?: Maybe<FilterInput>;
};

export type QuerySleevesArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};

export type QuerySlotsWithSubmissionsByScheduleIdArgs = {
  scheduleId: Scalars['ID'];
};

export type QuerySportEquipmentsArgs = {
  input?: Maybe<FilterInput>;
};

export type QueryStatesArgs = {
  input?: Maybe<StateFilterInput>;
  page?: Maybe<PageInput>;
};

export type QuerySubmissionStatusesArgs = {
  input?: Maybe<FilterInput>;
};

export type QuerySubmissionsArgs = {
  ids: Array<Scalars['BigInt']>;
};

export type QuerySubmissionsIndexableArgs = {
  ids: Array<Scalars['Int']>;
};

export type QuerySystemRolesArgs = {
  input?: Maybe<FilterInput>;
};

export type QueryTalentResponseArgs = {
  id: Scalars['ID'];
};

export type QueryTalentUnionsArgs = {
  input?: Maybe<FilterInput>;
};

export type QueryTattoosArgs = {
  input?: Maybe<FilterInput>;
};

export type QueryTileSchemaValuesArgs = {
  input?: Maybe<FilterInput>;
  tileSchema?: Maybe<TileSchemaEnum>;
};

export type QueryTimeZonesArgs = {
  input?: Maybe<FilterInput>;
};

export type QueryTshirtSizesArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};

export type QueryUnderBustsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};

export type QueryUniqueAttributesArgs = {
  input?: Maybe<FilterInput>;
};

export type QueryVehicleMakesArgs = {
  input?: Maybe<FilterInput>;
};

export type QueryVehicleTypesArgs = {
  input?: Maybe<FilterInput>;
};

export type QueryVerifyAccountArgs = {
  input: VerifyAccountInput;
};

export type QueryVerifyAccountByBauCookieArgs = {
  input: VerifyAccountByCookieInput;
};

export type QueryVerifyTokenArgs = {
  authToken: Scalars['String'];
};

export type QueryWaistsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};

export type QueryWardrobesArgs = {
  input?: Maybe<FilterInput>;
};

export type QueryWeightsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};

export type QueryWillingnessesArgs = {
  input?: Maybe<FilterInput>;
};

/** RatePerType object */
export type RatePerType = {
  __typename?: 'RatePerType';
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

/** Redirect object type */
export type Redirect = {
  __typename?: 'Redirect';
  /** B21 GUID */
  guid?: Maybe<Scalars['String']>;
  /** B21 ID */
  id?: Maybe<Scalars['ID']>;
  /** B21 Invitation Type Audition/Callback */
  inviationType?: Maybe<Scalars['String']>;
  /** B21 ID */
  presentationFolderId?: Maybe<Scalars['Int']>;
  /** B21 ID */
  presentationGroupId?: Maybe<Scalars['Int']>;
  /** B21 Profile GUID */
  profileGuid?: Maybe<Scalars['String']>;
  /** B21 Project ID */
  projectId?: Maybe<Scalars['ID']>;
};

/** Input type for entity type redirect */
export type RedirectInput = {
  /** Legacy ID from BAU */
  legacyId?: Maybe<Scalars['String']>;
  /** BAU Instance */
  legacyInstance: Scalars['String'];
  /** Legacy presentation group id */
  legacyPresentationGroupId?: Maybe<Scalars['String']>;
  legacyUserName?: Maybe<Scalars['String']>;
  type: Scalars['String'];
};

/** Region */
export type Region = {
  __typename?: 'Region';
  /** code */
  code: Scalars['String'];
  /** country */
  country?: Maybe<Country>;
  /** dma objects */
  dmas: Array<Dma>;
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

export type RegionItem = {
  __typename?: 'RegionItem';
  /** code */
  code: Scalars['String'];
  country?: Maybe<CountryItem>;
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

export type RepOrganizationList = {
  __typename?: 'RepOrganizationList';
  name: Scalars['String'];
  organizationId: Scalars['Int'];
  parentName?: Maybe<Scalars['String']>;
};

export type RepOrganizationListInput = {
  countryCode?: Maybe<Array<Scalars['String']>>;
  divisionsOnly?: Maybe<Scalars['Boolean']>;
  organizationParentId?: Maybe<Array<Scalars['Int']>>;
  organizationStatusCode: Array<Scalars['String']>;
  representationTypeCode: Array<Scalars['String']>;
  sortColumn?: Maybe<RepOrganizationListSortEnum>;
};

/** Rep organization sorting enum */
export const RepOrganizationListSortEnum = {
  Name: 'NAME',
  ParentName: 'PARENT_NAME',
} as const;

export type RepOrganizationListSortEnum =
  typeof RepOrganizationListSortEnum[keyof typeof RepOrganizationListSortEnum];
/** Rep Get Presentation by org Response */
export type RepPresentations = {
  __typename?: 'RepPresentations';
  /** Presentation objects */
  records: Array<Presentation>;
  /** Total count of presentation objects in db */
  totalCount: Scalars['Int'];
};

/** Status enum for rep's worksheet */
export const RepRequestStatus = {
  Cancelled: 'CANCELLED',
  CancelledRescheduled: 'CANCELLED_RESCHEDULED',
  ChangeRequested: 'CHANGE_REQUESTED',
  Completed: 'COMPLETED',
  Declined: 'DECLINED',
  NewMessage: 'NEW_MESSAGE',
  NewRequest: 'NEW_REQUEST',
  NotSent: 'NOT_SENT',
  OnHold: 'ON_HOLD',
  Pending: 'PENDING',
  Rescheduled: 'RESCHEDULED',
  RescheduleRequested: 'RESCHEDULE_REQUESTED',
  ReviewResponse: 'REVIEW_RESPONSE',
  Updated: 'UPDATED',
} as const;

export type RepRequestStatus = typeof RepRequestStatus[keyof typeof RepRequestStatus];
export const RepWorksheetFieldOrder = {
  DueDate: 'dueDate',
  ReceivedAt: 'receivedAt',
} as const;

export type RepWorksheetFieldOrder =
  typeof RepWorksheetFieldOrder[keyof typeof RepWorksheetFieldOrder];
export type RepWorksheetItem = {
  __typename?: 'RepWorksheetItem';
  /** Date when request was created */
  createdAt: Scalars['DateTime'];
  /** How many times a request has been forwarded to a talent */
  forwardCount?: Maybe<Scalars['Int']>;
  /** Request ID */
  id: Scalars['ID'];
  /** @deprecated Will be removed */
  project?: Maybe<RepWorksheetProject>;
  /** Response to a request */
  response?: Maybe<RepWorksheetResponse>;
  /**
   * Timezone of a Schedule
   * @deprecated Will be removed
   */
  scheduleTimeZone?: Maybe<WfTimeZone>;
  /**
   * Date of Slot
   * @deprecated Will be removed
   */
  slotDate?: Maybe<Scalars['DateTime']>;
  /** Request Status */
  status: RepRequestStatus;
  /** @deprecated Will be removed */
  talent?: Maybe<RepWorksheetTalent>;
  /** Talent's response to a request */
  talentResponse?: Maybe<RepWorksheetResponse>;
  /** Request Type */
  type: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type RepWorksheetOrganization = {
  __typename?: 'RepWorksheetOrganization';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** Talent info */
export type RepWorksheetProfile = {
  __typename?: 'RepWorksheetProfile';
  defaultSubmissionNote?: Maybe<Scalars['String']>;
  /** Talent's email */
  email?: Maybe<Scalars['String']>;
  /** Talent's ID */
  id: Scalars['Int'];
  /** Talents phone */
  phone?: Maybe<Scalars['String']>;
  profileMainDivision?: Maybe<RepWorksheetOrganization>;
  /** Talent's stage name */
  stageName: Scalars['String'];
  talentUnions?: Maybe<Array<RepWorksheetTalentUnion>>;
};

/** Project info */
export type RepWorksheetProject = {
  __typename?: 'RepWorksheetProject';
  /** Casting company */
  castingCompany?: Maybe<Scalars['String']>;
  /** Project's ID */
  id: Scalars['Int'];
  /** Project's name */
  name: Scalars['String'];
};

/** Response type for Rep Worksheet */
export type RepWorksheetResponse = {
  __typename?: 'RepWorksheetResponse';
  /** The media files sent in response */
  medias?: Maybe<Array<WfMedia>>;
  /** Response note */
  note?: Maybe<Scalars['String']>;
  repliedAt: Scalars['DateTime'];
  /** Response status */
  status: ResponseStatus;
};

export type RepWorksheetRole = {
  __typename?: 'RepWorksheetRole';
  id: Scalars['Int'];
  name: Scalars['String'];
  project: RepWorksheetProject;
};

export type RepWorksheetScheduleAddress = {
  __typename?: 'RepWorksheetScheduleAddress';
  city?: Maybe<Scalars['String']>;
  country?: Maybe<RepWorksheetScheduleAddressCountry>;
  id: Scalars['Int'];
  line1?: Maybe<Scalars['String']>;
  line2?: Maybe<Scalars['String']>;
  line3?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  otherDetail?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  state?: Maybe<RepWorksheetScheduleAddressState>;
};

export type RepWorksheetScheduleAddressCountry = {
  __typename?: 'RepWorksheetScheduleAddressCountry';
  code?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type RepWorksheetScheduleAddressState = {
  __typename?: 'RepWorksheetScheduleAddressState';
  code?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type RepWorksheetScheduleDetail = {
  __typename?: 'RepWorksheetScheduleDetail';
  address?: Maybe<RepWorksheetScheduleAddress>;
  id?: Maybe<Scalars['ID']>;
  timeZone?: Maybe<RepWorksheetTimeZone>;
};

/** Submission info */
export type RepWorksheetSubmission = {
  __typename?: 'RepWorksheetSubmission';
  /** Talent's ID */
  id: Scalars['Int'];
  /** Submission's note */
  note?: Maybe<Scalars['String']>;
  profile?: Maybe<RepWorksheetProfile>;
  role: RepWorksheetRole;
};

/** Talent info */
export type RepWorksheetTalent = {
  __typename?: 'RepWorksheetTalent';
  /** Talent's cover */
  coverUrl?: Maybe<Scalars['String']>;
  /** Talent's email */
  email?: Maybe<Scalars['String']>;
  /** Talent's ID */
  id: Scalars['Int'];
  /** Talents phone */
  phone?: Maybe<Scalars['String']>;
  /** Talent's stage name */
  stageName: Scalars['String'];
};

export type RepWorksheetTalentUnion = {
  __typename?: 'RepWorksheetTalentUnion';
  code?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** Measurement object */
export type RepWorksheetTimeZone = {
  __typename?: 'RepWorksheetTimeZone';
  abbreviation?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  standardName: Scalars['String'];
};

/** Report Media */
export type ReportMediaModel = {
  __typename?: 'ReportMediaModel';
  fileKey: Scalars['String'];
  guid: Scalars['String'];
  id: Scalars['ID'];
  mediaStorageStatus: MediaStorageStatus;
  mediaType: MediaType;
  thumbnail?: Maybe<ReportMediaModel>;
  transformation?: Maybe<MediaTransformation>;
};

/** Report Media Sides */
export type ReportMediaObjectModel = {
  __typename?: 'ReportMediaObjectModel';
  mediaObject: ReportMediaModel;
  name: Scalars['String'];
};

export type ReportPublicationSettings = {
  __typename?: 'ReportPublicationSettings';
  dmas: Array<ReportRoleDateType>;
  publicationSetting: ReportRoleDateType;
};

export type ReportRoleDateType = {
  __typename?: 'ReportRoleDateType';
  code?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type ReportRoleDateWithLocation = {
  __typename?: 'ReportRoleDateWithLocation';
  cityName?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  roleDateType?: Maybe<ReportRoleDateType>;
  startDate?: Maybe<Scalars['DateTime']>;
};

export const ReportStatusEnum = {
  Completed: 'Completed',
  Failed: 'Failed',
  InProgress: 'InProgress',
  Pending: 'Pending',
} as const;

export type ReportStatusEnum = typeof ReportStatusEnum[keyof typeof ReportStatusEnum];
export const ReportTypeEnum = {
  AgencyCallList: 'AgencyCallList',
  BookingCallList: 'BookingCallList',
  Presentation: 'Presentation',
  PresentationLog: 'PresentationLog',
  PresentationPick: 'PresentationPick',
  PresentationSizeSheets: 'PresentationSizeSheets',
  ProjectOverview: 'ProjectOverview',
  ProjectOverviewCd: 'ProjectOverviewCD',
  ProjectSubmission: 'ProjectSubmission',
  Schedule: 'Schedule',
  ScheduleReport: 'ScheduleReport',
  ScheduleSizeSheets: 'ScheduleSizeSheets',
  TalentSubmission: 'TalentSubmission',
} as const;

export type ReportTypeEnum = typeof ReportTypeEnum[keyof typeof ReportTypeEnum];
export type ReportUnion =
  | AgencyCallListReportModel
  | BookingCallListsReportModel
  | PresentationLogReportModel
  | PresentationPickReportModel
  | PresentationSizeSheetsReportModel
  | ProjectOverviewCdReportModel
  | ProjectOverviewReportModel
  | ProjectSubmissionReportModel
  | ScheduleReportModel
  | ScheduleSizeSheetsReportModel
  | TalentSubmissionModel;

/** RepresentationAgeCategory object */
export type RepresentationAgeCategory = {
  __typename?: 'RepresentationAgeCategory';
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

export type RepresentationCategory = {
  __typename?: 'RepresentationCategory';
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

export type RepresentationSystemRole = {
  __typename?: 'RepresentationSystemRole';
  code?: Maybe<Scalars['String']>;
  enabled?: Maybe<Scalars['Boolean']>;
  /** Primary ID */
  id: Scalars['ID'];
  internal?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  sortOrder?: Maybe<Scalars['Float']>;
  systemRoleId?: Maybe<Scalars['Float']>;
};

export type RepresentationType = {
  __typename?: 'RepresentationType';
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

/** Representative List Details */
export type RepresentativeList = {
  __typename?: 'RepresentativeList';
  /** Account of list creator */
  account?: Maybe<Account>;
  /** List creation date */
  created: Scalars['DateTime'];
  /** List's Creator Account */
  createdBy?: Maybe<Account>;
  /** List ID */
  id: Scalars['ID'];
  /** Representative List Type Object */
  listType?: Maybe<ListType>;
  /** Account of last list editor */
  modifiedBy?: Maybe<Account>;
  /** List Name */
  name: Scalars['String'];
  /** Organization of represe */
  organization?: Maybe<Organization>;
  /** Organization ID */
  organizationId?: Maybe<Scalars['Int']>;
  representatives: Array<Organization>;
  /** Total count of representatives */
  totalRepresentatives: Scalars['Float'];
  /** Last list updated date */
  updated?: Maybe<Scalars['DateTime']>;
};

/** Paginated result with [RepresentativeList] objects */
export type RepresentativeListPaginatedResult = {
  __typename?: 'RepresentativeListPaginatedResult';
  /** List of RepresentativeList objects */
  objects: Array<RepresentativeList>;
  /** Current page */
  page: Scalars['Int'];
  /** Total count of rows */
  totalCount: Scalars['Int'];
  /** Total pages */
  totalPages: Scalars['Int'];
};

/** Representative search result */
export type RepresentativeSearchResult = {
  __typename?: 'RepresentativeSearchResult';
  /** List of representatives */
  organizations: Array<Organization>;
  /** Total records count */
  totalCount: Scalars['Int'];
};

/** Enum of Represented Talents Submissions Types */
export const RepsSubmissionTypeEnum = {
  Selected: 'SELECTED',
  Submitted: 'SUBMITTED',
} as const;

export type RepsSubmissionTypeEnum =
  typeof RepsSubmissionTypeEnum[keyof typeof RepsSubmissionTypeEnum];
export type RepsWorksheetFilters = {
  __typename?: 'RepsWorksheetFilters';
  organizations?: Maybe<Array<OrganizationFilter>>;
  profiles?: Maybe<Array<ProfileFilter>>;
  projects?: Maybe<Array<ProjectFilter>>;
};

export type RepsWorksheetFiltersArgs = {
  dueDateFrom?: Maybe<Scalars['DateTime']>;
  dueDateTo?: Maybe<Scalars['DateTime']>;
  fromOrgIds?: Maybe<Array<Scalars['Int']>>;
  profileIds?: Maybe<Array<Scalars['Int']>>;
  projectIds?: Maybe<Array<Scalars['Int']>>;
  receivedFrom?: Maybe<Scalars['DateTime']>;
  receivedTo?: Maybe<Scalars['DateTime']>;
  responseStatus?: Maybe<ResponseStatus>;
  slotDateFrom?: Maybe<Scalars['DateTime']>;
  slotDateTo?: Maybe<Scalars['DateTime']>;
  statuses?: Maybe<Array<RepRequestStatus>>;
  talentResponseStatus?: Maybe<ResponseStatus>;
  type?: Maybe<RequestType>;
};

export type RepsWorksheetItem = {
  __typename?: 'RepsWorksheetItem';
  /** Date when request was created */
  createdAt: Scalars['DateTime'];
  dueDate?: Maybe<Scalars['DateTime']>;
  /** How many times a request has been forwarded to a talent */
  forwardCount?: Maybe<Scalars['Int']>;
  /** Request ID */
  id: Scalars['ID'];
  lastMessageId?: Maybe<Scalars['String']>;
  /** Response to a request */
  response?: Maybe<RepWorksheetResponse>;
  /** Schedule */
  schedule?: Maybe<RepWorksheetScheduleDetail>;
  /** Date of Slot */
  slotDate?: Maybe<Scalars['DateTime']>;
  /** Request Status */
  status: RepRequestStatus;
  submission?: Maybe<RepWorksheetSubmission>;
  /** Talent's response to a request */
  talentResponse?: Maybe<RepWorksheetResponse>;
  /** Request Type */
  type: Scalars['String'];
  unreadMessageCount?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type RepsWorksheetItemPagedList = {
  __typename?: 'RepsWorksheetItemPagedList';
  data: Array<RepsWorksheetItem>;
  page: Scalars['Int'];
  totalCount: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type Request = {
  __typename?: 'Request';
  /** Request ID */
  id: Scalars['ID'];
  lastActionAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  sentAt?: Maybe<Scalars['DateTime']>;
  /** Request Type */
  type: RequestType;
};

export const RequestMediaType = {
  Audio: 'AUDIO',
  Pdf: 'PDF',
  Photo: 'PHOTO',
  Video: 'VIDEO',
} as const;

export type RequestMediaType = typeof RequestMediaType[keyof typeof RequestMediaType];
export type RequestPagedList = {
  __typename?: 'RequestPagedList';
  data: Array<Request>;
  page: Scalars['Int'];
  totalCount: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export const RequestSendTo = {
  NewAndPending: 'NEW_AND_PENDING',
  OnlyNew: 'ONLY_NEW',
} as const;

export type RequestSendTo = typeof RequestSendTo[keyof typeof RequestSendTo];
export const RequestStatus = {
  Cancelled: 'CANCELLED',
  NotSent: 'NOT_SENT',
  Pending: 'PENDING',
} as const;

export type RequestStatus = typeof RequestStatus[keyof typeof RequestStatus];
export const RequestStatusUnion = {
  Answered: 'ANSWERED',
  Cancelled: 'CANCELLED',
  CancelledRescheduled: 'CANCELLED_RESCHEDULED',
  ChangeRequested: 'CHANGE_REQUESTED',
  Confirmed: 'CONFIRMED',
  Declined: 'DECLINED',
  MediaAdded: 'MEDIA_ADDED',
  NotSent: 'NOT_SENT',
  OnHold: 'ON_HOLD',
  Pending: 'PENDING',
  Rescheduled: 'RESCHEDULED',
  RescheduleRequested: 'RESCHEDULE_REQUESTED',
  Updated: 'UPDATED',
} as const;

export type RequestStatusUnion =
  typeof RequestStatusUnion[keyof typeof RequestStatusUnion];
export type RequestSubmission = {
  __typename?: 'RequestSubmission';
  /** Request ID */
  id: Scalars['ID'];
  /** Submission ID */
  submissionId: Scalars['ID'];
};

export const RequestType = {
  AskQuestion: 'ASK_QUESTION',
  Audition: 'AUDITION',
  Callback: 'CALLBACK',
  Media: 'MEDIA',
  RosterInvitation: 'ROSTER_INVITATION',
} as const;

export type RequestType = typeof RequestType[keyof typeof RequestType];
export type RequestUnion = AskQuestionRequest | MediaRequest;

export const ResponseStatus = {
  Answered: 'ANSWERED',
  ChangeRequested: 'CHANGE_REQUESTED',
  Confirmed: 'CONFIRMED',
  Declined: 'DECLINED',
  MediaAdded: 'MEDIA_ADDED',
  RescheduleRequested: 'RESCHEDULE_REQUESTED',
} as const;

export type ResponseStatus = typeof ResponseStatus[keyof typeof ResponseStatus];
/** Role object */
export type Role = {
  __typename?: 'Role';
  /** Ages of roles showing in years */
  ageInYears: Scalars['Boolean'];
  /** Role age max month */
  ageMaxMonth?: Maybe<Scalars['Float']>;
  /** Role age min month */
  ageMinMonth?: Maybe<Scalars['Float']>;
  /** Age range */
  ageRange?: Maybe<Scalars['String']>;
  /** Number of intended talents */
  backgroundTalentIntended?: Maybe<Scalars['Int']>;
  /** Is close submissions */
  closeSubmissions?: Maybe<Scalars['Boolean']>;
  /** Role compensations */
  compensations?: Maybe<Array<RoleCompensation>>;
  countOfPairedRepsAndCB: RoleCountOfPairedRepsAndCb;
  /** Created Time */
  created?: Maybe<Scalars['DateTime']>;
  /** Currency Object */
  currency?: Maybe<Currency>;
  /** Role description */
  description: Scalars['String'];
  /** Displayed Role Ethnic Appearance */
  displayedRoleEthnicAppearance: Scalars['String'];
  /** Displayed Role Ethnic Appearance */
  displayedRoleGenderAppearance: Scalars['String'];
  /** Displayed Role Union */
  displayedRoleUnion: Scalars['String'];
  /** Role Ethnic Appearance */
  ethnicAppearance: Array<EthnicAppearance>;
  /** Gender  */
  genderAppearance?: Maybe<Array<GenderAppearance>>;
  /** Role public GUID */
  guid?: Maybe<Scalars['String']>;
  /** Role Primary ID */
  id: Scalars['ID'];
  /** Role internal name */
  internalName?: Maybe<Scalars['String']>;
  /** Is role published after others */
  isNew?: Maybe<Scalars['Boolean']>;
  isReadOnlyAccess: Scalars['Boolean'];
  /** Stores information about the date when the Project Creator user last saw submissions */
  lastViewedSubmissionPage?: Maybe<Scalars['DateTime']>;
  /** DMA */
  location?: Maybe<Dma>;
  /** Returns list of role date with location */
  locationDates?: Maybe<Array<RoleDateWithLocation>>;
  /** Location ID */
  locationId?: Maybe<Scalars['ID']>;
  /** Role name */
  name: Scalars['String'];
  /** Order of appearance on which sequence role will be displayed */
  orderOfAppearance?: Maybe<Scalars['Int']>;
  /** Organizationwise submissions for the role */
  organizationSubmissions: Array<Submission>;
  /** Paid Type */
  paidType?: Maybe<PaidType>;
  /** Role Photos */
  photos?: Maybe<Array<RoleMedia>>;
  /** Project */
  project: Project;
  /** Role project ID */
  projectId: Scalars['ID'];
  /** Project name */
  projectName?: Maybe<Scalars['String']>;
  projectReleaseLocations: Array<Dma>;
  projectType?: Maybe<ProjectType>;
  /** Project Unions */
  projectUnion?: Maybe<Array<ProjectUnionDetails>>;
  /** Publication settings for the role */
  publicationSettings: Array<RolePublicationSetting>;
  /** Role rate */
  rate?: Maybe<Scalars['Float']>;
  /** Role max rate */
  rateMax?: Maybe<Scalars['Float']>;
  /** Rate note */
  rateNote?: Maybe<Scalars['String']>;
  /** Rate Per Object */
  ratePer?: Maybe<RatePerType>;
  /** Rate summary */
  rateSummary?: Maybe<Scalars['String']>;
  /** Is rate type */
  rateType: Scalars['Boolean'];
  repSelectedSubmissionsCount: Scalars['Int'];
  repSubmittedSubmissionsCount: Scalars['Int'];
  /** The media request instruction */
  requestMediaInstruction: Scalars['String'];
  requestMediaTypes: Array<Scalars['String']>;
  /** Ethnicity / nationality description */
  roleEthnicityNationality: Scalars['String'];
  /** Info about paired reps orgs */
  rolePairedOrganizations: RoleOrganizationPairPaginatedResult;
  /** Role Parent ID */
  roleParentId?: Maybe<Scalars['ID']>;
  /** Role Previous Status */
  rolePreviousStatus?: Maybe<RoleStatus>;
  /** Role published date when role become ACTIVE Or REQUEST_ADDITIONAL_SUBMISSIONS */
  rolePublishedAt?: Maybe<Scalars['DateTime']>;
  /** Role Status */
  roleStatus?: Maybe<RoleStatus>;
  /** Role Type */
  roleType?: Maybe<RoleType>;
  /** Role Union */
  roleUnion?: Maybe<RoleUnion>;
  /** Is rush call */
  rushCall: Scalars['Boolean'];
  /** Is scale */
  scale: Scalars['Boolean'];
  /** Scale modifier ID */
  scaleModifierId?: Maybe<Scalars['ID']>;
  /** Sexy description */
  sexualSituationDescription: Scalars['String'];
  /** Sexual situations */
  sexualSituations?: Maybe<Array<SexualSituation>>;
  /** Role Sides */
  sides?: Maybe<Array<RoleMedia>>;
  /** Role Sides Visibility */
  sidesVisibility?: Maybe<RoleSidesVisibility>;
  /** Role skills */
  skills: Array<Skill>;
  /** Spot */
  spot?: Maybe<Scalars['String']>;
  submissionCount: Array<RoleSubmissionCount>;
  /** The submission due date */
  submissionDueDate?: Maybe<Scalars['DateTime']>;
  /** The submission instruction */
  submissionInstruction: Scalars['String'];
  /**
   * Submissions for the role. Fetches all the submissions for a role filtered by
   * the scheduled criteria for all users which system role are not equal to
   * Agent(reps), otherwise submissions will be filtered by profile organization
   * participation id.
   */
  submissions: Array<Submission>;
  /** Project system role id */
  systemRoleId?: Maybe<Scalars['ID']>;
  /** TimeZone */
  timeZone?: Maybe<TimeZone>;
  /** Wardrobe */
  wardrobe?: Maybe<Scalars['String']>;
  /** Work requirement */
  workRequirement: Scalars['String'];
};

/** Role object */
export type RoleOrganizationSubmissionsArgs = {
  organizationId?: Maybe<Scalars['Float']>;
};

/** Role object */
export type RoleRolePairedOrganizationsArgs = {
  pageInput?: Maybe<PageInput>;
};

/** Role object */
export type RoleSidesArgs = {
  checkSidesVisibility?: Maybe<Scalars['Boolean']>;
};

/** Role object */
export type RoleSubmissionsArgs = {
  auditionScheduled?: Maybe<Scalars['Boolean']>;
  callbackScheduled?: Maybe<Scalars['Boolean']>;
  profileTypeCode?: Maybe<Scalars['String']>;
  scheduled?: Maybe<Scalars['Boolean']>;
  statusCode?: Maybe<Array<Scalars['String']>>;
};

/** Role compensation object */
export type RoleCompensation = {
  __typename?: 'RoleCompensation';
  compensation: Compensation;
  otherCompensation?: Maybe<Scalars['String']>;
  roleCompensationId: Scalars['Float'];
};

/** Input type for role compensation */
export type RoleCompensationInput = {
  /** Role compensation type code */
  compensationCode: Scalars['String'];
  /** Role other compensation description */
  otherCompensation?: Maybe<Scalars['String']>;
};

/** Role Paired orgs info */
export type RoleCountOfPairedRepsAndCb = {
  __typename?: 'RoleCountOfPairedRepsAndCB';
  /** Is current role shared with Casting Billboard users(talents) */
  isSharedWithCB: Scalars['Boolean'];
  /**
   * Represents the Count of paired reps organizations for current published role,
   * or count of potentially paired reps organizations for not published role
   */
  repsOrgs: Scalars['Int'];
};

/** Input type for Role creation */
export type RoleCreateInput = {
  ageInYears?: Maybe<Scalars['Boolean']>;
  ageMaxMonths?: Maybe<Scalars['Int']>;
  ageMinMonths?: Maybe<Scalars['Int']>;
  ageMinor?: Maybe<Scalars['Int']>;
  backgroundTalentIntended?: Maybe<Scalars['Float']>;
  closeSubmissions?: Maybe<Scalars['Boolean']>;
  compensations?: Maybe<Array<RoleCompensationInput>>;
  /** CODE of Currency object */
  currencyCode?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  /** List of Ethnic Appearances associated with role */
  ethnicAppearances?: Maybe<Array<Scalars['String']>>;
  internalName?: Maybe<Scalars['String']>;
  locationCode?: Maybe<Scalars['String']>;
  locationDateInformations?: Maybe<Array<RoleDateWithLocationInput>>;
  name: Scalars['String'];
  /** Paid Type CODE */
  paidTypeCode?: Maybe<Scalars['String']>;
  /** RoleMediaInput array of role media input for add/ update the media along with the relevant role */
  photos?: Maybe<Array<RoleMediaInput>>;
  projectId: Scalars['ID'];
  /** Rate */
  rate?: Maybe<Scalars['Float']>;
  /** rate max */
  rateMax?: Maybe<Scalars['Float']>;
  rateNote?: Maybe<Scalars['String']>;
  /** CODE of RatePer object */
  ratePerCode?: Maybe<Scalars['String']>;
  rateSummary?: Maybe<Scalars['String']>;
  rateType?: Maybe<Scalars['Boolean']>;
  /** List of Representative List Ids */
  representativesLists?: Maybe<Array<Scalars['Float']>>;
  requestMediaInstruction?: Maybe<Scalars['String']>;
  requestMediaTypeCodes?: Maybe<Array<Scalars['String']>>;
  roleEthnicityNationality?: Maybe<Scalars['String']>;
  roleGenderCodes?: Maybe<Array<Scalars['String']>>;
  roleParentId?: Maybe<Scalars['ID']>;
  /** List of Publication Setting Input */
  rolePublicationSettings?: Maybe<Array<RolePublicationSettingInput>>;
  /** Roles Side Visibility */
  roleSidesVisibilityCode?: Maybe<Scalars['String']>;
  roleSkills?: Maybe<Array<RoleSkillInput>>;
  roleStatusCode: Scalars['String'];
  roleType: RoleTypeInput;
  /** Role Union CODE */
  roleUnionCode?: Maybe<Scalars['String']>;
  rushCall?: Maybe<Scalars['Boolean']>;
  /** Scale */
  scale?: Maybe<Scalars['Boolean']>;
  sexualSituationCodes?: Maybe<Array<Scalars['String']>>;
  sexualSituationDescription?: Maybe<Scalars['String']>;
  sides?: Maybe<Array<RoleMediaInput>>;
  spot?: Maybe<Scalars['String']>;
  submissionDueDate?: Maybe<Scalars['DateTime']>;
  submissionInstruction?: Maybe<Scalars['String']>;
  /** Time Zone Code */
  timeZoneCode?: Maybe<Scalars['String']>;
  wardrobe?: Maybe<Scalars['String']>;
  workRequirement?: Maybe<Scalars['String']>;
};

/** Role Date type object */
export type RoleDateType = {
  __typename?: 'RoleDateType';
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

/** Role Date with Location object */
export type RoleDateWithLocation = {
  __typename?: 'RoleDateWithLocation';
  cityName?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  /** RoleDateLocation Primary ID */
  id: Scalars['ID'];
  /** Role Date Type */
  roleDateType?: Maybe<RoleDateType>;
  startDate?: Maybe<Scalars['DateTime']>;
};

/** Role's Date with Location input type */
export type RoleDateWithLocationInput = {
  /** ID of RoleDate object. Used for update existing date. */
  dateId?: Maybe<Scalars['ID']>;
  /** CODE of DateType enum */
  dateTypeCode: Scalars['String'];
  /** End date */
  endDate?: Maybe<Scalars['DateTime']>;
  /** Name of City */
  locationName?: Maybe<Scalars['String']>;
  /** Start date */
  startDate?: Maybe<Scalars['DateTime']>;
};

/** Role media object */
export type RoleMedia = {
  __typename?: 'RoleMedia';
  /** ID of role and media objects relation */
  id: Scalars['ID'];
  /** Is this sides media */
  isSides: Scalars['Boolean'];
  /** Media object */
  mediaObject: Media;
  /** Name */
  name?: Maybe<Scalars['String']>;
  /** ID of role and media objects relation */
  roleMediaId: Scalars['Int'];
  /** Role Side Url */
  url?: Maybe<Scalars['String']>;
};

/** Input type for role media */
export type RoleMediaInput = {
  /** Is this sides media */
  isSides: Scalars['Boolean'];
  /** Media ID */
  mediaId: Scalars['Float'];
  /** Name */
  name?: Maybe<Scalars['String']>;
};

/** Info about paired (with role) reps org */
export type RoleOrganizationPair = {
  __typename?: 'RoleOrganizationPair';
  /** Reps Organization */
  organization: Organization;
  organizationHasSubmissionsToRole: Scalars['Boolean'];
};

/** Paginated result with [RoleOrganizationPair] objects */
export type RoleOrganizationPairPaginatedResult = {
  __typename?: 'RoleOrganizationPairPaginatedResult';
  /** List of RoleOrganizationPair objects */
  objects: Array<RoleOrganizationPair>;
  /** Current page */
  page: Scalars['Int'];
  /** Total count of rows */
  totalCount: Scalars['Int'];
  /** Total pages */
  totalPages: Scalars['Int'];
};

/** Role Previous Status */
export type RolePreviousStatus = {
  __typename?: 'RolePreviousStatus';
  /** Role Previous Status */
  previousRoleStatus?: Maybe<RoleStatus>;
  roleId: Scalars['Float'];
};

export const RoleProjectKeywordSearchEnum = {
  All: 'ALL',
  ProjectName: 'PROJECT_NAME',
  ProjectOrRoleDescription: 'PROJECT_OR_ROLE_DESCRIPTION',
  RoleName: 'ROLE_NAME',
} as const;

export type RoleProjectKeywordSearchEnum =
  typeof RoleProjectKeywordSearchEnum[keyof typeof RoleProjectKeywordSearchEnum];
/** Role Publication setting */
export type RolePublicationSetting = {
  __typename?: 'RolePublicationSetting';
  /** List of Dma objects */
  dmas?: Maybe<Array<Dma>>;
  /** Publication Setting object */
  publicationSetting: PublicationSetting;
  /** List of Representation Age Categories objects */
  repAgeCategories?: Maybe<Array<RepresentationAgeCategory>>;
  /** List of Representation Categories objects */
  repCategories?: Maybe<Array<RepresentationCategory>>;
  /** List of Representation Type objects */
  repTypes?: Maybe<Array<RepresentationType>>;
  /** Representative List ID */
  representativeListIds: Array<Scalars['ID']>;
};

/** Publication Role setting */
export type RolePublicationSettingInput = {
  /** List of DMAs CODEs for talents */
  dmas?: Maybe<Array<Scalars['String']>>;
  /** Publication Setting CODE */
  publicationSetting: Scalars['String'];
  /** List of Representation Age Categories CODEs */
  repAgeCategories?: Maybe<Array<Scalars['String']>>;
  /** List of Representation Categories CODEs */
  repCategories?: Maybe<Array<Scalars['String']>>;
  /** List of Representation Type CODEs */
  repTypes?: Maybe<Array<Scalars['String']>>;
  /** Representative IDs */
  representativeIds?: Maybe<Array<Scalars['Int']>>;
  /** Representative List ID Selected */
  representativeListId?: Maybe<Scalars['Int']>;
};

/** Role search result object */
export type RoleSearchResult = {
  __typename?: 'RoleSearchResult';
  /** Search role list */
  roles: Array<Role>;
  /** Result total count */
  totalCount: Scalars['Float'];
};

/** Role Sides Visibility object */
export type RoleSidesVisibility = {
  __typename?: 'RoleSidesVisibility';
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

/** Input type for skill */
export type RoleSkillInput = {
  /** Skill CODE */
  skillCode: Scalars['String'];
};

/** Role Status object */
export type RoleStatus = {
  __typename?: 'RoleStatus';
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

/** Role status codes options */
export const RoleStatusCodes = {
  Active: 'ACTIVE',
  Archived: 'ARCHIVED',
  ArchiveInProgress: 'ARCHIVE_IN_PROGRESS',
  EditToActiveRole: 'EDIT_TO_ACTIVE_ROLE',
  Internal: 'INTERNAL',
  ModificationsComplete: 'MODIFICATIONS_COMPLETE',
  ModificationsRequested: 'MODIFICATIONS_REQUESTED',
  NewRolePending: 'NEW_ROLE_PENDING',
  NotYetPublished: 'NOT_YET_PUBLISHED',
  Rejected: 'REJECTED',
  RequestingAdditionalSubmissions: 'REQUESTING_ADDITIONAL_SUBMISSIONS',
  RestoreInProgress: 'RESTORE_IN_PROGRESS',
  SubmissionsClosed: 'SUBMISSIONS_CLOSED',
} as const;

export type RoleStatusCodes = typeof RoleStatusCodes[keyof typeof RoleStatusCodes];
/** Role status filter options */
export const RoleStatusFilter = {
  Active: 'Active',
  All: 'All',
  Archived: 'Archived',
  Published: 'Published',
  UnderReview: 'UnderReview',
} as const;

export type RoleStatusFilter = typeof RoleStatusFilter[keyof typeof RoleStatusFilter];
export type RoleSubmissionCount = {
  __typename?: 'RoleSubmissionCount';
  count: Scalars['Int'];
  roleId: Scalars['Int'];
  submissionStatus: SubmissionStatus;
};

/** Input type for Role Talents */
export type RoleTalent = {
  /** Role Id */
  roleId: Scalars['ID'];
  scheduleSelectInput?: Maybe<SchedulesSelectInput>;
  /** List of CODE of Selected Tile Schema */
  selectedTileSchemaCodes: Array<Scalars['String']>;
  /** List of Selected Tile Schemes */
  selectedTileSchemes?: Maybe<Array<Scalars['Float']>>;
  /** No. of talents in each slot */
  talentsInSlot: Scalars['Float'];
};

/** Role Target object */
export type RoleTarget = {
  __typename?: 'RoleTarget';
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

export const RoleTargetsEnum = {
  Background: 'BACKGROUND',
  Principal: 'PRINCIPAL',
} as const;

export type RoleTargetsEnum = typeof RoleTargetsEnum[keyof typeof RoleTargetsEnum];
/** RoleType  object */
export type RoleType = {
  __typename?: 'RoleType';
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  projectType: ProjectType;
  roleTarget: RoleTarget;
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

export type RoleTypeFilterInput = {
  keys?: Maybe<FilterInput>;
  projectType?: Maybe<FilterInput>;
  roleTarget?: Maybe<FilterInput>;
};

/** Input type for role type */
export type RoleTypeInput = {
  /** Project Type CODE */
  projectTypeCode: Scalars['String'];
  /** Role target CODE */
  roleTargetCode: Scalars['String'];
  /** Role type CODE */
  roleTypeCode: Scalars['String'];
};

/** RoleUnion object */
export type RoleUnion = {
  __typename?: 'RoleUnion';
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

/** Input type for Role update */
export type RoleUpdateInput = {
  ageInYears?: Maybe<Scalars['Boolean']>;
  ageMaxMonths?: Maybe<Scalars['Int']>;
  ageMinMonths?: Maybe<Scalars['Int']>;
  backgroundTalentIntended?: Maybe<Scalars['Float']>;
  closeSubmissions?: Maybe<Scalars['Boolean']>;
  compensations?: Maybe<Array<RoleCompensationInput>>;
  currencyCode?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  /** List of Ethnic Appearances associated with role */
  ethnicAppearances?: Maybe<Array<Scalars['String']>>;
  internalName?: Maybe<Scalars['String']>;
  locationCode?: Maybe<Scalars['String']>;
  locationDateInformations?: Maybe<Array<RoleDateWithLocationInput>>;
  name?: Maybe<Scalars['String']>;
  paidTypeCode?: Maybe<Scalars['String']>;
  /** UpdateRoleMediaInput array of role media input for add/ update the media along with the relevant role */
  photos?: Maybe<Array<UpdateRoleMediaInput>>;
  projectId?: Maybe<Scalars['ID']>;
  rate?: Maybe<Scalars['Float']>;
  rateMax?: Maybe<Scalars['Float']>;
  rateNote?: Maybe<Scalars['String']>;
  ratePerCode?: Maybe<Scalars['String']>;
  rateSummary?: Maybe<Scalars['String']>;
  rateType?: Maybe<Scalars['Boolean']>;
  requestMediaInstruction?: Maybe<Scalars['String']>;
  requestMediaTypeCodes?: Maybe<Array<Scalars['String']>>;
  roleAccount?: Maybe<Array<Scalars['ID']>>;
  roleEthnicityNationality?: Maybe<Scalars['String']>;
  roleGenderCodes?: Maybe<Array<Scalars['String']>>;
  roleId: Scalars['ID'];
  roleOrganization?: Maybe<Array<Scalars['ID']>>;
  roleParentId?: Maybe<Scalars['ID']>;
  rolePublicationSetting?: Maybe<RolePublicationSettingInput>;
  /** List of Publication Setting Input */
  rolePublicationSettings?: Maybe<Array<RolePublicationSettingInput>>;
  /** Role Sides Visibility */
  roleSidesVisibilityCode?: Maybe<Scalars['String']>;
  roleSkills?: Maybe<Array<RoleSkillInput>>;
  roleStatusCode?: Maybe<Scalars['String']>;
  roleType?: Maybe<RoleTypeInput>;
  roleUnionCode?: Maybe<Scalars['String']>;
  rushCall?: Maybe<Scalars['Boolean']>;
  scale?: Maybe<Scalars['Boolean']>;
  sexualSituationCodes?: Maybe<Array<Scalars['String']>>;
  sexualSituationDescription?: Maybe<Scalars['String']>;
  sides?: Maybe<Array<UpdateRoleMediaInput>>;
  spot?: Maybe<Scalars['String']>;
  submissionDueDate?: Maybe<Scalars['DateTime']>;
  submissionInstruction?: Maybe<Scalars['String']>;
  /** Time Zone Code */
  timeZoneCode?: Maybe<Scalars['String']>;
  wardrobe?: Maybe<Scalars['String']>;
  workRequirement?: Maybe<Scalars['String']>;
};

export type RoleUpdateWardrobeInput = {
  roleId: Scalars['Int'];
  wardrobe: Scalars['String'];
};

/** Role for Workflow */
export type RoleWorkflow = {
  __typename?: 'RoleWorkflow';
  ageInYears: Scalars['Boolean'];
  ageMax?: Maybe<Scalars['Int']>;
  ageMin?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  /** Displayed role age range */
  displayedRoleAgeRange?: Maybe<Scalars['String']>;
  /** Displayed role ethnic appearance */
  displayedRoleEthnicAppearance?: Maybe<Scalars['String']>;
  /** Displayed role genders */
  displayedRoleGenders?: Maybe<Scalars['String']>;
  /** Displayed role union */
  displayedRoleUnion?: Maybe<Scalars['String']>;
  /** Ethnic Appearances */
  ethnicAppearance?: Maybe<Array<EthnicAppearance>>;
  /** Gender Appearances */
  genderAppearance?: Maybe<Array<GenderAppearance>>;
  guid?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  locationDates?: Maybe<Array<RoleDateWithLocation>>;
  name: Scalars['String'];
  project?: Maybe<Project>;
  publicationSettingIds?: Maybe<Array<Scalars['Int']>>;
  rate?: Maybe<Scalars['Float']>;
  rateMax?: Maybe<Scalars['Float']>;
  ratePerType?: Maybe<RatePerType>;
  /** Rate summary */
  rateSummary?: Maybe<Scalars['String']>;
  roleStatus: RoleStatus;
  roleType: RoleType;
  /** Sexual Situations  */
  sexualSituations?: Maybe<Array<SexualSituation>>;
  sides?: Maybe<Array<RoleMedia>>;
  sidesVisibility?: Maybe<RoleSidesVisibility>;
  /** Wardrobe */
  wardrobe?: Maybe<Scalars['String']>;
};

/** Context object for FFY artist object */
export type RolesFitForYouArtistContext = {
  __typename?: 'RolesFitForYouArtistContext';
  id: Scalars['Float'];
  manageEmailSettingsUrl: Scalars['String'];
  name: Scalars['String'];
  notificationSettingsURL: Scalars['String'];
  subjectRolePart: Scalars['String'];
  toProfileId?: Maybe<Scalars['Int']>;
};

/** Casting Company */
export type RolesFitForYouCastingCompanyContext = {
  __typename?: 'RolesFitForYouCastingCompanyContext';
  logo?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** Context object for roles fits for artist */
export type RolesFitForYouContext = {
  __typename?: 'RolesFitForYouContext';
  artists: Array<RolesFitForYouArtistContext>;
  project: RolesFitForYouProjectContext;
  roles: Array<RolesFitForYouRoleContext>;
};

/** Context object for FFY project object */
export type RolesFitForYouProjectContext = {
  __typename?: 'RolesFitForYouProjectContext';
  castingCompany: RolesFitForYouCastingCompanyContext;
  id: Scalars['Float'];
  name: Scalars['String'];
  shootDate: Scalars['String'];
  type: Scalars['String'];
  union: Scalars['String'];
  url: Scalars['String'];
};

/** Context object for FFY role object */
export type RolesFitForYouRoleContext = {
  __typename?: 'RolesFitForYouRoleContext';
  ageRange: Scalars['String'];
  buttonText: Scalars['String'];
  buttonURL: Scalars['String'];
  description: Scalars['String'];
  ethnicAppearance: Scalars['String'];
  genderAppearance: Scalars['String'];
  id: Scalars['Float'];
  name: Scalars['String'];
  rateSummary: Scalars['String'];
  sexualSituations: Scalars['String'];
  type: Scalars['String'];
  union?: Maybe<Scalars['String']>;
};

export type RolesPublishedCastingCompanyContext = {
  __typename?: 'RolesPublishedCastingCompanyContext';
  castingAssistant: Scalars['String'];
  castingAssociate: Scalars['String'];
  castingDirector: Scalars['String'];
  logo: Scalars['String'];
  name: Scalars['String'];
};

/** Contex object for roles published notification */
export type RolesPublishedContext = {
  __typename?: 'RolesPublishedContext';
  /** Count of additional roles not in newRoles or roles fields */
  additionalRolesCount?: Maybe<Scalars['Float']>;
  buttonURL: Scalars['String'];
  manageEmailSettingsUrl: Scalars['String'];
  messageForReps: Scalars['String'];
  /** New published roles within the project */
  newRoles?: Maybe<Array<RolesPublishedRoleContext>>;
  project: RolesPublishedProjectContext;
  /** Published roles(currently or previously) which match divisions */
  roles: Array<RolesPublishedRoleContext>;
};

export type RolesPublishedContextNotificationContextAndRecipient = {
  __typename?: 'RolesPublishedContextNotificationContextAndRecipient';
  context: RolesPublishedContext;
  to?: Maybe<Scalars['String']>;
  toAccountId?: Maybe<Scalars['Int']>;
  toOrgId?: Maybe<Scalars['Int']>;
  toProfileId?: Maybe<Scalars['Int']>;
};

export type RolesPublishedCreativeTeamContext = {
  __typename?: 'RolesPublishedCreativeTeamContext';
  adAgency: Scalars['String'];
  director: Scalars['String'];
  executiveProducer: Scalars['String'];
  photographer: Scalars['String'];
  studio: Scalars['String'];
  writer: Scalars['String'];
};

export type RolesPublishedProjectContext = {
  __typename?: 'RolesPublishedProjectContext';
  additionalProvisionsMessage: Scalars['String'];
  attachments: Array<Scalars['String']>;
  castingCompany: RolesPublishedCastingCompanyContext;
  conflicts: Scalars['String'];
  creativeTeam: RolesPublishedCreativeTeamContext;
  name: Scalars['String'];
  projectNotesMessage: Scalars['String'];
  projectSynopsisMessage: Scalars['String'];
  type: Scalars['String'];
  unions: Scalars['String'];
  usageMessage: Scalars['String'];
};

export type RolesPublishedRoleContext = {
  __typename?: 'RolesPublishedRoleContext';
  roleDetails: RolesPublishedRoleDetailsContext;
  roleName: Scalars['String'];
};

export type RolesPublishedRoleDetailsContext = {
  __typename?: 'RolesPublishedRoleDetailsContext';
  ageRange: Scalars['String'];
  ethnicAppearance: Scalars['String'];
  genderAppearance: Scalars['String'];
  type: Scalars['String'];
};

/** 'Roster Invitation Request' type */
export type RosterInvitationRequest = {
  __typename?: 'RosterInvitationRequest';
  /** Request's ID */
  id: Scalars['ID'];
  /** Should be email address of invitor included into the request or not */
  includeOwnEmail: Scalars['Boolean'];
  invitations: Array<RosterTalentInvitation>;
  /** Note for the invited talent */
  note?: Maybe<Scalars['String']>;
};

/** Create Roster Invitation input */
export type RosterInvitationRequestInput = {
  includeOwnEmail: Scalars['Boolean'];
  invitations: Array<RosterInvitationTalentInput>;
  note?: Maybe<Scalars['String']>;
};

/** Roster Invitation request status */
export const RosterInvitationRequestStatus = {
  Expired: 'EXPIRED',
  InRoster: 'IN_ROSTER',
  Pending: 'PENDING',
} as const;

export type RosterInvitationRequestStatus =
  typeof RosterInvitationRequestStatus[keyof typeof RosterInvitationRequestStatus];
export type RosterInvitationTalentHistoryFilterInput = {
  /** Filter by email */
  email: Scalars['String'];
  /** Filter by name */
  name: Scalars['String'];
};

export type RosterInvitationTalentInput = {
  email: Scalars['String'];
  name: Scalars['String'];
};

/** 'Roster Talent Invitation' type */
export type RosterTalentInvitation = {
  __typename?: 'RosterTalentInvitation';
  /** Invitation created date */
  createdAt: Scalars['DateTime'];
  /** Talent's email */
  email: Scalars['String'];
  /** Invitation expiration date */
  expiredAt: Scalars['DateTime'];
  /** Talent's invitation ID */
  id: Scalars['ID'];
  /** Talent's name */
  name: Scalars['String'];
  /** ID of organization which invited talent to the roster */
  organizationId: Scalars['Int'];
  /** Invitation profile Id */
  profileId?: Maybe<Scalars['Int']>;
  /** Current Profile Status */
  profileStatusCode?: Maybe<Scalars['String']>;
  /** Status of talent's invitation */
  status: RosterInvitationRequestStatus;
  /** Generated token for invited talent */
  token: Scalars['String'];
};

export type RosterTalentInvitationPagedList = {
  __typename?: 'RosterTalentInvitationPagedList';
  data: Array<RosterTalentInvitation>;
  page: Scalars['Int'];
  totalCount: Scalars['Int'];
  totalPages: Scalars['Int'];
};

/** Schedule */
export type Schedule = {
  __typename?: 'Schedule';
  /** Primary ID */
  id: Scalars['ID'];
  /** canceled status */
  isCanceled?: Maybe<Scalars['Boolean']>;
  /** Updated Date */
  lastUpdated?: Maybe<Scalars['DateTime']>;
  /** Name */
  name?: Maybe<Scalars['String']>;
  /** Schedule Date */
  scheduleDate?: Maybe<Scalars['DateTime']>;
  /** scheduleType */
  scheduleType?: Maybe<Scalars['String']>;
  statusCounts: ScheduleInviteResponseStatusCounts;
  /** Submissions Count */
  submissionCount?: Maybe<Scalars['BigInt']>;
};

/** Schedule Details */
export type ScheduleDetail = {
  __typename?: 'ScheduleDetail';
  /** Schedule Address */
  address?: Maybe<Address>;
  /** Calendar Type */
  calendarType?: Maybe<CalendarType>;
  /** Schedule Date */
  date?: Maybe<Scalars['DateTime']>;
  hasScheduledRepsSubmissions: Scalars['Boolean'];
  /** Schedule Id */
  id?: Maybe<Scalars['ID']>;
  isLocationHidden: Scalars['Boolean'];
  /** Schedule Name */
  name: Scalars['String'];
  /** Note */
  note: Scalars['String'];
  /** Project Id */
  projectId?: Maybe<Scalars['Int']>;
  /** Schedule Id */
  scheduleId?: Maybe<Scalars['ID']>;
  scheduleInviteRequestNotes: ScheduleInviteRequestNotes;
  /** Time Zone */
  timeZone?: Maybe<TimeZone>;
  timeframes: Array<ScheduleTimeframe>;
  timeframesSummary: Array<ScheduleTimeframeSummary>;
  version?: Maybe<Scalars['Int']>;
};

/** Schedule History */
export type ScheduleHistory = {
  __typename?: 'ScheduleHistory';
  /** Schedule Address */
  address?: Maybe<Address>;
  /** Calendar Type */
  calendarType?: Maybe<CalendarType>;
  /** Schedule History created date */
  created?: Maybe<Scalars['DateTime']>;
  /** Schedule Date */
  date?: Maybe<Scalars['DateTime']>;
  hasScheduledRepsSubmissions: Scalars['Boolean'];
  /** Schedule Id */
  id?: Maybe<Scalars['ID']>;
  isLocationHidden: Scalars['Boolean'];
  /** Schedule History modified by */
  modifiedBy?: Maybe<Scalars['Float']>;
  /** Schedule Name */
  name: Scalars['String'];
  /** Note */
  note: Scalars['String'];
  /** Schedule History operation */
  operation?: Maybe<Scalars['String']>;
  /** Schedule History operation time */
  operationTime?: Maybe<Scalars['DateTime']>;
  /** Project Id */
  projectId?: Maybe<Scalars['Int']>;
  /** Schedule Id */
  scheduleId?: Maybe<Scalars['ID']>;
  scheduleInviteRequestNotes: ScheduleInviteRequestNotes;
  /** Time Zone */
  timeZone?: Maybe<TimeZone>;
  timeframes: Array<ScheduleTimeframe>;
  timeframesSummary: Array<ScheduleTimeframeSummary>;
  version?: Maybe<Scalars['Int']>;
};

/** Schedule Information */
export type ScheduleInfo = {
  __typename?: 'ScheduleInfo';
  /** Audition Scheduled */
  auditionScheduled?: Maybe<Scalars['Boolean']>;
  /** Callback Scheduled */
  callbackScheduled?: Maybe<Scalars['Boolean']>;
  /** Submission Id */
  submissionId?: Maybe<Scalars['BigInt']>;
};

export type ScheduleInvitePreviousResponse = {
  __typename?: 'ScheduleInvitePreviousResponse';
  id: Scalars['ID'];
  responseNote?: Maybe<Scalars['String']>;
  schedule: WfSchedule;
  slotDate?: Maybe<Scalars['DateTime']>;
  status: ScheduleInviteResponseStatus;
  submissionId: Scalars['Int'];
};

/**
 * Schedule Invite Request type. The Schedule Invite is always sent from a schedule
 * and some fields are based on the schedule data.
 */
export type ScheduleInviteRequest = {
  __typename?: 'ScheduleInviteRequest';
  /** Schedule Invite Request id. */
  id: Scalars['ID'];
  /** The project id connected to the schedule. */
  projectId: Scalars['Int'];
  submissionIds: Array<Scalars['Int']>;
};

/**
 * Schedule Invite Request input. The Schedule Invite is always sent from a
 * schedule and some fields are based on the schedule data.
 */
export type ScheduleInviteRequestInput = {
  /** A message to Representatives of the talents that are connected to submissions. */
  noteForRepresentative?: Maybe<Scalars['String']>;
  /** A message to Talent of the talents that are connected to submissions. */
  noteForTalents?: Maybe<Scalars['String']>;
  /** Schedule Id */
  scheduleId: Scalars['Int'];
  /** Field for choosing which requests should trigger email notification. */
  scheduleReceiver: ScheduleReceiver;
  /** Schedule type: AUDITION / CALLBACK */
  type: ScheduleRequestType;
};

export type ScheduleInviteRequestNotes = {
  __typename?: 'ScheduleInviteRequestNotes';
  noteForRepresentative?: Maybe<Scalars['String']>;
  noteForTalents?: Maybe<Scalars['String']>;
};

export const ScheduleInviteRequestStatus = {
  Cancelled: 'CANCELLED',
  CancelledRescheduled: 'CANCELLED_RESCHEDULED',
  Confirmed: 'CONFIRMED',
  Declined: 'DECLINED',
  OnHold: 'ON_HOLD',
  Pending: 'PENDING',
  Rescheduled: 'RESCHEDULED',
  RescheduleRequested: 'RESCHEDULE_REQUESTED',
  Updated: 'UPDATED',
} as const;

export type ScheduleInviteRequestStatus =
  typeof ScheduleInviteRequestStatus[keyof typeof ScheduleInviteRequestStatus];
export type ScheduleInviteResponse = {
  __typename?: 'ScheduleInviteResponse';
  chatTopic?: Maybe<ChatTopic>;
  chatTopicKey: Scalars['String'];
  id: Scalars['ID'];
  note?: Maybe<Scalars['String']>;
  prevRevisionResponseStatus?: Maybe<ScheduleInviteRequestStatus>;
  repliedAt?: Maybe<Scalars['DateTime']>;
  sentAt?: Maybe<Scalars['DateTime']>;
  slotId: Scalars['Int'];
  slotStartDate?: Maybe<Scalars['DateTime']>;
  status: ScheduleInviteRequestStatus;
  submissionId: Scalars['Int'];
};

/** Schedule Invite Response input that can be sent by a Representative or Talent user. */
export type ScheduleInviteResponseInput = {
  /** Schedule Invite Response id. */
  id: Scalars['ID'];
  /** A response: a user can confirm, decline or request rescheduling the Schedule. */
  response: ScheduleInviteResponseStatus;
  /** A note. Should be filled if declining or rescheduling the invite. */
  responseNote?: Maybe<Scalars['String']>;
};

export const ScheduleInviteResponseStatus = {
  Confirmed: 'CONFIRMED',
  Declined: 'DECLINED',
  Pending: 'PENDING',
  RescheduleRequested: 'RESCHEDULE_REQUESTED',
} as const;

export type ScheduleInviteResponseStatus =
  typeof ScheduleInviteResponseStatus[keyof typeof ScheduleInviteResponseStatus];
export type ScheduleInviteResponseStatusCounts = {
  __typename?: 'ScheduleInviteResponseStatusCounts';
  confirmed: Scalars['Int'];
  declined: Scalars['Int'];
  notSent: Scalars['Int'];
  pending: Scalars['Int'];
  rescheduleRequested: Scalars['Int'];
  scheduleId: Scalars['Int'];
};

/** Schedule Invite Response input that can be sent by a Casting Director */
export type ScheduleInviteSetStatusInput = {
  /** Schedule Invite Response id. */
  id: Scalars['ID'];
  /** A response: a user can confirm, decline or request rescheduling the Schedule. */
  response: ScheduleInviteResponseStatus;
};

/**
 * Schedule Invite Request type. The Schedule Invite is always sent from a schedule
 * and some fields are based on the schedule data.
 */
export type ScheduleInviteSubRequest = {
  __typename?: 'ScheduleInviteSubRequest';
  chatTopicKey: Scalars['String'];
  /** Forwarded Note */
  forwardNote?: Maybe<Scalars['String']>;
  /** Schedule Invite Request id. */
  id: Scalars['ID'];
  /** A message to Representatives of the talents that are connected to submissions. */
  noteForRepresentative?: Maybe<Scalars['String']>;
  /** An instruction for Talents connected to submissions. */
  noteForTalents?: Maybe<Scalars['String']>;
  /** Previous Response Note */
  prevResponseNote?: Maybe<Scalars['String']>;
  /** Previous Response Status */
  prevResponseStatus?: Maybe<Scalars['String']>;
  /** Previous Slot Date */
  prevSlotDate?: Maybe<Scalars['DateTime']>;
  profile?: Maybe<WfProfile>;
  project: WfProject;
  /** Reps Worksheet Status */
  repsWorksheetStatus: Scalars['String'];
  responseNote?: Maybe<Scalars['String']>;
  /** Response Status */
  responseStatus?: Maybe<Scalars['String']>;
  role: WfRole;
  schedule?: Maybe<WfSchedule>;
  /** Date of Slot */
  slotDate?: Maybe<Scalars['DateTime']>;
  status: ScheduleInviteRequestStatus;
  submissionId: Scalars['Int'];
};

/** Paginated result with [Schedule] objects */
export type SchedulePaginatedResult = {
  __typename?: 'SchedulePaginatedResult';
  /** List of Schedule objects */
  objects: Array<Schedule>;
  /** Current page */
  page: Scalars['Int'];
  /** Total count of rows */
  totalCount: Scalars['Int'];
  /** Total pages */
  totalPages: Scalars['Int'];
};

export const ScheduleReceiver = {
  All: 'ALL',
  Updated: 'UPDATED',
  UpdatedAndUnconfirmed: 'UPDATED_AND_UNCONFIRMED',
} as const;

export type ScheduleReceiver = typeof ScheduleReceiver[keyof typeof ScheduleReceiver];
/**
 * Schedule Reminder type. The Schedule Reminder is used on getScheduleReminiders
 * context to fill in template of reminder email sending to talent
 */
export type ScheduleReminder = {
  __typename?: 'ScheduleReminder';
  /** Schedule reminder email context */
  context: ScheduleReminderContext;
  to?: Maybe<Scalars['String']>;
};

/** Casting company context for schedule reminder */
export type ScheduleReminderCastingCompanyContext = {
  __typename?: 'ScheduleReminderCastingCompanyContext';
  /** Casting company logo */
  logo: Scalars['String'];
  /** Profile photo URL */
  name: Scalars['String'];
};

/**
 * Schedule Reminder Context type. The Schedule Reminder is used on
 * getScheduleReminiders context to fill in template of reminder email sending to talent
 */
export type ScheduleReminderContext = {
  __typename?: 'ScheduleReminderContext';
  /** Open schedule button text */
  buttonText: Scalars['String'];
  /** Open schedule button URL */
  buttonURL?: Maybe<Scalars['String']>;
  /** Email divider text */
  dividerText: Scalars['String'];
  /** Email heading text */
  heading: Scalars['String'];
  /** Instructions for talent */
  instructionForTalent?: Maybe<Scalars['String']>;
  /** Schedule location notes */
  locationNote?: Maybe<Scalars['String']>;
  /** URL to manage email settings */
  manageEmailSettingsUrl: Scalars['String'];
  /** Talent profile context */
  profile: ScheduleReminderProfileContext;
  /** Project context */
  project: ScheduleReminderProjectContext;
  /** Reminder receiver email */
  receiverEmail?: Maybe<Scalars['String']>;
  /** Role context */
  role: ScheduleReminderRoleContext;
  /** Schedule date */
  scheduleDate: Scalars['String'];
  /** Schedule location */
  scheduleLocation: Scalars['String'];
  /** Schedule type */
  scheduleType: Scalars['String'];
  /** Email sub heading text */
  subHeading: Scalars['String'];
};

export type ScheduleReminderContextNotificationContextAndRecipient = {
  __typename?: 'ScheduleReminderContextNotificationContextAndRecipient';
  context: ScheduleReminderContext;
  to?: Maybe<Scalars['String']>;
  toAccountId?: Maybe<Scalars['Int']>;
  toOrgId?: Maybe<Scalars['Int']>;
  toProfileId?: Maybe<Scalars['Int']>;
};

/** Schedule Reminder input */
export type ScheduleReminderInput = {
  /** Calendar id. */
  calendarId: Scalars['Int'];
  /** Calendar Slot id. */
  calendarSlotId: Scalars['Int'];
  /** Calendar Type id. */
  calendarTypeId: Scalars['Int'];
  /** Submission id. */
  submissionId: Scalars['Int'];
};

/** Profile Context for Schedule reminder Context type. */
export type ScheduleReminderProfileContext = {
  __typename?: 'ScheduleReminderProfileContext';
  /** Profile ID */
  id: Scalars['Int'];
  /** Profile name */
  name: Scalars['String'];
  /** Profile photo URL */
  primaryPhotoUrl: Scalars['String'];
};

/** Project Context for Schedule reminder Context type. */
export type ScheduleReminderProjectContext = {
  __typename?: 'ScheduleReminderProjectContext';
  /** Project Casting Company */
  castingCompany: ScheduleReminderCastingCompanyContext;
  /** Project Name */
  name: Scalars['String'];
};

/** Role Context for Schedule reminder Context type. */
export type ScheduleReminderRoleContext = {
  __typename?: 'ScheduleReminderRoleContext';
  /** Role Name */
  name: Scalars['String'];
};

/** Schedule Report Input Arguments */
export type ScheduleReportCreateInput = {
  castingNotes?: Maybe<Scalars['Boolean']>;
  confirmationStatuses?: Maybe<Scalars['Boolean']>;
  repContactInfo?: Maybe<Scalars['Boolean']>;
  scheduleId: Scalars['Int'];
  submissionNotes?: Maybe<Scalars['Boolean']>;
};

/** Schedule Report */
export type ScheduleReportModel = {
  __typename?: 'ScheduleReportModel';
  castingNotes?: Maybe<Scalars['Boolean']>;
  confirmationStatuses?: Maybe<Scalars['Boolean']>;
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<Scalars['Int']>;
  csvFileName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  organizationId?: Maybe<Scalars['Int']>;
  payload?: Maybe<ScheduleReportPayloadModel>;
  repContactInfo?: Maybe<Scalars['Boolean']>;
  reportType: ReportTypeEnum;
  scheduleId: Scalars['Int'];
  status: ReportStatusEnum;
  submissionNotes?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

/** Schedule Report Payload */
export type ScheduleReportPayloadModel = {
  __typename?: 'ScheduleReportPayloadModel';
  castingCompanyLogo?: Maybe<ReportMediaModel>;
  projectName: Scalars['String'];
  scheduleDate: Scalars['DateTime'];
  scheduleType: CalendarTypeEnum;
  timeZone?: Maybe<Scalars['String']>;
  timeframes: Array<ScheduleReportTimeframeModel>;
};

/** Schedule Report Submission */
export type ScheduleReportSubmissionModel = {
  __typename?: 'ScheduleReportSubmissionModel';
  agencyPhone?: Maybe<Scalars['String']>;
  castingNote?: Maybe<Scalars['String']>;
  cover?: Maybe<ReportMediaModel>;
  dateOfBirth?: Maybe<Scalars['DateTime']>;
  genderAppearances?: Maybe<Array<SubFieldsGql>>;
  headshotMedia?: Maybe<ReportMediaModel>;
  id: Scalars['Int'];
  isPersonal?: Maybe<Scalars['Boolean']>;
  minor?: Maybe<Scalars['Boolean']>;
  notes?: Maybe<Array<Scalars['String']>>;
  orgAbbreviation?: Maybe<Scalars['String']>;
  orgName?: Maybe<Scalars['String']>;
  orgParentName?: Maybe<Scalars['String']>;
  orgPhone?: Maybe<Array<Scalars['String']>>;
  organizationName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  profileId?: Maybe<Scalars['Float']>;
  roleName: Scalars['String'];
  scheduleResponseStatus?: Maybe<Scalars['String']>;
  sizeSheets?: Maybe<PresentationSizeSheetsTalentModel>;
  snapshotMedia?: Maybe<ReportMediaModel>;
  stageName?: Maybe<Scalars['String']>;
  submissionNote?: Maybe<Scalars['String']>;
  talentEmail?: Maybe<Scalars['String']>;
  talentPhone?: Maybe<Scalars['String']>;
  talentUnions?: Maybe<Array<Scalars['String']>>;
};

/** Schedule Report Timeframe */
export type ScheduleReportTimeframeModel = {
  __typename?: 'ScheduleReportTimeframeModel';
  endDate: Scalars['DateTime'];
  id: Scalars['Int'];
  isBreak: Scalars['Boolean'];
  startDate: Scalars['DateTime'];
  timeslots: Array<ScheduleReportTimeslotModel>;
};

/** Schedule Report Timeslot */
export type ScheduleReportTimeslotModel = {
  __typename?: 'ScheduleReportTimeslotModel';
  endDate: Scalars['DateTime'];
  id: Scalars['Int'];
  startDate: Scalars['DateTime'];
  submissions: Array<ScheduleReportSubmissionModel>;
};

export const ScheduleRequestType = {
  Audition: 'AUDITION',
  Callback: 'CALLBACK',
} as const;

export type ScheduleRequestType =
  typeof ScheduleRequestType[keyof typeof ScheduleRequestType];
/** Search input */
export type ScheduleSearchInput = {
  /** List of Project Id to search in */
  projectId?: Maybe<Array<Scalars['Int']>>;
  scheduleType?: Maybe<CalendarTypeEnum>;
};

/** Schedule Size Sheeets Report Input Arguments */
export type ScheduleSizeSheetsReportCreateInput = {
  displayTalentInfoOptions: Array<DisplayTalentInfoOptionsEnum>;
  displayTalentPerPageOptions: DisplayTalentPerPageOptionsEnum;
  displayTalentPhotoOptions: Array<DisplayTalentPhotoOptionsEnum>;
  scheduleId: Scalars['Int'];
};

/** Schedule Size Sheets Report */
export type ScheduleSizeSheetsReportModel = {
  __typename?: 'ScheduleSizeSheetsReportModel';
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<Scalars['Int']>;
  csvFileName?: Maybe<Scalars['String']>;
  displayTalentInfoOptions?: Maybe<Array<DisplayTalentInfoOptionsEnum>>;
  displayTalentPerPageOptions?: Maybe<DisplayTalentPerPageOptionsEnum>;
  displayTalentPhotoOptions?: Maybe<Array<DisplayTalentPhotoOptionsEnum>>;
  id: Scalars['ID'];
  organizationId?: Maybe<Scalars['Int']>;
  payload?: Maybe<ScheduleReportPayloadModel>;
  reportType: ReportTypeEnum;
  scheduleId: Scalars['Int'];
  status: ReportStatusEnum;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

/** Object for representing a Schedule Slot. */
export type ScheduleSlot = {
  __typename?: 'ScheduleSlot';
  /** Slot Id */
  id?: Maybe<Scalars['ID']>;
  /** Slot End Time */
  slotEndTime?: Maybe<Scalars['DateTime']>;
  /** Slot Id */
  slotId?: Maybe<Scalars['Float']>;
  /** Slot Start Time */
  slotStartTime?: Maybe<Scalars['DateTime']>;
  submissions: Array<Submission>;
};

export type ScheduleSlotSummary = {
  __typename?: 'ScheduleSlotSummary';
  endTime: Scalars['DateTime'];
  id: Scalars['Int'];
  roleCount: Scalars['Int'];
  startTime: Scalars['DateTime'];
  submissionCount: Scalars['Int'];
  timeframeId: Scalars['Int'];
};

export type ScheduleTalentPool = {
  __typename?: 'ScheduleTalentPool';
  roleId: Scalars['Int'];
  submissionCount: Scalars['Int'];
  submissions?: Maybe<Array<Submission>>;
};

/** Schedule Timeframe Request Summary */
export type ScheduleTimeframRequestSummary = {
  __typename?: 'ScheduleTimeframRequestSummary';
  count: Scalars['Int'];
  status: Scalars['String'];
};

/** Schedule Timeframe Details */
export type ScheduleTimeframe = {
  __typename?: 'ScheduleTimeframe';
  /** Timeframe Duration */
  durations?: Maybe<Array<Scalars['Float']>>;
  /** Timeframe End Time */
  endTime?: Maybe<Scalars['DateTime']>;
  /** Timeframe Id */
  id?: Maybe<Scalars['ID']>;
  /** Is this timeframe represents a break */
  isBreak: Scalars['Boolean'];
  /** Timeframe Name */
  name: Scalars['String'];
  /** List of Slots in this Timeframe */
  slots?: Maybe<Array<ScheduleSlot>>;
  /** Timeframe Start Time */
  startTime?: Maybe<Scalars['DateTime']>;
};

/** Schedule Timeframe Role Summary */
export type ScheduleTimeframeRoleSummary = {
  __typename?: 'ScheduleTimeframeRoleSummary';
  id: Scalars['ID'];
  internalName?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  submissionCount: Scalars['Int'];
  timeframeId: Scalars['ID'];
};

export type ScheduleTimeframeShiftedResult = {
  __typename?: 'ScheduleTimeframeShiftedResult';
  submissionIds: Array<Scalars['BigInt']>;
  timeframeIds: Array<Scalars['Int']>;
};

/** Schedule Timeframe Summary */
export type ScheduleTimeframeSummary = {
  __typename?: 'ScheduleTimeframeSummary';
  /** Timeframe Duration */
  durations?: Maybe<Array<Scalars['Float']>>;
  emptySlotsCount: Scalars['Int'];
  endTime: Scalars['DateTime'];
  /** Timeframe Id */
  id: Scalars['ID'];
  isBreak: Scalars['Boolean'];
  requestSummary: Array<ScheduleTimeframRequestSummary>;
  rolesSummary: Array<ScheduleTimeframeRoleSummary>;
  slotsCount: Scalars['Int'];
  startTime: Scalars['DateTime'];
};

/** Search Schedules input */
export type SchedulesSelectInput = {
  /** Schedule ids to search in */
  scheduleIds?: Maybe<Array<Scalars['Int']>>;
  /** List of Unscheduled submissions */
  unscheduled?: Maybe<Scalars['Boolean']>;
};

export type SearchAccountsFiltersArgs = {
  accountId?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  former?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  legacyEmail?: Maybe<Scalars['String']>;
  legacyInstance?: Maybe<Scalars['String']>;
  legacyLogin?: Maybe<Scalars['String']>;
  organizationIds?: Maybe<Array<Scalars['Int']>>;
  phone?: Maybe<Scalars['String']>;
  systemRoleIds?: Maybe<Array<Scalars['Int']>>;
};

export const SearchDirection = {
  Asc: 'Asc',
  Dsc: 'Dsc',
} as const;

export type SearchDirection = typeof SearchDirection[keyof typeof SearchDirection];
export type SearchOrganizationsFiltersArgs = {
  /** Organization name */
  name?: Maybe<Scalars['String']>;
  /** Organization Id */
  organizationId?: Maybe<Scalars['Int']>;
  /** Organization Parent Id */
  organizationParentId?: Maybe<Scalars['Int']>;
  /** Organization status code */
  organizationStatusCodes?: Maybe<Array<Scalars['String']>>;
  /** Organization Type Id */
  representationTypeId?: Maybe<Scalars['Int']>;
  /** System role code */
  systemRoles?: Maybe<Array<Scalars['String']>>;
};

/** Input type for search representatives */
export type SearchRepresentativeInput = {
  /** Company name */
  companyName?: Maybe<Scalars['String']>;
  /** List of Dma CODEs */
  dmas?: Maybe<Array<Scalars['String']>>;
  /** List of Representative Age Category CODEs */
  representativeAgeCategoryCodes?: Maybe<Array<Scalars['String']>>;
  /** List of Representative Category CODEs */
  representativeCategoryCodes?: Maybe<Array<Scalars['String']>>;
  /** List of Representative Type CODEs */
  representativeTypeCodes?: Maybe<Array<Scalars['String']>>;
};

export const SearchResultType = {
  All: 'ALL',
  Documents: 'DOCUMENTS',
  Facets: 'FACETS',
} as const;

export type SearchResultType = typeof SearchResultType[keyof typeof SearchResultType];
/** SeekingRepresentation object */
export type SeekingRepresentation = {
  __typename?: 'SeekingRepresentation';
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

export type SendDirectMessageToTalentsInput = {
  message: Scalars['String'];
  profileIds: Array<Scalars['Int']>;
  roleId?: Maybe<Scalars['Int']>;
  subject?: Maybe<Scalars['String']>;
  talentCanSeeSenderAddress?: Maybe<Scalars['Boolean']>;
};

export type Session = {
  __typename?: 'Session';
  accessToken?: Maybe<Scalars['String']>;
  context?: Maybe<AccountContext>;
  deviceId?: Maybe<Scalars['String']>;
  expirationDate?: Maybe<Scalars['DateTime']>;
};

/** SexualSituation object */
export type SexualSituation = {
  __typename?: 'SexualSituation';
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

/** Audition Presentation input type */
export type ShareSelectPresentationInput = {
  /** Date of link expiration */
  linkExpiresAt?: Maybe<Scalars['DateTime']>;
  /** Project ID */
  projectId: Scalars['Int'];
  /** Role IDs */
  roleIds: Array<Scalars['Int']>;
  /** Tile Scheme Codes */
  tileSchemeCodes: Array<Scalars['String']>;
};

export type ShiftTimeframeInput = {
  newStartTime: Scalars['DateTime'];
  scheduleId: Scalars['Int'];
  timeframeId: Scalars['Int'];
};

/** Shoe modifier object */
export type ShoeModifier = {
  __typename?: 'ShoeModifier';
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

/** Measurement object */
export type ShoeSize = {
  __typename?: 'ShoeSize';
  /** Gender */
  category: BasicSetting;
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** ShoeSize for AU */
  shoeSizeAU: Scalars['String'];
  /** ShoeSize for EU */
  shoeSizeEU: Scalars['String'];
  /** ShoeSize for UK */
  shoeSizeUK: Scalars['String'];
  /** ShoeSize for US */
  shoeSizeUS: Scalars['String'];
  /** short order */
  sortOrder: Scalars['Float'];
};

/** Size Modifier object */
export type SizeModifier = {
  __typename?: 'SizeModifier';
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

/** Skill object */
export type Skill = {
  __typename?: 'Skill';
  /** child objects */
  childObjects: Array<Skill>;
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** parent object */
  parentObject?: Maybe<Skill>;
  /** Selectable Flag */
  selectable: Scalars['Boolean'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

/** Input type for skill and skill level */
export type SkillInput = {
  id: Scalars['ID'];
  levelId?: Maybe<Scalars['Float']>;
  note?: Maybe<Scalars['String']>;
  profileMediaId?: Maybe<Scalars['Float']>;
};

/** SkillLevel object */
export type SkillLevel = {
  __typename?: 'SkillLevel';
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

/** Input type for skill and skill level */
export type SkillSearchInput = {
  id: Scalars['ID'];
  levelId?: Maybe<Scalars['ID']>;
};

export type Sleeve = {
  __typename?: 'Sleeve';
  /** Imperial Feet Inches */
  IMPERIAL_FEET_INCHES?: Maybe<Scalars['String']>;
  /** Imperial Inches */
  IMPERIAL_INCHES: Scalars['Float'];
  /** Metric Centimeters */
  METRIC_CENTIMETERS: Scalars['Int'];
  /** Centimeters */
  cm: Scalars['Int'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** Inches */
  inch: Scalars['Float'];
  /** Inches rounded */
  inchRounded: Scalars['String'];
  /** Show in imperial UI */
  showInImperialUI: Scalars['Boolean'];
};

/** Holds the input data for Slot. */
export type Slot = {
  __typename?: 'Slot';
  /** Slot argument ID */
  slotArguments: Array<SlotArguments>;
  /** Slot ID */
  slotId: Scalars['Int'];
  /** Submission ID */
  submissionIds: Array<Scalars['Int']>;
};

/** Holds the link between slot and entity. */
export type SlotArguments = {
  __typename?: 'SlotArguments';
  /** entity ID */
  entityId: Scalars['BigInt'];
  /** Slot argument entity ID */
  entityType: Scalars['Int'];
  /** Slot argument ID */
  slotArgId: Scalars['Int'];
};

export type SlotSubmissionsInput = {
  /** Slot Id */
  slotId: Scalars['Float'];
  /** List of SubmissionIds. */
  submissionIds: Array<Scalars['BigInt']>;
};

/** Result Sort Conditions */
export type SortConditionInput = {
  /** Column name by which result should be sorted */
  orderColumn: Scalars['String'];
  /** Either ASC or DESC */
  orderDirection: Scalars['String'];
};

export const SortOrder = {
  Asc: 'ASC',
  Desc: 'DESC',
} as const;

export type SortOrder = typeof SortOrder[keyof typeof SortOrder];
export const SortOrderEnum = {
  Asc: 'ASC',
  Desc: 'DESC',
} as const;

export type SortOrderEnum = typeof SortOrderEnum[keyof typeof SortOrderEnum];
/** Sport Equipment object */
export type SportEquipment = {
  __typename?: 'SportEquipment';
  /** child objects */
  childObjects: Array<SportEquipment>;
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** parent object */
  parentObject?: Maybe<SportEquipment>;
  /** Selectable Flag */
  selectable: Scalars['Boolean'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

/** State */
export type State = {
  __typename?: 'State';
  /** code */
  code: Scalars['String'];
  /** Country Id */
  country: Country;
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

export type StateFilterInput = {
  /** Filter states by country ID or CODE values */
  country?: Maybe<FilterInput>;
  /** Filter states by ID or CODE values */
  state?: Maybe<FilterInput>;
};

export type SubFieldsGql = {
  __typename?: 'SubFieldsGql';
  code?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
};

/** Submission object */
export type Submission = {
  __typename?: 'Submission';
  /** Comments count left in presentations */
  commentsCount?: Maybe<Scalars['Int']>;
  /** Submission creator company name */
  companyName: Scalars['String'];
  /** Submission's cover */
  cover?: Maybe<Media>;
  /** Created Date */
  created: Scalars['DateTime'];
  /** Submission creator account */
  creatorAccount: Account;
  /** Notes for the Submission object */
  fastcastNotes: Array<Note>;
  /** Determines has submission audio reel or not */
  hasAudioReel: Scalars['Boolean'];
  /** Determines has submission video reel or not */
  hasVideoReel: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['BigInt'];
  /** Identify the submission is cutomized or not. */
  isCustomized: Scalars['Boolean'];
  /** Represents that profile is overscale or not */
  isOverscale?: Maybe<Scalars['Boolean']>;
  /** Last note for the submission */
  lastNote?: Maybe<Note>;
  /** Submission's media assets */
  media: Array<SubmissionMedia>;
  mediaCount: Array<MediaCount>;
  /** Note */
  note: Scalars['String'];
  /** Notes for the Submission object */
  notes: Array<Note>;
  /** Over scale note */
  overscaleNote?: Maybe<Scalars['String']>;
  pickedBy: Array<SubmissionPick>;
  /** Picks count left in presentations */
  picksCount?: Maybe<Scalars['Int']>;
  /** Profile associated with the subscription */
  profile?: Maybe<Profile>;
  /** Submission Profile Id */
  profileId: Scalars['Int'];
  /** Profile Working Location ID */
  profileWorkingLocationId?: Maybe<Scalars['Int']>;
  /** Submission request's media assets */
  requestMedia: Array<SubmissionMedia>;
  /** Role associated with the submission */
  role: Role;
  /** Submission Role Id */
  roleId: Scalars['Int'];
  /** Submission Role Name */
  roleName?: Maybe<Scalars['String']>;
  /** Schedule Info */
  scheduleInfo?: Maybe<ScheduleInfo>;
  /** Schedule slot detail associated with submission */
  scheduleSlotDetail?: Maybe<SubmissionScheduleSlot>;
  /** Snapshot media assets */
  snapshotMedia?: Maybe<Media>;
  /** Submission Previous Status */
  submissionPreviousStatus?: Maybe<SubmissionStatus>;
  /** Submission Status */
  submissionStatus?: Maybe<SubmissionStatus>;
  /** Tile schema value object */
  tileSchemaValue?: Maybe<TileSchemaValue>;
  /** Tile Scheme Value ID */
  tileSchemeValueId?: Maybe<Scalars['Int']>;
  /** Customized Profile Working Location */
  workingLocation?: Maybe<ProfileWorkingLocation>;
};

/** Submission object */
export type SubmissionMediaCountArgs = {
  isPrimary?: Maybe<Scalars['Boolean']>;
  requested?: Maybe<Scalars['Boolean']>;
};

/** Submission object */
export type SubmissionProfileArgs = {
  returnDeleted?: Maybe<Scalars['Boolean']>;
};

/** Submissions By Profile */
export type SubmissionByProfileInput = {
  /** Start Date */
  dateFrom?: Maybe<Scalars['DateTime']>;
  /** End Date */
  dateTo?: Maybe<Scalars['DateTime']>;
  /** Offset */
  pageNumber?: Maybe<Scalars['Float']>;
  /** Page Size */
  pageSize?: Maybe<Scalars['Float']>;
};

export type SubmissionCreated = {
  __typename?: 'SubmissionCreated';
  created: Scalars['Boolean'];
  submissions: Array<Submission>;
};

/** Determine discrete boundaries for project filtering */
export const SubmissionDueDateSearchEnum = {
  Future: 'FUTURE',
  Today: 'TODAY',
} as const;

export type SubmissionDueDateSearchEnum =
  typeof SubmissionDueDateSearchEnum[keyof typeof SubmissionDueDateSearchEnum];
/** Submission Media object */
export type SubmissionMedia = {
  __typename?: 'SubmissionMedia';
  accountId: Scalars['Float'];
  created?: Maybe<Scalars['DateTime']>;
  /** Enabled */
  enabled: Scalars['Boolean'];
  fileKey?: Maybe<Scalars['String']>;
  fileType: MediaFileType;
  filename?: Maybe<Scalars['String']>;
  guid: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  /** Media ID */
  id: Scalars['ID'];
  isLocked?: Maybe<Scalars['Boolean']>;
  /** Is Primary */
  isPrimary: Scalars['Boolean'];
  length?: Maybe<Scalars['Float']>;
  /** Media ID */
  mediaId: Scalars['Int'];
  mediaParentId?: Maybe<Scalars['Float']>;
  mediaStatus: MediaStatus;
  mediaStorageStatus: MediaStorageStatus;
  mediaType?: Maybe<MediaType>;
  moderationStatus: MediaModerationStatus;
  /** Customized media name */
  name?: Maybe<Scalars['String']>;
  /** Order */
  orderOfAppearance: Scalars['Int'];
  purpose: MediaPurpose;
  /** @deprecated use url field instead */
  resizedPaths: Array<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  tag?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Media>;
  thumbnailUrl?: Maybe<Scalars['String']>;
  transformation?: Maybe<MediaTransformation>;
  transformations: Array<Media>;
  updated?: Maybe<Scalars['DateTime']>;
  /** @deprecated use url field instead */
  uploadPath?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

/** Submission Media */
export type SubmissionMediaInput = {
  /** Is media hidden on profile? */
  isHidden?: Maybe<Scalars['Boolean']>;
  /** Is media primary? (Primary photo, video reel or audio reel) */
  isPrimary?: Maybe<Scalars['Boolean']>;
  /** Media Id */
  mediaId: Scalars['ID'];
  /** Customize media file name */
  name?: Maybe<Scalars['String']>;
  /** Media order of appearance */
  order?: Maybe<Scalars['Int']>;
};

/** Paginated result with [Submission] objects */
export type SubmissionPaginatedResult = {
  __typename?: 'SubmissionPaginatedResult';
  /** List of Submission objects */
  objects: Array<Submission>;
  /** Current page */
  page: Scalars['Int'];
  /** Total count of rows */
  totalCount: Scalars['Int'];
  /** Total pages */
  totalPages: Scalars['Int'];
};

export type SubmissionPick = {
  __typename?: 'SubmissionPick';
  /** ID of Presentation Group Talent Pick */
  id: Scalars['Int'];
  userName: Scalars['String'];
};

/** Submission Profile Output */
export type SubmissionProfile = {
  __typename?: 'SubmissionProfile';
  /** Profile Information */
  profile?: Maybe<Profile>;
  /** Role Name */
  roleName: Scalars['String'];
};

/** Submission Quick Creation Input type */
export type SubmissionQuickAddInput = {
  email?: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  profileTypeCode: Scalars['String'];
  roleId: Scalars['Int'];
};

/** Submission Schedule Slot Details */
export type SubmissionScheduleSlot = {
  __typename?: 'SubmissionScheduleSlot';
  /** Schedule EndTime */
  endTime?: Maybe<Scalars['DateTime']>;
  /** Schedule Date */
  scheduleDate?: Maybe<Scalars['DateTime']>;
  /** Schedule Id */
  scheduleId: Scalars['ID'];
  /** Calendar Slot EndTime */
  slotEndTime?: Maybe<Scalars['DateTime']>;
  /** Calendar Slot StartTime  */
  slotStartTime?: Maybe<Scalars['DateTime']>;
  /** Schedule StartTime */
  startTime?: Maybe<Scalars['DateTime']>;
  /** Submission Id */
  submissionId: Scalars['ID'];
  /** Time Zone */
  timeZone?: Maybe<TimeZone>;
  /** Timezone Id */
  timeZoneId: Scalars['ID'];
};

/** Submission Search input */
export type SubmissionSearchInput = {
  /** Is submission scheduled for audition */
  auditionScheduled?: Maybe<Scalars['Boolean']>;
  /** Is submission scheduled for callback */
  callbackScheduled?: Maybe<Scalars['Boolean']>;
  /** List of Submission IDs to be excluded from the search results */
  excludeSubmissionsIds?: Maybe<Array<Scalars['Int']>>;
  hasComments?: Maybe<Scalars['Boolean']>;
  hasPicks?: Maybe<Scalars['Boolean']>;
  /** Profile Search Input */
  profileSearchInput?: Maybe<ProfileSearchInput>;
  /** List of Role IDs */
  roleIds?: Maybe<Array<Scalars['Int']>>;
  /** Filter by Schedule */
  scheduleIds?: Maybe<Array<Scalars['Int']>>;
  /** Is submission scheduled */
  scheduled?: Maybe<Scalars['Boolean']>;
  /** Filter by Audition Session */
  sessionIds?: Maybe<Array<Scalars['Int']>>;
  stageName?: Maybe<Scalars['String']>;
  /** List of Submission IDs */
  submissionIds?: Maybe<Array<Scalars['Int']>>;
  /** List of Submission Status Codes */
  submissionStatusCodes?: Maybe<Array<Scalars['String']>>;
  /** List of Submission Status IDs */
  submissionStatusIds?: Maybe<Array<Scalars['Int']>>;
  /** List of Submission Tile Schema Codes */
  tileSchemeValueCodes?: Maybe<Array<Scalars['String']>>;
  /** List of Submission Tile Schema IDs */
  tileSchemeValueIds?: Maybe<Array<Scalars['Int']>>;
};

/** Enum of an available columns for sorting */
export const SubmissionSearchSortColumn = {
  LastName: 'LAST_NAME',
  Random: 'RANDOM',
  Role: 'ROLE',
  SelectionTag: 'SELECTION_TAG',
  StageName: 'STAGE_NAME',
  SubmittedDate: 'SUBMITTED_DATE',
} as const;

export type SubmissionSearchSortColumn =
  typeof SubmissionSearchSortColumn[keyof typeof SubmissionSearchSortColumn];
export type SubmissionSearchSortOptionsInput = {
  /** Field name by which should be sorted */
  fieldName: SubmissionSearchSortColumn;
  /** Sort order value(asc or desc). Default value: asc */
  sortOrder?: Maybe<SortOrderEnum>;
};

/** SubmissionStatus object */
export type SubmissionStatus = {
  __typename?: 'SubmissionStatus';
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

export const SubmissionStatusCodeEnum = {
  Booked: 'BOOKED',
  Draft: 'DRAFT',
  OnAvail: 'ON_AVAIL',
  Reviewed: 'REVIEWED',
  Selected: 'SELECTED',
  ToReview: 'TO_REVIEW',
  UnderConsideration: 'UNDER_CONSIDERATION',
  Unsubmitted: 'UNSUBMITTED',
} as const;

export type SubmissionStatusCodeEnum =
  typeof SubmissionStatusCodeEnum[keyof typeof SubmissionStatusCodeEnum];
/** Input type for updating submission */
export type SubmissionUpdateInput = {
  /** Profile working location id */
  dmaId?: Maybe<Scalars['Int']>;
  /** Represents that profile is overscale or not */
  isOverscale?: Maybe<Scalars['Boolean']>;
  /** Note for submission */
  note?: Maybe<Scalars['String']>;
  /** Over scale note */
  overscaleNote?: Maybe<Scalars['String']>;
  /** Profile ID */
  profileId?: Maybe<Scalars['Int']>;
  /** Request media(s) */
  requestMedia?: Maybe<Array<SubmissionMediaInput>>;
  /** Submission status CODE */
  statusCode?: Maybe<Scalars['String']>;
  /** Submission ID */
  submissionId: Scalars['BigInt'];
  /** Submission profile media(s) */
  submissionProfileMedia?: Maybe<Array<SubmissionMediaInput>>;
  /** Tile Schema Value CODE */
  tileSchemeValueCode?: Maybe<Scalars['String']>;
};

/** Submission data for Workflow */
export type SubmissionWorkflow = {
  __typename?: 'SubmissionWorkflow';
  /** Talent's custom cover */
  cover?: Maybe<Media>;
  id: Scalars['BigInt'];
  isCustomized: Scalars['Boolean'];
  profile?: Maybe<Profile>;
  project: ProjectWorkflow;
  role: RoleWorkflow;
};

/** Submission data for Workflow. Short version */
export type SubmissionWorkflowShort = {
  __typename?: 'SubmissionWorkflowShort';
  agencyId?: Maybe<Scalars['Int']>;
  creatorAccountId: Scalars['Int'];
  id: Scalars['BigInt'];
  profileAccountId?: Maybe<Scalars['Int']>;
  profileArtistId?: Maybe<Scalars['Int']>;
  profileId: Scalars['Int'];
  projectId: Scalars['Int'];
  roleId: Scalars['Int'];
};

/** Subscription */
export type SubscriptionModel = {
  __typename?: 'SubscriptionModel';
  expirationDate?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  nextBillingDate?: Maybe<Scalars['DateTime']>;
  plan?: Maybe<PlanModel>;
  status: Scalars['String'];
  transaction?: Maybe<Scalars['String']>;
};

export type SystemRole = {
  __typename?: 'SystemRole';
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

export const SystemRoleCode = {
  Agent: 'AGENT',
  Api: 'API',
  CastingDirector: 'CASTING_DIRECTOR',
  LegacyUser: 'LEGACY_USER',
  Manager: 'MANAGER',
  ProjectCreator: 'PROJECT_CREATOR',
  RootUser: 'ROOT_USER',
  SharedProjectUser: 'SHARED_PROJECT_USER',
  Talent: 'TALENT',
} as const;

export type SystemRoleCode = typeof SystemRoleCode[keyof typeof SystemRoleCode];
export const SystemRoleEnum = {
  Agent: 'Agent',
  Api: 'Api',
  CastingDirector: 'CastingDirector',
  LegacyUser: 'LegacyUser',
  Manager: 'Manager',
  ProjectCreator: 'ProjectCreator',
  RootUser: 'RootUser',
  SharedProjectUser: 'SharedProjectUser',
  Talent: 'Talent',
} as const;

export type SystemRoleEnum = typeof SystemRoleEnum[keyof typeof SystemRoleEnum];
/** Tshirt Measurement object */
export type TShirtSize = {
  __typename?: 'TShirtSize';
  /** Gender */
  category: BasicSetting;
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

/** Tag object */
export type Tag = {
  __typename?: 'Tag';
  /** child objects */
  childObjects: Array<Tag>;
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** parent object */
  parentObject?: Maybe<Tag>;
  /** Selectable Flag */
  selectable: Scalars['Boolean'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

/** Contex object for talent access profile */
export type TalentAccessProfileContext = {
  __typename?: 'TalentAccessProfileContext';
  buttonText: Scalars['String'];
  buttonURL: Scalars['String'];
  expiresDays: Scalars['Float'];
  manageEmailSettingsUrl: Scalars['String'];
  messageFromRepresentative: Scalars['String'];
  organizationDivision: Scalars['String'];
  organizationLogo: Scalars['String'];
  profile: TalentAccessProfileDetailsContext;
};

/** Talent Access Profile Context input */
export type TalentAccessProfileContextInput = {
  accessToken: Scalars['String'];
  email: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  organizationId: Scalars['Int'];
  stageName: Scalars['String'];
};

export type TalentAccessProfileContextNotificationContextAndRecipient = {
  __typename?: 'TalentAccessProfileContextNotificationContextAndRecipient';
  context: TalentAccessProfileContext;
  to?: Maybe<Scalars['String']>;
  toAccountId?: Maybe<Scalars['Int']>;
  toOrgId?: Maybe<Scalars['Int']>;
  toProfileId?: Maybe<Scalars['Int']>;
};

/** Context object for talent access profile object */
export type TalentAccessProfileDetailsContext = {
  __typename?: 'TalentAccessProfileDetailsContext';
  name: Scalars['String'];
};

export type TalentPickPublic = {
  __typename?: 'TalentPickPublic';
  id: Scalars['String'];
  userName: Scalars['String'];
};

/** Talent Profile Union */
export type TalentProfileUnion = {
  __typename?: 'TalentProfileUnion';
  /** child objects */
  childObjects: Array<TalentUnion>;
  /** code */
  code: Scalars['String'];
  /** country */
  country?: Maybe<Country>;
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** parent object */
  parentObject?: Maybe<TalentUnion>;
  /** Represents project union for all true values */
  projectEnabled: Scalars['Boolean'];
  /** Selectable Flag */
  selectable: Scalars['Boolean'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
  /** Represents talent union for all true values */
  talentEnabled: Scalars['Boolean'];
  /** Talent Union membership Id (usually number) */
  talentMembershipId?: Maybe<Scalars['String']>;
};

export const TalentStatusEnum = {
  SelectedTalent: 'SelectedTalent',
  SubmittedTalent: 'SubmittedTalent',
} as const;

export type TalentStatusEnum = typeof TalentStatusEnum[keyof typeof TalentStatusEnum];
/** Talent Submission Item Payload */
export type TalentSubmissionItemModel = {
  __typename?: 'TalentSubmissionItemModel';
  ageRange: Scalars['String'];
  castingDirector?: Maybe<Scalars['String']>;
  id: Scalars['Float'];
  mediaRequest: Scalars['Boolean'];
  projectName: Scalars['String'];
  roleName: Scalars['String'];
  status: Scalars['String'];
  submissionDate: Scalars['DateTime'];
};

/** Talent Submission Report */
export type TalentSubmissionModel = {
  __typename?: 'TalentSubmissionModel';
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<Scalars['Int']>;
  csvFileName?: Maybe<Scalars['String']>;
  dateFrom: Scalars['DateTime'];
  dateTo: Scalars['DateTime'];
  id: Scalars['ID'];
  organizationId?: Maybe<Scalars['Int']>;
  payload?: Maybe<TalentSubmissionPayloadModel>;
  profileId: Scalars['Int'];
  reportType: ReportTypeEnum;
  status: ReportStatusEnum;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

/** Talent Submission Report Payload */
export type TalentSubmissionPayloadModel = {
  __typename?: 'TalentSubmissionPayloadModel';
  castingCompanyInfo?: Maybe<CompanyInfoModel>;
  profile?: Maybe<TalentSubmissionProfileModel>;
  submissions?: Maybe<Array<TalentSubmissionItemModel>>;
};

/** Talent Submission Profile Model */
export type TalentSubmissionProfileModel = {
  __typename?: 'TalentSubmissionProfileModel';
  created?: Maybe<Scalars['DateTime']>;
  stageName?: Maybe<Scalars['String']>;
};

/** Talent Submission Report Input Arguments */
export type TalentSubmissionReportCreateInput = {
  dateFrom: Scalars['DateTime'];
  dateTo: Scalars['DateTime'];
  profileId: Scalars['Int'];
};

/** Talent Union */
export type TalentUnion = {
  __typename?: 'TalentUnion';
  /** child objects */
  childObjects: Array<TalentUnion>;
  /** code */
  code: Scalars['String'];
  /** country */
  country?: Maybe<Country>;
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** parent object */
  parentObject?: Maybe<TalentUnion>;
  /** Represents project union for all true values */
  projectEnabled: Scalars['Boolean'];
  /** Selectable Flag */
  selectable: Scalars['Boolean'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
  /** Represents talent union for all true values */
  talentEnabled: Scalars['Boolean'];
};

export const TalentUnionEnum = {
  Actra: 'ACTRA',
  Aea: 'AEA',
  Antc: 'ANTC',
  BayAreaTheatre: 'BAY_AREA_THEATRE',
  BusinessTheatreEvents: 'BUSINESS_THEATRE_EVENTS',
  Cabaret: 'CABARET',
  Caea: 'CAEA',
  Casino: 'CASINO',
  Cat: 'CAT',
  Commercial: 'COMMERCIAL',
  CorporateEducationalNonBroadcast: 'CORPORATE_EDUCATIONAL_NON_BROADCAST',
  Corst: 'CORST',
  Cost: 'COST',
  DinnerTheatre: 'DINNER_THEATRE',
  DinnerTheatreArtist: 'DINNER_THEATRE_ARTIST',
  Disneyworld: 'DISNEYWORLD',
  Eligible: 'ELIGIBLE',
  Equity: 'EQUITY',
  Ficore: 'FICORE',
  GuestArtist: 'GUEST_ARTIST',
  Hat: 'HAT',
  Loa: 'LOA',
  LoaNyc: 'LOA_NYC',
  LortNonRep: 'LORT_NON_REP',
  LortRep: 'LORT_REP',
  LosAngelesTransitional_99SeatTheatreCode:
    'LOS_ANGELES_TRANSITIONAL_99_SEAT_THEATRE_CODE',
  LowBudgetFilm: 'LOW_BUDGET_FILM',
  Meaa: 'MEAA',
  Member: 'MEMBER',
  MidsizeTheatres: 'MIDSIZE_THEATRES',
  Mini: 'MINI',
  ModifiedBat: 'MODIFIED_BAT',
  ModifiedLowBudgetFilm: 'MODIFIED_LOW_BUDGET_FILM',
  Msua: 'MSUA',
  MusicVideo: 'MUSIC_VIDEO',
  Neat: 'NEAT',
  NewMedia: 'NEW_MEDIA',
  Nola: 'NOLA',
  NonUnion: 'NON_UNION',
  NoUnionAffiliation: 'NO_UNION_AFFILIATION',
  Oat: 'OAT',
  OffBroadway: 'OFF_BROADWAY',
  Other: 'OTHER',
  OutdoorDrama: 'OUTDOOR_DRAMA',
  ProductionDisney: 'PRODUCTION_DISNEY',
  ProductionLeague: 'PRODUCTION_LEAGUE',
  Rmta: 'RMTA',
  SagAftra: 'SAG_AFTRA',
  ShortEngagementTouringAgreement: 'SHORT_ENGAGEMENT_TOURING_AGREEMENT',
  ShortFilm: 'SHORT_FILM',
  ShowcaseNy: 'SHOWCASE_NY',
  SoundRecordings: 'SOUND_RECORDINGS',
  SpecialAgreement: 'SPECIAL_AGREEMENT',
  SpecialAppearance: 'SPECIAL_APPEARANCE',
  SpecialProductionCentral: 'SPECIAL_PRODUCTION_CENTRAL',
  SpecialProductionEastern: 'SPECIAL_PRODUCTION_EASTERN',
  SpecialProductionWestern: 'SPECIAL_PRODUCTION_WESTERN',
  Spt: 'SPT',
  StudentFilm: 'STUDENT_FILM',
  Television: 'TELEVISION',
  TheatricalFilm: 'THEATRICAL_FILM',
  Transition: 'TRANSITION',
  Tya: 'TYA',
  UbcpActra: 'UBCP_ACTRA',
  Uda: 'UDA',
  UltraLowBudgetFilm: 'ULTRA_LOW_BUDGET_FILM',
  Urta: 'URTA',
  Wclo: 'WCLO',
  Workshop: 'WORKSHOP',
} as const;

export type TalentUnionEnum = typeof TalentUnionEnum[keyof typeof TalentUnionEnum];
/** Input type for talent union */
export type TalentUnionInput = {
  unionId: Scalars['ID'];
  unionMemberId?: Maybe<Scalars['String']>;
};

export type TalentUnionModel = {
  __typename?: 'TalentUnionModel';
  code?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  talentMembershipId?: Maybe<Scalars['String']>;
};

/** Tattoo object */
export type Tattoo = {
  __typename?: 'Tattoo';
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

/** Input type for search by tattoo attributes */
export type TattooInput = {
  /** tattoo id list */
  tattooId?: Maybe<Array<Scalars['ID']>>;
  /** tattoo description */
  tattooNote?: Maybe<Scalars['String']>;
};

export const TileSchemaEnum = {
  Default: 'Default',
  PresentationPick: 'PresentationPick',
} as const;

export type TileSchemaEnum = typeof TileSchemaEnum[keyof typeof TileSchemaEnum];
/** Publication Setting object */
export type TileSchemaValue = {
  __typename?: 'TileSchemaValue';
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

export const TileSchemeValueEnum = {
  Cb: 'CB',
  PackagePick_1: 'PACKAGE_PICK_1',
  PresentationPick_1: 'PRESENTATION_PICK_1',
  1: '_1',
  2: '_2',
  3: '_3',
  4: '_4',
  5: '_5',
  6: '_6',
} as const;

export type TileSchemeValueEnum =
  typeof TileSchemeValueEnum[keyof typeof TileSchemeValueEnum];
/** Time Zone object */
export type TimeZone = {
  __typename?: 'TimeZone';
  abbreviation?: Maybe<Scalars['String']>;
  /** code */
  code: Scalars['String'];
  codeBrowser: Scalars['String'];
  daylightSavingsCode?: Maybe<Scalars['String']>;
  dstOffset: Scalars['Float'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  gmtOffset: Scalars['Float'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name?: Maybe<Scalars['String']>;
  rawOffset: Scalars['Float'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
  standardName: Scalars['String'];
};

/** Account info */
export type UnclaimedAccount = {
  __typename?: 'UnclaimedAccount';
  accountOrganization?: Maybe<Array<OrganizationInfo>>;
  accountOrganizationDivisionsAccess: Array<Organization>;
  accountOrganizationDivisionsAccessCount?: Maybe<Scalars['Float']>;
  /** Account status object */
  accountStatus?: Maybe<AccountStatus>;
  accountStatusId: Scalars['Int'];
  accountSystemRoles: Array<SystemRole>;
  accountUrlTypes?: Maybe<Array<AccountUrlType>>;
  artists: Array<Artist>;
  /** Account billing info */
  billingInfo: AccountBillingInfo;
  /** Country object */
  country?: Maybe<Country>;
  countryId: Scalars['Int'];
  created: Scalars['DateTime'];
  /** Divisions that user belongs to */
  divisions?: Maybe<Array<Organization>>;
  email: Scalars['String'];
  /** Holds the generated token value, till it gets expired or the email update verification done successfully. */
  emailResetToken?: Maybe<Scalars['String']>;
  /** Holds the value to reset the original account email till it gets verified */
  emailToReset?: Maybe<Scalars['String']>;
  /** Returns organization features */
  features?: Maybe<Array<Feature>>;
  firstName: Scalars['String'];
  former?: Maybe<Scalars['Boolean']>;
  /** Primary ID */
  id: Scalars['Int'];
  ipcInfo: IpcInfo;
  /** Checks if user is in role Independent Project Creator */
  isAccountIPC: Scalars['Boolean'];
  isAdmin: Scalars['Boolean'];
  /** Checks if user is in role Casting Director */
  isCCD: Scalars['Boolean'];
  /** Checks if user is in role Independent Project Creator */
  isIPC: Scalars['Boolean'];
  /** Checks if the current/switched user is PC or not */
  isInPCContext: Scalars['Boolean'];
  lastArtistId?: Maybe<Scalars['Int']>;
  lastLogin?: Maybe<Scalars['DateTime']>;
  lastName: Scalars['String'];
  /** Legacy email */
  legacyEmail?: Maybe<Scalars['String']>;
  /** Legacy instance */
  legacyInstance?: Maybe<Scalars['String']>;
  /** Legacy login */
  legacyLogin?: Maybe<Scalars['String']>;
  linkedAccountDivisionCount?: Maybe<Scalars['Float']>;
  linkedAccountOrganization?: Maybe<Array<Organization>>;
  linkedOrganization?: Maybe<Scalars['Float']>;
  linkedToAccountId?: Maybe<Scalars['Int']>;
  loginAttemptCount?: Maybe<Scalars['Int']>;
  loginAttemptFailedAt?: Maybe<Scalars['DateTime']>;
  notificationSubscriptions: Array<NotificationTypeNotificationSubscription>;
  organizationDivisionsCount?: Maybe<Scalars['Float']>;
  /** Organizations that user belongs to */
  organizations?: Maybe<Array<Organization>>;
  passwordHash?: Maybe<Scalars['String']>;
  phone: Scalars['String'];
  profileId?: Maybe<Scalars['Float']>;
  /** Roster invitation token to hold the invitation token till logged in user will not create the profile using it */
  rosterInvitationToken?: Maybe<Scalars['String']>;
  subscription?: Maybe<ActiveSubscriptionModel>;
  /** system roles */
  systemRoles?: Maybe<Array<Scalars['String']>>;
  systemRolesIds?: Maybe<Array<Scalars['Float']>>;
  termsOfUse: Scalars['Boolean'];
  /** Time zone object */
  timeZone?: Maybe<TimeZone>;
  /** Updated at Date */
  updated?: Maybe<Scalars['DateTime']>;
};

/** Account info */
export type UnclaimedAccountAccountOrganizationArgs = {
  systemRoleCode?: Maybe<Array<Scalars['String']>>;
};

/** Account info */
export type UnclaimedAccountOrganizationsArgs = {
  systemRoleCode?: Maybe<Array<Scalars['String']>>;
};

export type UnderBust = {
  __typename?: 'UnderBust';
  /** Imperial Feet Inches */
  IMPERIAL_FEET_INCHES?: Maybe<Scalars['String']>;
  /** Imperial Inches */
  IMPERIAL_INCHES: Scalars['Float'];
  /** Metric Centimeters */
  METRIC_CENTIMETERS: Scalars['Int'];
  /** Centimeters */
  cm: Scalars['Int'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** Inches */
  inch: Scalars['Float'];
  /** Inches rounded */
  inchRounded: Scalars['String'];
  /** Show in imperial UI */
  showInImperialUI: Scalars['Boolean'];
};

/** Unique Attributes */
export type UniqueAttribute = {
  __typename?: 'UniqueAttribute';
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

/** Unit System object */
export type UnitSystem = {
  __typename?: 'UnitSystem';
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

/** Updates a user account based on given input values */
export type UpdateAccountInput = {
  accountId?: Maybe<Scalars['Int']>;
  countryId?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  /** Holds the generated token value, till it gets expired or the email update verification done successfully. */
  emailResetToken?: Maybe<Scalars['String']>;
  /** Holds email reset token creation date and time till token gets expired or the email update verification done successfully. */
  emailResetTokenCreated?: Maybe<Scalars['DateTime']>;
  /** Used for holding the new email value going to be updated to the actual account email */
  emailToReset?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  loginAttemptCount?: Maybe<Scalars['Int']>;
  loginAttemptFailedAt?: Maybe<Scalars['DateTime']>;
  phone?: Maybe<Scalars['String']>;
  rosterInvitationToken?: Maybe<Scalars['String']>;
  timezoneId?: Maybe<Scalars['Int']>;
};

export type UpdateDueDateInput = {
  dueDate?: Maybe<Scalars['DateTime']>;
  dueDateTimeZoneId?: Maybe<Scalars['Int']>;
};

/** Update Legacy Profile Result Object */
export type UpdateLegacyResult = {
  __typename?: 'UpdateLegacyResult';
  /** Update Legacy Profile Status */
  status?: Maybe<Scalars['Int']>;
  /** New JWT Token For Redirect */
  token?: Maybe<AuthTokenItem>;
};

/** Update List Name Input */
export type UpdateListNameInput = {
  /** List Id */
  listId: Scalars['Float'];
  /** List Name */
  listName: Scalars['String'];
};

export type UpdateMediaInput = {
  length?: Maybe<Scalars['Int']>;
  mediaId: Scalars['Int'];
  mediaModerationStatusCode?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  paid?: Maybe<Scalars['Boolean']>;
  size?: Maybe<Scalars['Int']>;
  tag?: Maybe<Scalars['String']>;
};

/** Update Note Input Type */
export type UpdateNoteInput = {
  /** Text of the note */
  comment?: Maybe<Scalars['String']>;
  /** Entity ID that note will be assigned to */
  entityId?: Maybe<Scalars['Int']>;
  /** Entity Type CODE */
  entityTypeCode?: Maybe<Scalars['String']>;
  /** Note ID which should be updated */
  noteId: Scalars['Int'];
  /** Note Modifier CODE */
  noteModifierCode?: Maybe<Scalars['String']>;
  /** Note Type CODE */
  noteTypeCode?: Maybe<Scalars['String']>;
};

/** Input type for Organization update */
export type UpdateOrganizationInput = {
  abbreviation?: Maybe<Scalars['String']>;
  address?: Maybe<Array<AddressInput>>;
  contactList?: Maybe<Array<ContactInput>>;
  countryId?: Maybe<Scalars['Int']>;
  creatorId?: Maybe<Scalars['Int']>;
  deletedContactIds?: Maybe<Array<Scalars['Int']>>;
  diversityDisclaimer?: Maybe<Scalars['String']>;
  divisionFeaturesList?: Maybe<Array<FeatureInput>>;
  /** Devisions could have multiple locations/dma's */
  dmaIds?: Maybe<Array<Scalars['Int']>>;
  featureIds?: Maybe<Array<Scalars['Int']>>;
  logoMediaId?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  organizationId: Scalars['Int'];
  organizationParentId?: Maybe<Scalars['Int']>;
  organizationStatusCode?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  profileListId?: Maybe<Scalars['Int']>;
  projectCastingAssistant?: Maybe<Scalars['String']>;
  projectCastingAssociate?: Maybe<Scalars['String']>;
  projectCastingDirector?: Maybe<Scalars['String']>;
  representationAgeCategoryIds?: Maybe<Array<Scalars['Int']>>;
  representationCategoryIds?: Maybe<Array<Scalars['Int']>>;
  representationTypeId?: Maybe<Scalars['Int']>;
  scheduleAddressNote?: Maybe<Scalars['String']>;
  systemRoleId?: Maybe<Scalars['Int']>;
  tileSchemeId?: Maybe<Scalars['Int']>;
  websiteUrl?: Maybe<Scalars['String']>;
};

/** Update Organization Result Object */
export type UpdateOrganizationResult = {
  __typename?: 'UpdateOrganizationResult';
  /** Update Organization Status */
  status?: Maybe<Scalars['Int']>;
  /** New JWT Token For Redirect */
  token?: Maybe<AuthTokenItem>;
};

/** Determined location Address Input for creating IPC project */
export type UpdatePcProjectDeterminedAddressInput = {
  /** City */
  city?: Maybe<Scalars['ID']>;
  /** Country CODE */
  countryCode?: Maybe<Scalars['ID']>;
  /** Location notes */
  locationNotes?: Maybe<Scalars['ID']>;
};

/** Input type for PC Project update */
export type UpdatePcProjectInput = {
  adAgency?: Maybe<Scalars['String']>;
  additionalProvisions?: Maybe<Scalars['String']>;
  /** Uploaded media ids */
  attachmentIds?: Maybe<Array<Scalars['ID']>>;
  /** Project sides visibility CODE */
  attachmentVisibilityCode?: Maybe<Scalars['String']>;
  canTalentSubmitSelfTape?: Maybe<Scalars['Boolean']>;
  castingAssistant?: Maybe<Scalars['String']>;
  castingAssociate?: Maybe<Scalars['String']>;
  castingDirector?: Maybe<Scalars['String']>;
  conflictIds?: Maybe<Array<Scalars['ID']>>;
  conflictNote?: Maybe<Scalars['String']>;
  contactEmail?: Maybe<Scalars['String']>;
  contactInfoPermissions?: Maybe<Scalars['Boolean']>;
  contactPhone?: Maybe<Scalars['String']>;
  /** Contract Status Code */
  contractStatusCode?: Maybe<Scalars['String']>;
  determinedLocationInput?: Maybe<UpdatePcProjectDeterminedAddressInput>;
  director?: Maybe<Scalars['String']>;
  executiveProducer?: Maybe<Scalars['String']>;
  hidden?: Maybe<Scalars['Boolean']>;
  hideProjectRate?: Maybe<Scalars['Boolean']>;
  internalName?: Maybe<Scalars['String']>;
  isAuditionInPerson?: Maybe<Scalars['Boolean']>;
  isSpecificLocation?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  network?: Maybe<Scalars['String']>;
  newSeriesName?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  photographer?: Maybe<Scalars['String']>;
  producer?: Maybe<Scalars['String']>;
  productionCompany?: Maybe<Scalars['String']>;
  projectId: Scalars['ID'];
  projectOrganization?: Maybe<Array<ProjectOrganizationInput>>;
  projectParentId?: Maybe<Scalars['ID']>;
  projectStatusCode?: Maybe<Scalars['String']>;
  projectStatusId?: Maybe<Scalars['ID']>;
  projectTypeId?: Maybe<Scalars['ID']>;
  projectUnionId?: Maybe<Scalars['ID']>;
  rate?: Maybe<Scalars['String']>;
  /** IPC project release location codes */
  releaseLocations?: Maybe<Array<Scalars['String']>>;
  requestBrief?: Maybe<Scalars['Boolean']>;
  requestBriefInstruction?: Maybe<Scalars['String']>;
  specificLocationInput?: Maybe<UpdatePcProjectSpecificAddressInput>;
  studio?: Maybe<Scalars['String']>;
  submissionsDueBy?: Maybe<Scalars['DateTime']>;
  synopsis?: Maybe<Scalars['String']>;
  tileSchemeId?: Maybe<Scalars['ID']>;
  unionContractId?: Maybe<Scalars['String']>;
  usage?: Maybe<Scalars['String']>;
  writer?: Maybe<Scalars['String']>;
};

/** Specific location Address Input for creating IPC project */
export type UpdatePcProjectSpecificAddressInput = {
  /** Address Line 1 */
  addressLine1?: Maybe<Scalars['ID']>;
  /** Address Line 2 */
  addressLine2?: Maybe<Scalars['String']>;
  /** City */
  city?: Maybe<Scalars['ID']>;
  /** Country CODE */
  countryCode?: Maybe<Scalars['ID']>;
  /** Location notes */
  locationNotes?: Maybe<Scalars['String']>;
  /** ZIP/Postal Code */
  postalCode?: Maybe<Scalars['ID']>;
  /** State / Province Id */
  stateId?: Maybe<Scalars['Int']>;
};

/** Update profile conflict input */
export type UpdateProfileConflictInput = {
  conflictId?: Maybe<Scalars['Int']>;
  expiration?: Maybe<Scalars['DateTime']>;
  note?: Maybe<Scalars['String']>;
  profileConflictId: Scalars['Int'];
};

/** Input type for Update Profile Vehicle */
export type UpdateProfileVehicleInput = {
  /** Vehicle name */
  name?: Maybe<Scalars['String']>;
  /** Vehicle type make id */
  vehicleTypeMakeId: Scalars['Float'];
  /** Vehicle year */
  year?: Maybe<Scalars['Float']>;
};

/** Input type for Project update */
export type UpdateProjectInput = {
  adAgency?: Maybe<Scalars['String']>;
  additionalProvisions?: Maybe<Scalars['String']>;
  /** Uploaded media ids */
  attachmentIds?: Maybe<Array<Scalars['ID']>>;
  /** Project sides visibility CODE */
  attachmentVisibilityCode?: Maybe<Scalars['String']>;
  castingAssistant?: Maybe<Scalars['String']>;
  castingAssociate?: Maybe<Scalars['String']>;
  castingDirector?: Maybe<Scalars['String']>;
  conflictIds?: Maybe<Array<Scalars['ID']>>;
  conflictNote?: Maybe<Scalars['String']>;
  contactEmail?: Maybe<Scalars['String']>;
  contactInfoPermissions?: Maybe<Scalars['Boolean']>;
  contactPhone?: Maybe<Scalars['String']>;
  /** Contract Status Code */
  contractStatusCode?: Maybe<Scalars['String']>;
  director?: Maybe<Scalars['String']>;
  executiveProducer?: Maybe<Scalars['String']>;
  hidden?: Maybe<Scalars['Boolean']>;
  hideProjectRate?: Maybe<Scalars['Boolean']>;
  internalName?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  network?: Maybe<Scalars['String']>;
  newSeriesName?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  photographer?: Maybe<Scalars['String']>;
  producer?: Maybe<Scalars['String']>;
  productionCompany?: Maybe<Scalars['String']>;
  projectId: Scalars['ID'];
  projectOrganization?: Maybe<Array<ProjectOrganizationInput>>;
  projectParentId?: Maybe<Scalars['ID']>;
  projectStatusCode?: Maybe<Scalars['String']>;
  projectStatusId?: Maybe<Scalars['ID']>;
  projectTypeId?: Maybe<Scalars['ID']>;
  projectUnionId?: Maybe<Scalars['ID']>;
  rate?: Maybe<Scalars['String']>;
  /** IPC project release location codes */
  releaseLocations?: Maybe<Array<Scalars['String']>>;
  requestBrief?: Maybe<Scalars['Boolean']>;
  requestBriefInstruction?: Maybe<Scalars['String']>;
  studio?: Maybe<Scalars['String']>;
  submissionsDueBy?: Maybe<Scalars['DateTime']>;
  synopsis?: Maybe<Scalars['String']>;
  tileSchemeId?: Maybe<Scalars['ID']>;
  unionContractId?: Maybe<Scalars['String']>;
  usage?: Maybe<Scalars['String']>;
  writer?: Maybe<Scalars['String']>;
};

/** Update Representative List Input */
export type UpdateRepresentativeListInput = {
  /** List Id */
  listId: Scalars['Float'];
  /** List of Representative List Ids */
  representativeListIds: Array<Scalars['BigInt']>;
};

/** Input type for role media */
export type UpdateRoleMediaInput = {
  /** Is this media marked for deletion */
  isDeleted: Scalars['Boolean'];
  /** Is this sides media */
  isSides: Scalars['Boolean'];
  /** Media id for creating new media record. */
  mediaId: Scalars['Float'];
  /** Name */
  name?: Maybe<Scalars['String']>;
  /** Role-Media relation ID */
  roleMediaId?: Maybe<Scalars['Float']>;
};

/** Update Schedule Input */
export type UpdateScheduleInput = {
  /** Address Id */
  addressId?: Maybe<Scalars['Int']>;
  /** Is location hidden */
  isLocationHidden?: Maybe<Scalars['Boolean']>;
  /** Schedule Name */
  name?: Maybe<Scalars['String']>;
  /** Note */
  note?: Maybe<Scalars['String']>;
  /** Project Id */
  projectId?: Maybe<Scalars['Int']>;
  /** Schedule Date */
  scheduleDate?: Maybe<Scalars['String']>;
  /** Schedule Id */
  scheduleId: Scalars['Int'];
  /** Schedule Type Code */
  scheduleTypeCode?: Maybe<Scalars['String']>;
  /** Time Zone CODE */
  timeZoneCode?: Maybe<Scalars['String']>;
};

/** Input type for updating submission status */
export type UpdateSubmissionStatusInput = {
  /** ID of the creator */
  createdBy?: Maybe<Scalars['Int']>;
  /** New submissionstatus to set */
  newSubmissionStatusCode: Scalars['String'];
  /** Submission ID */
  submissionId: Scalars['BigInt'];
};

/** Url Type object */
export type UrlType = {
  __typename?: 'UrlType';
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

/** Organization Object */
export type UserOrganization = {
  __typename?: 'UserOrganization';
  /** Address ID */
  addressId?: Maybe<Scalars['Int']>;
  /** Representation age categories */
  ageCategories?: Maybe<Array<Scalars['Int']>>;
  /** City */
  city?: Maybe<Scalars['String']>;
  /** Company Address Line 1 */
  companyAddressLine1?: Maybe<Scalars['String']>;
  /** Company Address Line 2 */
  companyAddressLine2?: Maybe<Scalars['String']>;
  /** Company Name */
  companyName?: Maybe<Scalars['String']>;
  /** Company Phone */
  companyPhone?: Maybe<Scalars['String']>;
  /** Contact ID */
  contactId?: Maybe<Scalars['Int']>;
  /** Country */
  countryId?: Maybe<Scalars['Int']>;
  /** DMA id */
  dmaId?: Maybe<Scalars['Int']>;
  /** Organization ID */
  id?: Maybe<Scalars['Int']>;
  /** Organization Status */
  organizationStatus?: Maybe<Scalars['String']>;
  /** Parent Organization ID */
  parentOrganizationId?: Maybe<Scalars['Int']>;
  /** Primary Contacts Email */
  primaryContactEmail?: Maybe<Scalars['String']>;
  /** Primary Contacts Name */
  primaryContactName?: Maybe<Scalars['String']>;
  /** Primary Contacts Phone Number */
  primaryContactPhoneNumber?: Maybe<Scalars['String']>;
  /** Primary working location */
  primaryWorkingLocation?: Maybe<Array<Scalars['Int']>>;
  /** Publishing categories */
  publishingCategories?: Maybe<Array<Scalars['Int']>>;
  /** State id */
  stateId?: Maybe<Scalars['Int']>;
  /** Zip */
  zip?: Maybe<Scalars['String']>;
};

/** VehicleMake object */
export type VehicleMake = {
  __typename?: 'VehicleMake';
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

/** Input type for vehicle search */
export type VehicleSearchInput = {
  /** Vehicle Make ID */
  makeId?: Maybe<Scalars['Int']>;
  /** Vehicle name */
  name?: Maybe<Scalars['String']>;
  /** Vehicle type ID */
  typeId?: Maybe<Scalars['Int']>;
  /** Year range of vehicle */
  yearRange?: Maybe<IdRangeInput>;
};

/** Vehicle Type object */
export type VehicleType = {
  __typename?: 'VehicleType';
  /** child objects */
  childObjects: Array<VehicleType>;
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** parent object */
  parentObject?: Maybe<VehicleType>;
  /** Selectable Flag */
  selectable: Scalars['Boolean'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

/** Vehicle Type Make */
export type VehicleTypeMake = {
  __typename?: 'VehicleTypeMake';
  /** Vehicle type make id */
  id: Scalars['Float'];
  /** Vehicle make */
  make: VehicleMake;
  /** Vehicle type */
  type: VehicleType;
};

export type VerifyAccountByCookieInput = {
  /** legacy instance for onboarding */
  instance: Scalars['String'];
  secureCookieToken: Scalars['String'];
};

/** login with B21 or BAU credentials */
export type VerifyAccountInput = {
  /** legacy instance for onboarding */
  instance?: Maybe<Scalars['String']>;
  /** accitional account claiming for onboarding */
  migratedAccountID?: Maybe<Scalars['Float']>;
  /** B21 email or legacy username */
  name: Scalars['String'];
  /** B21 password or legacy password */
  password: Scalars['String'];
};

export type Waist = {
  __typename?: 'Waist';
  /** Imperial Feet Inches */
  IMPERIAL_FEET_INCHES?: Maybe<Scalars['String']>;
  /** Imperial Inches */
  IMPERIAL_INCHES: Scalars['Float'];
  /** Metric Centimeters */
  METRIC_CENTIMETERS: Scalars['Int'];
  /** Centimeters */
  cm: Scalars['Int'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** Inches */
  inch: Scalars['Float'];
  /** Inches rounded */
  inchRounded: Scalars['String'];
  /** Show in imperial UI */
  showInImperialUI: Scalars['Boolean'];
};

/** Wardrobe object */
export type Wardrobe = {
  __typename?: 'Wardrobe';
  /** child objects */
  childObjects: Array<Wardrobe>;
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** parent object */
  parentObject?: Maybe<Wardrobe>;
  /** Selectable Flag */
  selectable: Scalars['Boolean'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

/** General weight object */
export type Weight = {
  __typename?: 'Weight';
  /** Imperial pounds */
  IMPERIAL_LBS: Scalars['Int'];
  /** Metric kg */
  METRIC_KG: Scalars['Float'];
  /** Is this enabled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  kg: Scalars['Float'];
  kgRounded: Scalars['Float'];
  /** pounds */
  lbs: Scalars['Int'];
  /** Show in imperial UI */
  showInMetricUI: Scalars['Boolean'];
};

/** Context object for welcome email. */
export type WelcomeContext = {
  __typename?: 'WelcomeContext';
  receiverEmail: Scalars['String'];
  receiverName: Scalars['String'];
};

export type WelcomeContextNotificationContextAndRecipient = {
  __typename?: 'WelcomeContextNotificationContextAndRecipient';
  context: WelcomeContext;
  to?: Maybe<Scalars['String']>;
  toAccountId?: Maybe<Scalars['Int']>;
  toOrgId?: Maybe<Scalars['Int']>;
  toProfileId?: Maybe<Scalars['Int']>;
};

export type WfAddress = {
  __typename?: 'WfAddress';
  city?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  countryName?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  line1?: Maybe<Scalars['String']>;
  line2?: Maybe<Scalars['String']>;
  line3?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  /** Postal code */
  postalCode: Scalars['String'];
  state?: Maybe<Scalars['String']>;
};

/** Base object */
export type WfBasicSettingModel = {
  __typename?: 'WfBasicSettingModel';
  /** code */
  code: Scalars['String'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
};

export type WfChatMessage = {
  __typename?: 'WfChatMessage';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  messageBody: Scalars['String'];
  messageType: Scalars['String'];
  ownMessage: Scalars['Boolean'];
  senderAccount: ChatSenderAccount;
  senderAccountId?: Maybe<Scalars['Int']>;
  senderOrgId?: Maybe<Scalars['Int']>;
  topicKey: Scalars['String'];
};

export type WfComplexSetting = {
  __typename?: 'WfComplexSetting';
  childObjects: Array<WfComplexSetting>;
  code: Scalars['String'];
  enabled: Scalars['Boolean'];
  id: Scalars['String'];
  name: Scalars['String'];
  parentObject?: Maybe<Scalars['Int']>;
  selectable: Scalars['Boolean'];
  sortOrder?: Maybe<Scalars['Int']>;
};

export type WfContinent = {
  __typename?: 'WfContinent';
  code: Scalars['String'];
  enabled: Scalars['Boolean'];
  id: Scalars['String'];
  name: Scalars['String'];
  sortOrder?: Maybe<Scalars['Int']>;
};

export type WfContractStatus = {
  __typename?: 'WfContractStatus';
  code: Scalars['String'];
  enabled: Scalars['Boolean'];
  id: Scalars['String'];
  name: Scalars['String'];
  sortOrder?: Maybe<Scalars['Int']>;
};

export type WfCountry = {
  __typename?: 'WfCountry';
  code: Scalars['String'];
  continent: WfContinent;
  currency?: Maybe<WfCurrency>;
  enabled: Scalars['Boolean'];
  id: Scalars['String'];
  name: Scalars['String'];
  regions?: Maybe<Array<WfRegion>>;
  sortOrder?: Maybe<Scalars['Int']>;
  unitSystem: WfUnitSystem;
};

/** Credit Attribute */
export type WfCredit = {
  __typename?: 'WfCredit';
  /** Created at Date */
  created?: Maybe<Scalars['DateTime']>;
  /** Credit Sort ordering */
  creditOrder: Scalars['Int'];
  /** The director of the Project */
  director?: Maybe<Scalars['String']>;
  guid: Scalars['String'];
  /** Highlighted */
  highlighted: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** Profile Credit Type Id */
  profileCreditTypeId: Scalars['Int'];
  /** Profile ID */
  profileId: Scalars['Int'];
  /** Role title */
  role?: Maybe<Scalars['String']>;
  /** Credit Type Sort ordering */
  sortOrder: Scalars['Int'];
  /** Title */
  title?: Maybe<Scalars['String']>;
  /** Updated at Date */
  updated: Scalars['DateTime'];
  /** Year */
  year?: Maybe<Scalars['Int']>;
};

export type WfCurrency = {
  __typename?: 'WfCurrency';
  code: Scalars['String'];
  enabled: Scalars['Boolean'];
  id: Scalars['String'];
  name: Scalars['String'];
  sortOrder?: Maybe<Scalars['Int']>;
  symbol: Scalars['String'];
};

export type WfDma = {
  __typename?: 'WfDma';
  code: Scalars['String'];
  enabled: Scalars['Boolean'];
  id: Scalars['String'];
  name: Scalars['String'];
  region?: Maybe<WfRegion>;
  sortOrder?: Maybe<Scalars['Int']>;
};

export type WfEntityType = {
  __typename?: 'WfEntityType';
  code: Scalars['String'];
  enabled: Scalars['Boolean'];
  id: Scalars['ID'];
  name: Scalars['String'];
  sortOrder?: Maybe<Scalars['Int']>;
};

/** Measurement object */
export type WfMeasurementModel = {
  __typename?: 'WfMeasurementModel';
  /** Centimeters */
  cm: Scalars['Int'];
  /** Primary ID */
  id: Scalars['ID'];
  /** Inches */
  inch: Scalars['Float'];
};

export type WfMedia = {
  __typename?: 'WfMedia';
  fileKey?: Maybe<Scalars['String']>;
  fileType?: Maybe<WfMediaFileType>;
  filename: Scalars['String'];
  guid: Scalars['String'];
  isLocked?: Maybe<Scalars['Boolean']>;
  mediaId: Scalars['Int'];
  mediaStatus?: Maybe<WfMediaStatus>;
  mediaStorageStatus?: Maybe<WfMediaStatus>;
  mediaType?: Maybe<WfMediaType>;
  name?: Maybe<Scalars['String']>;
  tag?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<WfMedia>;
  thumbnailUrl?: Maybe<Scalars['String']>;
  transformation?: Maybe<WfMediaTransformation>;
  url?: Maybe<Scalars['String']>;
};

/** Media Count */
export type WfMediaCount = {
  __typename?: 'WfMediaCount';
  /** Count of the media */
  count?: Maybe<Scalars['Int']>;
  /** Media Type */
  type?: Maybe<WfMediaType>;
};

export type WfMediaFileType = {
  __typename?: 'WfMediaFileType';
  code: Scalars['String'];
  id: Scalars['ID'];
  mediaType: WfMediaType;
  name: Scalars['String'];
};

export type WfMediaStatus = {
  __typename?: 'WfMediaStatus';
  code: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type WfMediaStorageStatus = {
  __typename?: 'WfMediaStorageStatus';
  code: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type WfMediaTransformation = {
  __typename?: 'WfMediaTransformation';
  height?: Maybe<Scalars['Float']>;
  rotate?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  xAxis?: Maybe<Scalars['Float']>;
  yAxis?: Maybe<Scalars['Float']>;
};

export type WfMediaType = {
  __typename?: 'WfMediaType';
  code: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

/** Note object type */
export type WfNote = {
  __typename?: 'WfNote';
  /** Account id who created the note */
  accountId: Scalars['Int'];
  /** Comment */
  comment: Scalars['String'];
  /** Created Date */
  created: Scalars['String'];
  /** Note Id */
  id: Scalars['Int'];
  noteModifier?: Maybe<WfNoteModifier>;
};

export type WfNoteModifier = {
  __typename?: 'WfNoteModifier';
  code: Scalars['String'];
  enabled: Scalars['Boolean'];
  entityType: WfEntityType;
  id: Scalars['ID'];
  name: Scalars['String'];
  sortOrder?: Maybe<Scalars['Int']>;
};

/** Organization object */
export type WfOrganization = {
  __typename?: 'WfOrganization';
  /** Abbreviation */
  abbreviation?: Maybe<Scalars['String']>;
  /** Primary ID */
  id: Scalars['Int'];
  /** Name */
  name?: Maybe<Scalars['String']>;
};

export type WfProfile = {
  __typename?: 'WfProfile';
  /** Identify the access granted by agency or not. */
  accessGranted: Scalars['Boolean'];
  artistId?: Maybe<Scalars['Float']>;
  /** Talent's cover */
  cover?: Maybe<WfMedia>;
  /**
   * Talent's cover
   * @deprecated Replaced with cover field
   */
  coverUrl?: Maybe<Scalars['String']>;
  credits?: Maybe<Array<WfCredit>>;
  creditsCount: Scalars['Int'];
  /** Date of birth */
  dateOfBirth?: Maybe<Scalars['DateTime']>;
  /** Talent's email */
  email?: Maybe<Scalars['String']>;
  guid?: Maybe<Scalars['String']>;
  /** HairColor object */
  hairColor?: Maybe<WfBasicSettingModel>;
  /** HairStyle object */
  hairStyle?: Maybe<WfBasicSettingModel>;
  hasAuditionHistory?: Maybe<Scalars['Boolean']>;
  hasResume?: Maybe<Scalars['Boolean']>;
  /** Height object */
  height?: Maybe<WfMeasurementModel>;
  id: Scalars['Int'];
  /** If Profile is overscaled */
  isOverscaled?: Maybe<Scalars['Boolean']>;
  /** Identify the personal or represented profile. */
  isPersonal: Scalars['Boolean'];
  lastNote?: Maybe<WfNote>;
  /** All profile media */
  mediaAssets: Array<WfProfileMedia>;
  mediaSummary?: Maybe<Array<WfMediaCount>>;
  /** Is minor */
  minor?: Maybe<Scalars['Boolean']>;
  /**
   * Talent's name
   * @deprecated Deprecated. replaced with stageName field
   */
  name?: Maybe<Scalars['String']>;
  /** profile note */
  note?: Maybe<Scalars['String']>;
  /** all notes */
  notes?: Maybe<Array<WfNote>>;
  organization?: Maybe<WfOrganization>;
  organizations: Array<WfOrganization>;
  /** Overscale Note */
  overscaleNote?: Maybe<Scalars['String']>;
  /** Talents phone */
  phone?: Maybe<Scalars['String']>;
  /** The minimum age a talent can play */
  playableAgeMax?: Maybe<Scalars['Float']>;
  /** The maximum age a talent can play */
  playableAgeMin?: Maybe<Scalars['Float']>;
  /** Profession */
  profession?: Maybe<Scalars['String']>;
  /** Access Token of a Profile, generated by Granting Access or Creating a Profile */
  profileAccessToken?: Maybe<Scalars['String']>;
  profileMainDivision?: Maybe<WfOrganization>;
  profileMainOrganization?: Maybe<WfOrganization>;
  /** Profile Status Object */
  profileStatus?: Maybe<WfBasicSettingModel>;
  resume?: Maybe<WfProfileMedia>;
  /** Talent's stage name */
  stageName: Scalars['String'];
  /** Talent unions */
  talentUnions: Array<WfTalentProfileUnion>;
  /** Weight object */
  weight?: Maybe<WfWeight>;
  /** Working Locations */
  workingLocations: Array<WfDma>;
};

/** Profile Media */
export type WfProfileMedia = {
  __typename?: 'WfProfileMedia';
  media: WfMedia;
  profileMediaId: Scalars['Float'];
};

export type WfProject = {
  __typename?: 'WfProject';
  castingCompany?: Maybe<Scalars['String']>;
  createdByPC: Scalars['Boolean'];
  displayedProjectUnion?: Maybe<Scalars['String']>;
  displayedProjectUnionShort?: Maybe<Scalars['String']>;
  guid?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  projectStatus: WfBasicSettingModel;
  projectType: WfProjectType;
  projectUnions?: Maybe<Array<WfProjectUnionDetails>>;
  synopsis?: Maybe<Scalars['String']>;
};

export type WfProjectType = {
  __typename?: 'WfProjectType';
  childObjects: Array<WfComplexSetting>;
  code: Scalars['String'];
  enabled: Scalars['Boolean'];
  id: Scalars['String'];
  name: Scalars['String'];
  parentObject?: Maybe<Scalars['Int']>;
  selectable: Scalars['Boolean'];
  sortOrder?: Maybe<Scalars['Int']>;
};

export type WfProjectUnionDetails = {
  __typename?: 'WfProjectUnionDetails';
  contractId?: Maybe<Scalars['String']>;
  contractStatus?: Maybe<WfContractStatus>;
  contractStatusId?: Maybe<Scalars['Int']>;
  union: WfTalentUnion;
};

export type WfRatePerType = {
  __typename?: 'WfRatePerType';
  code: Scalars['String'];
  enabled: Scalars['Boolean'];
  id: Scalars['String'];
  name: Scalars['String'];
  sortOrder?: Maybe<Scalars['Int']>;
};

export type WfRegion = {
  __typename?: 'WfRegion';
  code: Scalars['String'];
  country?: Maybe<WfCountry>;
  dmas?: Maybe<Array<WfDma>>;
  enabled: Scalars['Boolean'];
  id: Scalars['String'];
  name: Scalars['String'];
  sortOrder?: Maybe<Scalars['Int']>;
};

export type WfRole = {
  __typename?: 'WfRole';
  /** Ages of roles showing in years */
  ageInYears: Scalars['Boolean'];
  ageMax?: Maybe<Scalars['Int']>;
  ageMin?: Maybe<Scalars['Int']>;
  /** Role description */
  description?: Maybe<Scalars['String']>;
  guid?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  /** Role internal name */
  internalName?: Maybe<Scalars['String']>;
  /** Role description */
  locationDates?: Maybe<Array<WfRoleLocationDate>>;
  name: Scalars['String'];
  project?: Maybe<WfProject>;
  publicationSettingIds?: Maybe<Array<Scalars['Int']>>;
  rate?: Maybe<Scalars['Float']>;
  rateMax?: Maybe<Scalars['Float']>;
  ratePerType?: Maybe<WfRatePerType>;
  /** Rate summary */
  rateSummary?: Maybe<Scalars['String']>;
  roleStatus: WfBasicSettingModel;
  roleType: WfRoleType;
  sides?: Maybe<Array<WfRoleMedia>>;
  sidesVisibility?: Maybe<WfRoleSidesVisibility>;
  synopsis?: Maybe<Scalars['String']>;
  wardrobe?: Maybe<Scalars['String']>;
};

export type WfRoleDateType = {
  __typename?: 'WfRoleDateType';
  code: Scalars['String'];
  enabled: Scalars['Boolean'];
  id: Scalars['String'];
  name: Scalars['String'];
  sortOrder?: Maybe<Scalars['Int']>;
};

export type WfRoleLocationDate = {
  __typename?: 'WfRoleLocationDate';
  cityName?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  /** RoleDateLocation Primary ID */
  id: Scalars['ID'];
  roleDateType?: Maybe<WfRoleDateType>;
  startDate?: Maybe<Scalars['DateTime']>;
};

export type WfRoleMedia = {
  __typename?: 'WfRoleMedia';
  isSides: Scalars['Boolean'];
  mediaObject: WfMedia;
  name?: Maybe<Scalars['String']>;
  roleMediaId: Scalars['Int'];
};

export type WfRoleSidesVisibility = {
  __typename?: 'WfRoleSidesVisibility';
  code: Scalars['String'];
  enabled: Scalars['Boolean'];
  id: Scalars['String'];
  name: Scalars['String'];
  sortOrder?: Maybe<Scalars['Int']>;
};

export type WfRoleTarget = {
  __typename?: 'WfRoleTarget';
  code: Scalars['String'];
  enabled: Scalars['Boolean'];
  id: Scalars['String'];
  name: Scalars['String'];
  sortOrder?: Maybe<Scalars['Int']>;
};

export type WfRoleType = {
  __typename?: 'WfRoleType';
  code: Scalars['String'];
  enabled: Scalars['Boolean'];
  id: Scalars['String'];
  name: Scalars['String'];
  projectType: WfProjectType;
  roleTarget: WfRoleTarget;
  sortOrder?: Maybe<Scalars['Int']>;
};

export type WfSchedule = {
  __typename?: 'WfSchedule';
  address?: Maybe<WfAddress>;
  date?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  isLocationHidden: Scalars['Boolean'];
  name: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  /** Time Zone */
  timeZone?: Maybe<WfTimeZone>;
  type: ScheduleRequestType;
};

export type WfSubmission = {
  __typename?: 'WfSubmission';
  /** Talent's customized cover */
  cover?: Maybe<WfMedia>;
  hasAudioReel?: Maybe<Scalars['Boolean']>;
  hasVideoReel?: Maybe<Scalars['Boolean']>;
  id: Scalars['Int'];
  isCustomized: Scalars['Boolean'];
  isOverscale?: Maybe<Scalars['Boolean']>;
  lastNote?: Maybe<WfNote>;
  mediaCount?: Maybe<Array<WfMediaCount>>;
  note?: Maybe<Scalars['String']>;
  notes?: Maybe<Array<WfNote>>;
  overscaleNote?: Maybe<Scalars['String']>;
  /** Profile */
  profile?: Maybe<WfProfile>;
  /** Role */
  role?: Maybe<WfRole>;
  tileSchemaValue?: Maybe<WfBasicSettingModel>;
};

export type WfSubmissionMediaCountArgs = {
  requested?: Maybe<Scalars['Boolean']>;
};

export type WfSubmissionSearchInput = {
  roleIds?: Maybe<Array<Scalars['Int']>>;
  stageName?: Maybe<Scalars['String']>;
  tileSchemeValueCodes?: Maybe<Array<Scalars['String']>>;
};

/** General weight object */
export type WfTalentProfileUnion = {
  __typename?: 'WfTalentProfileUnion';
  /** Code */
  code: Scalars['String'];
  /** Primary ID */
  id: Scalars['String'];
  /** Name */
  name: Scalars['String'];
  /** parent object */
  parentObject?: Maybe<WfTalentProfileUnion>;
};

export type WfTalentUnion = {
  __typename?: 'WfTalentUnion';
  childObjects: Array<WfTalentUnion>;
  code: Scalars['String'];
  country?: Maybe<WfCountry>;
  enabled: Scalars['Boolean'];
  id: Scalars['String'];
  name: Scalars['String'];
  parentObject?: Maybe<WfTalentUnion>;
  projectEnabled: Scalars['Boolean'];
  selectable: Scalars['Boolean'];
  sortOrder?: Maybe<Scalars['Int']>;
  talentEnabled: Scalars['Boolean'];
};

/** Measurement object */
export type WfTimeZone = {
  __typename?: 'WfTimeZone';
  abbreviation?: Maybe<Scalars['String']>;
  /** code */
  code: Scalars['String'];
  codeBrowser: Scalars['String'];
  daylightSavingsCode?: Maybe<Scalars['String']>;
  dstOffset: Scalars['Float'];
  gmtOffset: Scalars['Float'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  rawOffset: Scalars['Float'];
  standardName: Scalars['String'];
};

export type WfUnitSystem = {
  __typename?: 'WfUnitSystem';
  code: Scalars['String'];
  enabled: Scalars['Boolean'];
  id: Scalars['String'];
  name: Scalars['String'];
  sortOrder?: Maybe<Scalars['Int']>;
};

/** General weight object */
export type WfWeight = {
  __typename?: 'WfWeight';
  /** Primary ID */
  id: Scalars['ID'];
  kg: Scalars['Float'];
  /** pounds */
  lbs: Scalars['Int'];
};

/** Willingness object */
export type Willingness = {
  __typename?: 'Willingness';
  /** child objects */
  childObjects: Array<Willingness>;
  /** code */
  code: Scalars['String'];
  /** Is this enbaled? */
  enabled: Scalars['Boolean'];
  /** Primary ID */
  id: Scalars['ID'];
  /** name */
  name: Scalars['String'];
  /** parent object */
  parentObject?: Maybe<Willingness>;
  /** Selectable Flag */
  selectable: Scalars['Boolean'];
  /** Sort order */
  sortOrder?: Maybe<Scalars['Int']>;
};

export type MyAccountQueryVariables = Exact<{ [key: string]: never }>;

export type MyAccountQuery = {
  __typename?: 'Query';
  myAccount: {
    __typename: 'Account';
    id: number;
    firstName: string;
    lastName: string;
    countryId: number;
    email: string;
    isAdmin: boolean;
    isIPC: boolean;
    country?: Maybe<{
      __typename: 'Country';
      id: string;
      code: string;
      name: string;
      continent: { __typename: 'Continent'; id: string };
      unitSystem: { __typename: 'UnitSystem'; id: string; code: string };
    }>;
    artists: Array<{
      __typename: 'Artist';
      minor: boolean;
      artistId: number;
      created: any;
      profiles?: Maybe<
        Array<{
          __typename: 'Profile';
          profileId: string;
          stageName: string;
          dateOfBirth?: Maybe<any>;
          created?: Maybe<any>;
          isPersonal: boolean;
          isPlayableAgeLockedToTalent: boolean;
          profileStatus?: Maybe<{
            __typename: 'ProfileStatus';
            id: string;
            code: string;
            name: string;
          }>;
        }>
      >;
    }>;
    organizations?: Maybe<
      Array<{
        __typename: 'Organization';
        id: number;
        features?: Maybe<
          Array<{
            __typename: 'Feature';
            id: string;
            code: string;
            name: string;
            enabled: boolean;
          }>
        >;
      }>
    >;
    divisions?: Maybe<
      Array<{
        __typename: 'Organization';
        id: number;
        name?: Maybe<string>;
        isOrganization?: Maybe<boolean>;
        logo?: Maybe<{
          __typename: 'Media';
          id: string;
          fileKey?: Maybe<string>;
          guid: string;
          mediaType?: Maybe<{ __typename: 'MediaType'; id: string; code: string }>;
          mediaStatus: { __typename: 'MediaStatus'; id: string; code: string };
        }>;
        parentOrganization?: Maybe<{
          __typename: 'Organization';
          id: number;
          name?: Maybe<string>;
          logo?: Maybe<{
            __typename: 'Media';
            id: string;
            fileKey?: Maybe<string>;
            guid: string;
          }>;
        }>;
      }>
    >;
    timeZone?: Maybe<{
      __typename: 'TimeZone';
      id: string;
      code: string;
      standardName: string;
    }>;
  };
};

export type SwitchAuthContextMutationVariables = Exact<{
  refreshToken: Scalars['String'];
  role?: Maybe<SystemRoleCode>;
  artistId?: Maybe<Scalars['Int']>;
  organizationId?: Maybe<Scalars['Int']>;
}>;

export type SwitchAuthContextMutation = {
  __typename?: 'Mutation';
  switchAuthContext: { __typename: 'AuthToken'; access: string; refresh: string };
};

export type SearchProfilesQueryVariables = Exact<{
  page?: Maybe<PageInput>;
  input: ProfileSearchInput;
  sortOptions?: Maybe<Array<ProfileSearchSortOption> | ProfileSearchSortOption>;
  excludeAudioVideo: Scalars['Boolean'];
  showProfileRepsLists?: Scalars['Boolean'];
}>;

export type SearchProfilesQuery = {
  __typename?: 'Query';
  searchProfiles?: Maybe<{
    __typename: 'ProfileSearch';
    totalCount?: Maybe<number>;
    profiles?: Maybe<
      Array<{
        __typename: 'Profile';
        hasVideoReel?: Maybe<boolean>;
        hasAudioReel?: Maybe<boolean>;
        talentEmail?: Maybe<string>;
        profileLists?: Maybe<Array<number>>;
        id: string;
        profileId: string;
        stageName: string;
        minor?: Maybe<boolean>;
        dateOfBirth?: Maybe<any>;
        isOverscaled: boolean;
        overscaleNote?: Maybe<string>;
        accessGranted: boolean;
        isDeactivatedByReps?: Maybe<boolean>;
        hasResume?: Maybe<boolean>;
        creditsCount: number;
        contactInfo?: Maybe<{
          __typename: 'ProfileContactInfo';
          phone?: Maybe<string>;
          email?: Maybe<string>;
        }>;
        cover?: Maybe<{
          __typename: 'Media';
          id: string;
          guid: string;
          fileKey?: Maybe<string>;
          isLocked?: Maybe<boolean>;
          mediaStorageStatus: {
            __typename: 'MediaStorageStatus';
            id: string;
            code: string;
          };
          fileType: { __typename: 'MediaFileType'; id: string; code: string };
          thumbnail?: Maybe<{
            __typename: 'Media';
            id: string;
            guid: string;
            fileKey?: Maybe<string>;
            transformation?: Maybe<{
              __typename: 'MediaTransformation';
              xAxis?: Maybe<number>;
              yAxis?: Maybe<number>;
              width?: Maybe<number>;
              height?: Maybe<number>;
              rotate?: Maybe<number>;
            }>;
          }>;
        }>;
        genderAppearances?: Maybe<
          Array<{
            __typename: 'GenderAppearance';
            id: string;
            code: string;
            name: string;
          }>
        >;
        ethnicAppearances?: Maybe<
          Array<{
            __typename: 'ProfileEthnicAppearance';
            id: string;
            code: string;
            name: string;
          }>
        >;
        profileStatus?: Maybe<{ __typename: 'ProfileStatus'; id: string; code: string }>;
        height?: Maybe<{
          __typename: 'Height';
          cm: number;
          IMPERIAL_FEET_INCHES?: Maybe<string>;
          showInImperialUI: boolean;
        }>;
        weight?: Maybe<{
          __typename: 'Weight';
          IMPERIAL_LBS: number;
          kgRounded: number;
          showInMetricUI: boolean;
        }>;
        talentUnions?: Maybe<
          Array<{
            __typename: 'TalentProfileUnion';
            name: string;
            sortOrder?: Maybe<number>;
            id: string;
            code: string;
            parentObject?: Maybe<{ __typename: 'TalentUnion'; id: string; name: string }>;
          }>
        >;
        conflicts: Array<{
          __typename: 'ProfileConflict';
          profileConflictId?: Maybe<number>;
          expiration?: Maybe<any>;
          code?: Maybe<string>;
        }>;
        profileBookOuts: Array<{
          __typename: 'ProfileBookOuts';
          profileBookoutId?: Maybe<number>;
          startDate?: Maybe<any>;
          endDate?: Maybe<any>;
        }>;
        audios?: Maybe<
          Array<{
            __typename: 'ProfileMedia';
            id: string;
            profileMediaId: number;
            isPrimary: boolean;
            media: { __typename: 'Media'; id: string; mediaId: number };
          }>
        >;
        videos?: Maybe<
          Array<{
            __typename: 'ProfileMedia';
            id: string;
            profileMediaId: number;
            isPrimary: boolean;
            media: { __typename: 'Media'; id: string; mediaId: number };
          }>
        >;
        lastNote?: Maybe<{
          __typename: 'Note';
          id: number;
          comment: string;
          noteModifier?: Maybe<{ __typename: 'NoteModifier'; id: string; code: string }>;
        }>;
      }>
    >;
  }>;
};

export type RosterProfileFragment = {
  __typename: 'Profile';
  id: string;
  profileId: string;
  stageName: string;
  minor?: Maybe<boolean>;
  dateOfBirth?: Maybe<any>;
  isOverscaled: boolean;
  overscaleNote?: Maybe<string>;
  talentEmail?: Maybe<string>;
  accessGranted: boolean;
  isDeactivatedByReps?: Maybe<boolean>;
  hasResume?: Maybe<boolean>;
  creditsCount: number;
  contactInfo?: Maybe<{
    __typename: 'ProfileContactInfo';
    phone?: Maybe<string>;
    email?: Maybe<string>;
  }>;
  genderAppearances?: Maybe<
    Array<{ __typename: 'GenderAppearance'; id: string; code: string; name: string }>
  >;
  ethnicAppearances?: Maybe<
    Array<{
      __typename: 'ProfileEthnicAppearance';
      id: string;
      code: string;
      name: string;
    }>
  >;
  profileStatus?: Maybe<{ __typename: 'ProfileStatus'; id: string; code: string }>;
  height?: Maybe<{
    __typename: 'Height';
    cm: number;
    IMPERIAL_FEET_INCHES?: Maybe<string>;
    showInImperialUI: boolean;
  }>;
  weight?: Maybe<{
    __typename: 'Weight';
    IMPERIAL_LBS: number;
    kgRounded: number;
    showInMetricUI: boolean;
  }>;
  talentUnions?: Maybe<
    Array<{
      __typename: 'TalentProfileUnion';
      name: string;
      sortOrder?: Maybe<number>;
      id: string;
      code: string;
      parentObject?: Maybe<{ __typename: 'TalentUnion'; id: string; name: string }>;
    }>
  >;
  conflicts: Array<{
    __typename: 'ProfileConflict';
    profileConflictId?: Maybe<number>;
    expiration?: Maybe<any>;
    code?: Maybe<string>;
  }>;
  profileBookOuts: Array<{
    __typename: 'ProfileBookOuts';
    profileBookoutId?: Maybe<number>;
    startDate?: Maybe<any>;
    endDate?: Maybe<any>;
  }>;
  audios?: Maybe<
    Array<{
      __typename: 'ProfileMedia';
      id: string;
      profileMediaId: number;
      isPrimary: boolean;
      media: { __typename: 'Media'; id: string; mediaId: number };
    }>
  >;
  videos?: Maybe<
    Array<{
      __typename: 'ProfileMedia';
      id: string;
      profileMediaId: number;
      isPrimary: boolean;
      media: { __typename: 'Media'; id: string; mediaId: number };
    }>
  >;
  lastNote?: Maybe<{
    __typename: 'Note';
    id: number;
    comment: string;
    noteModifier?: Maybe<{ __typename: 'NoteModifier'; id: string; code: string }>;
  }>;
};

export type VerifyAccountQueryVariables = Exact<{
  input: VerifyAccountInput;
}>;

export type VerifyAccountQuery = { __typename?: 'Query'; verifyAccount: any };

export const RosterProfileFragmentDoc = gql`
  fragment RosterProfile on Profile {
    id
    profileId
    stageName
    minor
    dateOfBirth
    isOverscaled
    overscaleNote
    talentEmail
    contactInfo {
      phone
      email
      __typename
    }
    genderAppearances {
      id
      code
      name
      __typename
    }
    ethnicAppearances {
      id
      code
      name
      __typename
    }
    accessGranted
    isDeactivatedByReps
    profileStatus {
      id
      code
      __typename
    }
    height {
      cm
      IMPERIAL_FEET_INCHES
      showInImperialUI
      __typename
    }
    weight {
      IMPERIAL_LBS
      kgRounded
      showInMetricUI
      __typename
    }
    talentUnions {
      name
      sortOrder
      id
      code
      parentObject {
        id
        name
        __typename
      }
      __typename
    }
    hasResume
    creditsCount
    conflicts {
      profileConflictId
      expiration
      code
      __typename
    }
    profileBookOuts {
      profileBookoutId
      startDate
      endDate
      __typename
    }
    audios @skip(if: $excludeAudioVideo) {
      id
      profileMediaId
      isPrimary
      media {
        id
        mediaId
        __typename
      }
      __typename
    }
    videos @skip(if: $excludeAudioVideo) {
      id
      profileMediaId
      isPrimary
      media {
        id
        mediaId
        __typename
      }
      __typename
    }
    lastNote {
      id
      comment
      noteModifier {
        id
        code
        __typename
      }
      __typename
    }
    __typename
  }
`;
export const MyAccountDocument = gql`
  query myAccount {
    myAccount {
      id
      firstName
      lastName
      countryId
      email
      isAdmin
      country {
        id
        code
        name
        continent {
          id
          __typename
        }
        unitSystem {
          id
          code
          __typename
        }
        __typename
      }
      artists {
        minor
        artistId
        created
        profiles {
          profileId
          stageName
          dateOfBirth
          created
          isPersonal
          isPlayableAgeLockedToTalent
          profileStatus {
            id
            code
            name
            __typename
          }
          __typename
        }
        __typename
      }
      isIPC
      organizations {
        id
        features {
          id
          code
          name
          enabled
          __typename
        }
        __typename
      }
      divisions {
        id
        name
        logo {
          id
          fileKey
          guid
          mediaType {
            id
            code
            __typename
          }
          mediaStatus {
            id
            code
            __typename
          }
          __typename
        }
        isOrganization
        parentOrganization {
          id
          name
          logo {
            id
            fileKey
            guid
            __typename
          }
          __typename
        }
        __typename
      }
      timeZone {
        id
        code
        standardName
        __typename
      }
      __typename
    }
  }
`;
export const SwitchAuthContextDocument = gql`
  mutation switchAuthContext(
    $refreshToken: String!
    $role: SystemRoleCode
    $artistId: Int
    $organizationId: Int
  ) {
    switchAuthContext(
      refreshToken: $refreshToken
      role: $role
      artistId: $artistId
      organizationId: $organizationId
    ) {
      access
      refresh
      __typename
    }
  }
`;
export const SearchProfilesDocument = gql`
  query SearchProfiles(
    $page: PageInput
    $input: ProfileSearchInput!
    $sortOptions: [ProfileSearchSortOption!]
    $excludeAudioVideo: Boolean!
    $showProfileRepsLists: Boolean! = false
  ) {
    searchProfiles(page: $page, input: $input, sortOptions: $sortOptions) {
      totalCount
      profiles {
        ...RosterProfile
        hasVideoReel
        hasAudioReel
        contactInfo {
          phone
          email
          __typename
        }
        talentEmail
        profileLists @include(if: $showProfileRepsLists)
        cover {
          id
          guid
          fileKey
          mediaStorageStatus {
            id
            code
            __typename
          }
          fileType {
            id
            code
            __typename
          }
          isLocked
          thumbnail {
            id
            guid
            fileKey
            transformation {
              xAxis
              yAxis
              width
              height
              rotate
              __typename
            }
            __typename
          }
          __typename
        }
        __typename
      }
      __typename
    }
  }
  ${RosterProfileFragmentDoc}
`;
export const VerifyAccountDocument = gql`
  query verifyAccount($input: VerifyAccountInput!) {
    verifyAccount(input: $input)
  }
`;

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper,
) {
  return {
    myAccount(
      variables?: MyAccountQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<MyAccountQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<MyAccountQuery>(MyAccountDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'myAccount',
      );
    },
    switchAuthContext(
      variables: SwitchAuthContextMutationVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<SwitchAuthContextMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<SwitchAuthContextMutation>(
            SwitchAuthContextDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'switchAuthContext',
      );
    },
    SearchProfiles(
      variables: SearchProfilesQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<SearchProfilesQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<SearchProfilesQuery>(SearchProfilesDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'SearchProfiles',
      );
    },
    verifyAccount(
      variables: VerifyAccountQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<VerifyAccountQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<VerifyAccountQuery>(VerifyAccountDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'verifyAccount',
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
