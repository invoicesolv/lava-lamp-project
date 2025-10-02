import { MetadataRoute } from 'next'
import { bulkProducts } from '@/data/bulk-products'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://tryckeget.se'
  
  // Static pages
  const staticPages = [
    '',
    '/products',
    '/produkter',
    '/design/upload',
    '/how-it-works',
    '/contact',
    '/faq',
    '/shipping',
    '/size-guide',
    '/privacy',
    '/terms',
    '/bulk-orders',
    '/dropshipping',
    '/design-service',
    '/custom-branding',
    '/kategori/klader',
    '/kategori/accessoarer',
    '/kategori/hem-inredning',
    '/kategori/kontorsartiklar',
    '/search',
    '/login',
    '/register',
    '/cart',
    '/har-finns-vi',
  ]

  // Major cities
  const majorCities = [
    '/stockholm',
    '/goteborg',
    '/malmo',
    '/uppsala',
    '/linkoping',
    '/orebro',
    '/vasteras',
    '/helsingborg',
    '/jonkoping',
    '/norrkoping',
    '/lund',
    '/umea',
    '/gavle',
    '/boras',
    '/sodertalje',
    '/eskilstuna',
    '/halmstad',
    '/vaxjo',
    '/karlstad',
    '/sundsvall',
    '/trollhattan',
    '/lulea',
  ]

  // Stockholm areas
  const stockholmAreas = [
    '/adelso', '/alvik', '/arholma', '/arlanda', '/arlandastad', '/aspvik', '/backby',
    '/bagarmossen', '/baggboda', '/bandhagen', '/bergendahl', '/bergshamra', '/bergvik',
    '/betsede', '/bjorknas', '/bjorko', '/blido', '/blockhusudden', '/bogesund',
    '/bollmora', '/bollstanas', '/boo', '/boston', '/branningestrand', '/branno',
    '/bro', '/bromma', '/brottby', '/bunkeflo-by', '/bunkeflostrand', '/bylehamn',
    '/centrum-fanas-nydal-vasterangen', '/dalaro', '/danderyd', '/dantorp', '/djurhamn',
    '/djursholm', '/djursholms-ekeby', '/donso', '/droppsta', '/drottningholm', '/dyvik',
    '/eckero', '/edsberg', '/edsbro', '/ekeby', '/ekero', '/ekero-o', '/eklundshov',
    '/ektorp', '/eldtomta', '/ella-park', '/enebyberg', '/engarn', '/enhorna',
    '/enskede', '/enskededalen', '/fagelbrolandet', '/fagerdala', '/fagersjo',
    '/faraback', '/farentuna', '/farsta', '/farsta-strand', '/farstanaset', '/finnholmen',
    '/fiskesa', '/fisksatra', '/fittja', '/foto', '/furusund', '/gallnoby', '/galo',
    '/gatersered', '/gillbo', '/glado-kvarn', '/gnesta', '/gottrora', '/graddo',
    '/granlund', '/graso', '/gribbylund', '/grinda', '/grisslehamn', '/grodby',
    '/grodinge', '/gudby', '/gunnilse', '/gustavsberg', '/gustavsvik', '/hagernas',
    '/hagersten', '/haggeby', '/hakered', '/hallstavik', '/hammarland', '/handen',
    '/haninge', '/harestad', '/harg', '/hargshamn', '/haro', '/harsby', '/harsfjarden',
    '/hasselby', '/hastangsudd', '/hasthagen', '/havero', '/hemmesta', '/herrang',
    '/herresta', '/himmene', '/hisingen', '/hisings-backa', '/hisings-karra',
    '/hjorthagen', '/holo', '/huddinge', '/hustega', '/huvudsta', '/igelsta',
    '/ingaro', '/ingarostrand', '/ingmarso', '/inverness', '/iselsta', '/islinge',
    '/jarfalla', '/jarna', '/jarva', '/johannesberg', '/johannesfred', '/johanneshov',
    '/jordbro', '/kallered', '/kalvesta', '/kapellskar', '/karlsudd', '/karrdal',
    '/kattsta', '/kimsta', '/kista', '/klingsta', '/knivsta', '/knutby', '/koludden',
    '/kolvik', '/kopstadso', '/kragsta', '/krogsta', '/kulan', '/kullavik',
    '/kummelnas', '/kungens-kurva', '/kungsangen', '/kungsberga', '/kungsdalen',
    '/kungshatt', '/kvarnholmen', '/kyttinge', '/ladholmen', '/laggarsvik',
    '/landfjarden', '/landsort', '/langgarn', '/langvik', '/lannersta', '/lassby',
    '/ledinge', '/lilla-nyckelviken', '/lilla-viken', '/lindalen', '/lindholmen',
    '/lindome', '/linnarhult', '/lissma', '/ljustero', '/lockarp', '/lulea',
    '/malhamra', '/mariefred', '/marsta', '/moja', '/molnbo', '/morko', '/mortnas',
    '/mosebacke-storsten', '/munso', '/musko', '/nacka', '/namdo', '/nasbypark',
    '/naset', '/nashagen', '/nattaro', '/nodinge-nol', '/nodsta', '/nol', '/nolvik',
    '/nordrona', '/norra-lagno', '/norrby', '/norrga', '/norrmalm', '/norrskog',
    '/norrsunda', '/norrtalje', '/norsborg', '/nyfors', '/nykvarn', '/nynashamn',
    '/odensala', '/olofstorp', '/olsta', '/opp-norrby', '/orhem', '/orno', '/osmo',
    '/ostermalm', '/ostra-kattarp', '/pile-tygelsjo', '/prastnibble', '/raksta',
    '/ranas', '/resaro', '/ricksattra', '/rimbo', '/rolsta', '/ronninge', '/rosersberg',
    '/rotebro', '/runmaro', '/salna', '/saltsjo-duvnas', '/saltsjobaden', '/sandhamn',
    '/saro', '/sarso', '/save', '/segeltorp', '/segersang', '/sibble', '/sigtuna',
    '/ska', '/skalby', '/skalsmara', '/skalvik', '/skarholmen', '/skarpnack',
    '/skebobruk', '/skogome', '/skokloster', '/skondal', '/skrubba', '/skumparp',
    '/slagsta', '/slasta', '/slattang', '/sodergarn', '/soderholmen', '/solbacken',
    '/sollenkroka-o', '/sollentuna', '/solna', '/solsidan', '/sorunda', '/spanga',
    '/staket', '/stavsnas', '/stavsudda', '/stenhamra', '/steningehojden', '/stocksund',
    '/stora-stava', '/stora-vika', '/storholmen', '/stromma', '/stugudden', '/styrso',
    '/sundbyberg', '/surte', '/svalnas', '/svardsund', '/svartsjo', '/svartso',
    '/svedlandet', '/svindal', '/taby', '/tadhem', '/tagene', '/tega', '/tjustvik',
    '/toarp', '/tomta', '/torslanda', '/torslunda', '/trangsund', '/tranholmen',
    '/trosa', '/troxhammar', '/tullinge', '/tullstorp', '/tumba', '/tungelsta',
    '/tygelsjo', '/tyktorp', '/tyreso', '/tyreso-o', '/ubby', '/undal',
    '/upplands-vasby', '/utanbro', '/uto', '/uttran', '/vaddo', '/vadholma',
    '/vagnharad', '/vallentuna', '/vallingby', '/varby', '/varmdo', '/varsta',
    '/vasterhaninge', '/vastra-frolunda', '/vastra-klagstorp', '/vato', '/vaxholm',
    '/vaxtuna', '/vega', '/velamsund', '/vendelso', '/viby', '/vidbynas', '/vidja',
    '/viggbyholm', '/viksund', '/vintrie', '/vrango', '/vretarna', '/wira',
    '/ytterby', '/ytterbystrand', '/ytterstad', '/yxlan'
  ]

  // Gothenburg areas
  const gothenburgAreas = [
    '/agnesberg', '/angered', '/askim', '/aspero', '/backerud', '/billdal', '/bohus',
    '/branno', '/donso', '/foto', '/gatersered', '/grabo', '/gunnilse', '/hakered',
    '/harestad', '/hisingen', '/hisings-backa', '/hisings-karra', '/kallered',
    '/kungsbacka', '/lerum', '/molndal', '/molnlycke', '/partille', '/surte'
  ]

  // Malmö areas
  const malmoAreas = [
    '/almlunda', '/bunkeflo-by', '/bunkeflostrand', '/faraback', '/klagshamn',
    '/kristineberg', '/krumby', '/kvissle', '/lockarp', '/malmo-solhem', '/oxie',
    '/pile-tygelsjo', '/skumparp', '/slattang', '/toarp', '/tullstorp', '/tygelsjo',
    '/vintrie'
  ]

  // Generate product pages from bulk products
  const productPages = bulkProducts.map(product => `/produkter/${product.id}`)

  // Combine all pages
  const allPages = [
    ...staticPages,
    ...majorCities,
    ...stockholmAreas,
    ...gothenburgAreas,
    ...malmoAreas,
    ...productPages,
  ]

  return allPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === '' || page.includes('stockholm') || page.includes('goteborg') || page.includes('malmo') ? 'weekly' : 'monthly',
    priority: page === '' ? 1.0 : 
              page.includes('stockholm') || page.includes('goteborg') || page.includes('malmo') ? 0.9 : 
              page.includes('produkter') ? 0.8 : 0.7,
  }))
}
