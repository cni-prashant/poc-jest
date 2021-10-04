export const stageNamePayload = {
  excludeAudioVideo: true,
  input: {
    organizationId: '',
    stageName: 'David Adlam',
    profileStatusToSearch: 'CURRENT',
  },
  page: {
    pageSize: 100,
    pageNumber: 1,
  },
  showProfileRepsLists: false,
  sortOptions: [{ fieldName: 'LastName', sortOrder: 'ASC' }],
};

export const genderManPayload = {
  excludeAudioVideo: true,
  input: {
    organizationId: '',
    genderAppearances: ['MAN'],
    profileStatusToSearch: 'CURRENT',
  },
  page: {
    pageSize: 100,
    pageNumber: 1,
  },
  showProfileRepsLists: false,
  sortOptions: [{ fieldName: 'LastName', sortOrder: 'ASC' }],
};

export const ethnicBlackPayload = {
  excludeAudioVideo: true,
  input: {
    organizationId: '',
    ethnicAppearances: ['AFRICAN_AMERICAN_BLACK'],
    profileStatusToSearch: 'CURRENT',
  },
  page: {
    pageSize: 100,
    pageNumber: 1,
  },
  showProfileRepsLists: false,
  sortOptions: [{ fieldName: 'LastName', sortOrder: 'ASC' }],
};

export const unionAEAPayload = {
  excludeAudioVideo: true,
  input: {
    organizationId: '',
    talentUnions: ['AEA'],
    profileStatusToSearch: 'CURRENT',
  },
  page: {
    pageSize: 100,
    pageNumber: 1,
  },
  showProfileRepsLists: false,
  sortOptions: [{ fieldName: 'LastName', sortOrder: 'ASC' }],
};

export const blackAEAManPayload = {
  excludeAudioVideo: true,
  input: {
    organizationId: '',
    talentUnions: ['AEA'],
    ethnicAppearances: ['AFRICAN_AMERICAN_BLACK'],
    genderAppearances: ['MAN'],
    profileStatusToSearch: 'CURRENT',
  },
  page: {
    pageSize: 100,
    pageNumber: 1,
  },
  showProfileRepsLists: false,
  sortOptions: [{ fieldName: 'LastName', sortOrder: 'ASC' }],
};
