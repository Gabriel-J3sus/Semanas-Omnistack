import Event from '../models/Event';
import ongView from './ong_view';

export default {
    render(event: Event) {
        return {
            id: event.id,
            name: event.name,
            description: event.description,
            price: event.price,
            ongId: event.ong.id,
            ongName: event.ong.name,
            ongEmail: event.ong.email,
            ongWhatsapp: event.ong.whatsapp,
        };
    },

    renderMany(events: Event[]) {
        return events.map(event => this.render(event));
    }
};