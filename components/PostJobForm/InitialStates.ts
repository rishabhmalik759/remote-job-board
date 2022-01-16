import { IGeneralInfo } from './GeneralInfo';
import { IInvoiceDetails } from './InvoiceDetails';
import { IJobDetails } from './JobDetails';

const initialGeneralInfoState: IGeneralInfo['generalInfoState'] = {
  companyName: '',
  position: '',
  positionType: '',
  primaryTag: '',
  jobTags: '',
  jobLocation: '',
  showCompanyLogo: false,
  emailToCandidates: false,
  getMatches: false,
  highlightPost: false,
  stickForDuration: '',
};

const initialJobDetailsState: IJobDetails['jobDetailsState'] = {
  companyLogo: '',
  highlightWithCompanyColor: false,
  minAnnualSalary: '0',
  maxAnnualSalary: '0',
  jobDescription: {
    html: '',
    text: '',
  },
  howToApply: {
    html: '',
    text: '',
  },
  applyURL: '',
  applyEmail: '',
};

const initialInvoiceDetailsState: IInvoiceDetails["invoiceDetailsState"] = {
    companyInvoiceEmail: "",
    emailListToSendInvoice: "",
    invoiceAddress: "",
    invoiceNotesPurchaseOrder: "",
    payLater: false
  }

const salaryOptions: string[] = [
    '0',
    '10000',
    '20000',
    '30000',
    '40000',
    '50000',
    '60000',
    '70000',
    '80000',
    '90000',
    '100000',
    '110000',
    '120000',
    '130000',
    '140000',
    '150000',
    '160000',
    '170000',
    '180000',
    '190000',
    '200000',
    '210000',
    '220000',
    '230000',
    '240000',
    '250000',
    '260000',
    '270000',
    '280000',
    '290000',
    '300000',
    '310000',
    '320000',
    '330000',
    '340000',
    '350000',
    '360000',
    '370000',
    '380000',
    '390000',
    '400000',
  ];

const InitialStates = {initialGeneralInfoState, salaryOptions, initialJobDetailsState, initialInvoiceDetailsState}
export {initialGeneralInfoState, salaryOptions, initialJobDetailsState, initialInvoiceDetailsState}
export default InitialStates;