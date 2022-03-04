import { atom } from 'jotai';
import { splitAtom } from 'jotai/utils'


interface IJobList {
    jid: string;
    companyName: string;
    position: string;
    positionType: string;
    primaryTag: string;
    jobLocation: string;
    companyLogo: string;
}

const initialJobListState: IJobList[] = [
    {
        jid: '1231231',
        companyName: 'Tela Secure',
        position: 'Full Stack Developer',
        positionType: 'Remote',
        primaryTag: 'Blockchain',
        jobLocation: 'Prague, Czech Republic',
        companyLogo: 'TELA SECURE'
    }
]


export const jobListA = atom<IJobList[]>(initialJobListState);
export const jobListAtomsA = splitAtom(jobListA);