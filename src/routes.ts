interface routeType {
	name: string;
	path: string;
  type?: 'external';
}

const routes: routeType[]  = [
	{
		name: 'Home',
		path: '/'
	},
	{
		name: 'PAP (Testnet)',
		path: 'https://testpap.deftify.io' 
	},
	{
		name: 'Instant Watch',
		path: '/' //path: "/instant-watch" <= supposedly, will edit when the platform is ready
	},
	{
		name: 'Indexes',
		path: '/' //path: "/deftify-indexes" <= supposedly, will edit when the platform is ready
	},
	{
    type: 'external',
		name: 'MetaCurse',
		path: 'https://metacurse.gg' 
	},
	{
		name: 'Staking',
		path: '/' //path: ""/staking" <= supposedly, will edit later
	},
	{
		name: 'Team',
		path: '/team'
	}
];

export default routes;