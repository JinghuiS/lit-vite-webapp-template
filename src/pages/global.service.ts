import { Exome } from 'exome'

class globalService extends Exome {
    public count = 0

    public increment() {
        this.count += 1
    }
}

export const GlobalService = new globalService()
