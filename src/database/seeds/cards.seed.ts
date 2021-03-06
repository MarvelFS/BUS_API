import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { Card } from '../../modules/cards/cards.entity';

export default class CardsSeeder implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await factory(Card)().createMany(10);
  }
}
