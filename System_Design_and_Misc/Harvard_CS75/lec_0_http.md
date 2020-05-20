# [HTTP](https://www.youtube.com/watch?v=8KuO4r5CHjM)

## What happens when you go to google.com?

Go to a website.

To find the random IP address, we have root servers. Root servers take you to
A packet, virtual envelope, message, goes to router to router until it gets to the actual server, matches the IP address, and sends it back.

Grabs the file, flips the server and sender, and sends a packet back. 

## What if we want to build a website?

The routers have their own IP address
And routers with 192.168 , 172.16, 10. , are private address on your own network. Your personal devices are on these networks.

When you use a protocol like HTTP, you'll be using other protocols behind the scenes (TCP/ICP with HTTP).

We have Port Numbers. IF a website is running, we are using port 80. Email will send data to port 25.
Emails can contain html now, so we need to distinguish between the two. 

Take your home router, your modem, configure it to say that any internet that comes in destined for port 80, should take incoming data, and route it to the computer for your website.

What if you're doing port forwarding this way? Only one website can have it default to :80 . Most browsers have `:80` typed in automatically.

Portss like 80 or 443.

### How do we outsource this instead of running on personal computer at home?

  Go to a data center. Buy a domain. (ex: www. asd . com)
  Now that we have a domain, we need a server. A web hosting company. They have ram, staff, server, and hopefully at least 2... DNS servers
  Their server has 2 DNS. Those servers will tell every other computer that when they go to your domain you paid for, they navigate to the hosts ip address.

  How to fix why `google.com` and `www.google.com` may be different? Configure it here. Make sure there is a DNS record for both, and configure the server.

### Configuring DNS: (~33:00_) Getting traffic to DNS.

  DNS: What if we want google docs? You can host the email for a website vi agmail. Configure oyur own DNS servers to essentially gmail.com. 
  (34:26) A NS record is a record that tells the world what the IP address is for that domain. CSV files. Each row has domain name: ip address
  One of those rows can be an official record.
  A record, a row of type A, is Domain name: IP Address . As simple as that. 
  CNAME: alias. Like google apps. You don't necessarily want to know google's IP address. But if Google needs to change their IP address and you were using their site or pointing to their domain, your website would crash.
    So instead of explicitly stating google.com's IP address, but resolve more generically to calendar.google.com, and let their DNS server state what their IP address is.
    So if you want an alias, you use `Domain1: Domain2` where you want `Domain1` to point to `Domain2`.
    Ex: Dell has a customer service, and outsources it. You don't want clients to know. 

  MX record: Mail Exchange record. When you use gmail, it can look at the mx record, lets you know which IP address you send mail to. 
  

## Next set ocf lectures (52:46)

  Course overview blablabla

## But where are your actual files stored?

  You get a web host, but notice how some are super cheap. What are the catches to web hosts?
  Sometimes they share resources. Virtual hosting. 
  In the HEADER, you have multiple things, and now you put in the URL so that way the virtual host can identify what's your URL and whatnot.
  Email servers, you have alternatives to web host (like google DNS gmail)g

## What if you want to configure the server? (~58) Virtual Private Servers.

  Run virtualization software. The illusion of owning a server
  VMWare, virtual box, etc. Once you run them, you can install multiple instances of Linux, mac, etc.
  Install multiple instances of distinct computers, ecah with own user/password.
  They share the same hardware, but different software. You still run into resource contention.
  But what do you gain with a DPS other than a web host? You can keep things up to date. And if someone else's server is compromised, yours is NOT. Webhosts share servers, so one getting compromised compromises all.


## Hardware set up 

SSH, FSTP

## Where does that take us *~1:07:00"

We have inputs from users. Forms.

## 1:18:07 Networks and what are these packets

You can see a lot of network activity to see all of the http requests that just occurred.

### What goes in a request? 1:20 Headers View Source

  We see the GET /Search
  HOST
  arcane information. Every website you've visited knows what you're doing behind the scenes.
  Some features are nice because 
  But requiring the users browser to build a website is typically a bad process.

  We have various status codes too.
  With cookies (`www.harvard` instead of `harvard.bla`) shares cookies within the site or to other sites (respectively).

  You can run `nslookup url` to get all the IP addresses for servers
  You also have round-robin for load balancing. So you can see all those different servers

  You can also change the etc host (sudo vi /etc/hosts) (~1:30 ish) so that it links the IP address to a URL you hard-code.
    This means you can buy up offensive domains and link to sites you hate to show their content.
    A webserver can see what was in the `to` field, and if that's not what we want, redirect that (via `301`) to someplace else. (1:34).
    We can stop the browser from staying there.

  You want to secure your cookies because sometimes your session is in the cookies, so someone can steal your session info (without knowing your password).

## Summary (~1:40)

DNS
Web server, getting your own domain name
HTML tools, and a form....