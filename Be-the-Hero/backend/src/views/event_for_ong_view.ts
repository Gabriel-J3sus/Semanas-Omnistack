import Event from '../models/Event';


export default {
    render(event: Event) {
        return {
            id: event.id,
            name: event.name,
            description: event.description,
            price: event.price,
            ong: event.ong,
        };
    },

    renderMany(events: Event[]) {
        return events.map(event => this.render(event));
    }
};