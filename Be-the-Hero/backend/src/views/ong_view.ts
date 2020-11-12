import Ong from '../models/Ong';

import eventsView from './event_view';

export default {
    render(ong: Ong) {
        return {
            id: ong.id,
            name: ong.name,
            email: ong.email,
            whatsapp: ong.whatsapp,
            city: ong.city,
            uf: ong.uf,
            events: eventsView.renderMany(ong.events)
        };
    },

    renderMany(ongs: Ong[]) {
        return ongs.map(ong => this.render(ong));
    }
}