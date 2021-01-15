import { Item } from './index';

export default interface MainProps {
    readonly resultsView?: boolean
    data? : Item[]
    startTyping? : any
}
