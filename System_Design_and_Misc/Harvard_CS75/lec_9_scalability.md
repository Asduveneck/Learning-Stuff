# Scalability

[source](https://www.youtube.com/watch?v=-W9F__D3oY4)

## Web hosts and VPses: Where do you put your site online?

### What features do you want to look for in a web host?

  Doing due diligence to check for IP address ranges
  SFTP instead of FTP (S for Secure).
  Have username and password encrypted (hence, SFTP over FTP)

  Shared Host: host a website.

### What differences between VPSes or shared host?

  VPSes: Rent a virtual server. So you get your own copy of Ubuntu / Linux. Probably a powerful server fragmented.
  You get some slice of hardware, and no one else has the same account for those accounts.
  Webhostsyou share all.
  AWS Elastic Cloud: Lets you power up more servers and shut them down automatically.

## Scaling

### Vertical Scaling (7:45)

  Throw more disk spaces and money.

#### You hit a ceiling. Why isn't this a full solution?
  
  You can only buy a machine up to the state of the art tech (or budget).
  You can sometimes throw multi cpu multi core.

#### Current laptops can only do 2-4 things at once (based upon threading). Why do they seem to multi task though?

    they just switch between tasks so quickly; kinda like JS event loop XD
    You can throw more threads or servers. There's a lot of bloat in resources now, but the trend for more computation but we can start chopping up servers into smaller multiple servers.

#### What about DISK / storage

  Hard drives: PATA, SATA< SAS
  SAS: serial attached suzzy. Faster spin. Typcially 15,000 rpm. SATA disks are typically 5400 to 7200 rpm.
  And now we have SSD. A lot more expensive.

### Horizontal scaling (13:41)

  We accept we hit our limit. Instead of getting 1 great machine, why not grab a few crappy machines.
  A few servers.

#### If we have multiple servers, how does our that affect our HTTP and DNS (lecture 0 )? {14:30}

  We have a lot of aisles. So we now need to distribute our HTTP request. This is known as load balancing.

#### But how do we return which IP address to go to? How do we return the man in the middle?

  Instead of returning the individual IP addresses like in a DNS, we return the IP address of the load balancer.
  The backend servers now no longer need a public IP address.
    A private address is private, so no one else can see them. So you can't address them by random adversaries.

#### How does the load balancer take an incoming request and send data / access the backend server? (18:25)

  So the request arrives atr load balancer
  Load balancer decides who to send it to
    Ex: Prioritize by load. Send to least busy.
  Send request to that server, gets the packet, does the thing, sends it to load balancer.

#### What's a cost with our approach? (Just around ~21)

  All the servers need the content. Now you're using N-times disk space.
  N for each server. We duplicate stuff.

### What's a viable alternative?

  A server for gifs, a server for htmls, etc. (microservices)

#### How can we balance load? Heuristic overview of the server?

  Go to a website, type in URL, go to the IP address via a DNS server (Domain Name System).
  So what if when we go to load balancer and we need to return an IP address, we instead return the IP address of the target server?
  
     This is known as Round Robin. A popular DNS server. BIND (23:56).

##### What's the price with round robin? (24:49)

    Just by bad luck, one server could get hogged. Server 1 might get more heavy weight than server 2.
    By the nature of round robin, people might all get clogged on one busy server

    Lecture 0: OS goes to IP address, goes to address, send the packet to that server, get a response. 

  But you go to another page and click on that link. How does the story change? (26:16)

    A DNS service must return a different response each time you redirect.
    So these caches, where we don't need to hit a DNS request each time. You lose time each time to hit the DNS
    Your browser and site cache these. 
  So if you are hogging 1. Cache can put bad luck on certain servers.
  There is ttl with responses from servers. That suggests if you're a power user, you can hog it. (28:32)
  TTL: time to life

### Rather than use a DNS based round robin...

You let the load balancer decide who to send it to (ex randomness (so no cache), server load)

#### Costs?

Sessions are given to typical machines in a serialized text file. (30:29)
If you change servers, like clicking on a link, you'll be asked to log in again despite already having logged in before.
Eventually, you'll now have an issue where you are active in a session token in each running server. 
And on an e-commerce site, you may start having carts per server, so you may have a book in one cart in server A, a bike in another cart in server B, etc.
And you can't check out the aggregate.
True round-robin can break.

#### What if we had different servers like microservice?

  Yes you already have the servers.
  But you have no redundancy. if anything breaks, part of your website breaks.
  As long as you get too popular, you get enough traffic on a server, or session, you hit the above problem again.

#### How do we overcome DNS based round robin issues?

  We can continue factorization, and factor out a service like session state.
  If we had a drive S connected to all the servers, so when they store session data, they store it on drive S and so they all share the same state.
  Any time we hit session data, we can share state.

#### Why not put session on load balancer?

  Technically we no longer have a pure load balancer. Regardless, what's the biggest issue?

### If we have a file server for session, what happens if that one server goes down?

  We now have shared state, but we sacrificed some robustness.
  If the shared state server goes down, everything breaks.

  One solution is to store the data differently: RAID

### RAID

RAID0, RAID1, 5, 6, 10... They assume you have multiple hard drives.

Raid 0 or Raid 1. Two identical hard drives in terms of size. You stripe data across them.
Write a bit to each drive. So it might take some time in 1 disk, then the other. We double the speed we write. It's performance.

Raid 1: You mirror the data across the hard drive. So a little more overhead, but if one drive, as long as the other works, you can buy another hard drive, plug that in, and automatically, RAID array will rebuild itself. And now you're back in the safe zone.

Raid10: Combines both. 4 drives. Striping and redundancy. Twice cost since 4 drives instead of 2.

Raid 5 or 6 is better. Nice variants of raid 1( expensive)

Raid 5 is versatile. 3, 4, 5 drives, but only one is used for redundancy. So if I have 5 1tb drives, you sacrifice 1tb.
Any can die, replace it.

Raid 6 is even better. Any 2 drives, and you won't have lost any data. You pay another price, because now you only have to worry about 2 of your drives dying.

We can at least throw redundancy within our server.

### What if we fuck up the power supply and the server shuts down. How can we get shared state?

  Sticky Sessions. File Server. How do we mitigate risk of file server going down.

  If we're worried about the 1 server. Just get two.
  So we need to sync the load balancers. This is known as distribution.

### Load Balancer

ELB, High Available Proxy, LVS (linux version software)

Hardware: Barracudo, Cisco, Citrix... lecturer says overpriced.

### How else can we maintain sticky sessions?

  Shared storage we went over. What about cookies?
  You can store the ID of the server in the cookie. What's the catch?
    Cookies expire. But we could make it expire in 10 years. Not a new problem for load balancing.
    What if the IP address is changed. And... is it a good idea? Is it even neccessary to share the IP of a private server?
      We could coordinate a key for the IP addresses so no state that might be privacy revealing is on the computer and exposed.
      And someone could always try to spoof a cookie. No surprises.

  We can make the load balancer to insert a cookie via set cookie header.

### Interpreted languages on servers have a bad rep. How can we optimize them? (51:36)

  We can compile it to something more efficient.
  With relatively simple software, you can install a `php` accelerator (specific for php), so it caches or saves your compiled code.
  (so no re-parsing).

  Python has .py for python files, .pyc for compiled/faster. 

## Caching (52:48 or 53:14)

  Caching can be bad if you have have outdated cached data.

  Through html, mem cache, you can get some benefits.
    Craigs list accept files in `.html` but spits it out as `.html` instead of storing it as a XML or db and generating a page dynamically.
  They're caching it. Storing it on disk. Apache and web servers are good at spitting out raw static files.
  But all you have to respond to with iTCP. So serving up static content is fast.
  What's the cost of these static pages?
    Space complexity. We store on space. We can go back to edit a post, so we are clearly storing it in a database.
    It's more likely that the write performance is slowed down; on Craigslist, we're more likely to read instead of write.
  You have the same static file, header, footer, etc. We have a lot of duplicates.
  However, you get a lot of performance. What happens if you've generated 10,000 pages like this?
    If you want to maintain the files, like update the styles, or restructure the page format, you have to manually do so to all the pages (since it's static).
  Craigslist perks: they have minimal server costs consequently.

#### MySQL cache. (59:08)

  query_cache_type = 1;
    If you repeat a query, it comes back faster.
  Go to your configuration file. Enables query cache. When you `select * From baz where Bla = 123;` If that result hasn't changed, and we've ran it once, we cvan return it fast.

#### memcached (1:00:00 1 hour in.)

  FB took advantage of this. CRITICAL.
  Server running on a server.
  A mechanism that stores whatever you want in RAM.
  Similar to my sql cache.
    It's expensive to find the users (ex `select * from USERS`). Save the results in ram, etc. There is a tier  performance objective.
    We may want to store in a table with indexes to find things faster.
    XML file, build a dom, search. Annoying. So if we skip the DISK step.
    SQL, hopefully the table is in RAM, and if not, at least you have indexes.

    If we skip the search, it'll be faster. Queries are slow.

    Memcached is a way of memoization in a sense. We can check if our query or expected query is in `memCached`.
    If what we're looking for is NOT in `memCached`, then we do our query, assign the thing we found to mem cache, and then we get our result.

#### Caches are finite. What could happen to our cache? (1:04:19)

  Ram, disk, are finite.
  So eventually we can't keep it on the machine. What if we run out?
  You can use a garbage collection. We can expire objects based upon our cache.
  FIFO (queue). Every time a cache hits, we execute another memcache, so we remember the user selected.
  We don't need to do it manually.

  This is useful. Before FB was read heavy. But reads are more common than writes in general. (~1:07). If you're read heavy, caches are common.
  So memcache, we don't need to hit the db to get a lookup that has since queried.


### MySql Optimization (1:08:03)

  Storage Engine: Format for storing your data.
  MyIsam: table locks.

  InoDB: supports transactions. Has other properties. 
  Transactions is 1, but 1, we hhave a memory engine, known as heap engine. Stored in RAM.
  If we want to easily implement a cache with key value, we can implement stuff in cache.

  Archive storage engine. Archive tables are automatically compressed. But slower to write.
    They're useful for log files.
  
#### Replication: Master-Slagvee (1:11:29)

  You read and write from Master database. Master db has network connections to multiple slaves.
  All the slaves have to copy or mirror your Master db.
  If DB 1 dies, you have 3 backups. No backups. You can now have the master again while you fix the broken.
  You could do this automatically.

##### How could FB have taken advantage of this topology? (1:13:39)

   Load balance across the servers.
   How can we adapt more read-heavy topology?
   For read-heavy websites, you can write so that any `Select` statements go to your slaves, while any `Write` requests go to your Master.
   So your slaves can also balance read requests across them. 

##### What's a fault with the slave layout still?

  What if one dies? Some blip on the radar? Promoting a slave.
  We have an issue with writes. It could have an issue with writing.

  What if we had another master?

#### Replication: Master-Master

  Always write to 1, but query goes to 2. Or write across the two.
  If we layed out the network, we can implement this in PHP code. So we build in some redundancy. 

  1:17:45 We still have to route traffic there

## Overview of Load Balancing + Replication: 1:17:50

  We unite some web ideas and db ideas.
  Multi-tiered service.
  If we have 1 MySQL master, master has connection to slaves.
So now look at all the things we've wired up now,

### What can break? (~1:19)








