interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Challenge Creator'],
  customerRoles: [],
  tenantRoles: ['Challenge Creator', 'Challenge Participant'],
  tenantName: 'Account',
  applicationName: 'Challenge application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage challenges',
    'Create challenge responses',
    'Edit own challenge responses',
    'Delete own challenge responses',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/3ad1350e-5600-49ec-a55e-cf3d897912eb',
};
