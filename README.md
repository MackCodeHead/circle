# circle

○ How does your system work? (if not addressed in comments in source)

This app first reads clears out the DB, then attempts to read in the text file,
line by line, and insert each line, with its line number, into the DB. When a
request is made, the app attempts to pull the line from the DB.

I also wrote a perl script to generate files of a specified size, located in:
bin/file-gen.pl

To build, execute:
./build.sh

To run app, execute this script and pass name of server file:
./run.sh app.js



○ What do we need to build your system?

This app requires:
    - Node.js and NPM installed on the system
    - MongoDB installed and running on the default port



○ How will your system perform with a 1 GB file? a 10 GB file? a 100 GB file?

This app performs well with large files. The bulk of the performance hit is
when the server starts up and reads the file into the DB. The performance is
then amortized with quick look ups of the lines.



○ How will your system perform with 100 users? 10000 users? 1000000 users?

This app will perform well with users to 10,000. If more users than that need
to be supported, an additional layer, such as nginx, would need to be added
to support more concurrent users.



○ What documentation, websites, papers, etc did you consult in doing this
assignment?

- bash website docs
- mongoose website docs
- express website docs
- line-by-line website docs
- Perl file writing website docs



○ What third-party libraries or other tools does the system use? How did you
choose each library or framework you used?

- mongoose: This module is used in Node.js apps to communicate with MongoDB
- express: This module provides a framework for Node.js apps
- async: I used this module to control the asynchronous calls to the DB so
  that I can be sure that clearing the DB finishes before I attempt to
  populate it with the file contents.
- line-by-line: I used this module to make the file reading easier.


○ How long did you spend on this exercise? If you had unlimited more time to
spend on this, how would you spend it and how would you prioritize each item?

Approximately five hours.



○ If you were to critique your code, what would you have to say about it?

I would say that it should  include comments in the code and unit testing, both
were omitted for sake of time.
