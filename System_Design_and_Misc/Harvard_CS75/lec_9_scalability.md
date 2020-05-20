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

