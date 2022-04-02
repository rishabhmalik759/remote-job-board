import { atom } from 'jotai';
import { splitAtom } from 'jotai/utils'


export interface IJobList {
    jid: string;
    companyName: string;
    posDesc: string;
    posType: string;
    primaryTag: string;
    jobLocation: string;
    companyLogo: string;
}

const initialJobListState: IJobList[] = [
    {
        jid: '1231231',
        companyName: 'Tela Secure',
        posDesc: 'Full Stack Developer',
        posType: 'Remote',
        primaryTag: 'Blockchain',
        jobLocation: 'Prague, Czech Republic',
        companyLogo: 'TELA SECURE'
    },
    {
        jid: '1231232',
        companyName: 'Tela Secure',
        posDesc: 'Full Stack Developer',
        posType: 'Remote',
        primaryTag: 'Blockchain',
        jobLocation: 'Prague, Czech Republic',
        companyLogo: 'TELA SECURE'
    },
    {
        jid: '1231233',
        companyName: 'Tela Secure',
        posDesc: 'Full Stack Developer',
        posType: 'Remote',
        primaryTag: 'Blockchain',
        jobLocation: 'Prague, Czech Republic',
        companyLogo: 'TELA SECURE'
    },
    {
        jid: '1231234',
        companyName: 'Tela Secure',
        posDesc: 'Full Stack Developer',
        posType: 'Remote',
        primaryTag: 'Blockchain',
        jobLocation: 'Prague, Czech Republic',
        companyLogo: 'TELA SECURE'
    }
    
]


export const jobListA = atom<IJobList[]>(initialJobListState);
export const jobListAtomsA = splitAtom(jobListA);