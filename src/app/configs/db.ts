import { DataSource } from 'typeorm';
import { URL } from 'url';
import { Organization } from '../entities/organization.entitie';
import { Tribe } from '../entities/tribe.entitie';
import { Repository } from '../entities/repository.entitie';
import { Metrics } from '../entities/metrics.entitie';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const dbUrl = new URL(process.env.DATABASE_URL!);
const routingId = dbUrl.searchParams.get('options');
dbUrl.searchParams.delete('options');

export const AppDataSource = new DataSource({
	type: 'cockroachdb',
	url: dbUrl.toString(),
	ssl: true,
  entities: [Organization, Tribe, Repository, Metrics],
  synchronize: true,
	extra: {
		options: routingId,
	},
  logging: true,
});
