#!/usr/bin/perl

use strict;
use warnings;
 
my $filename = '../lineserver/files/textfile.txt';
open(my $fh, '>', $filename) or die "Could not open file '$filename' $!";

for (my $i=1; $i<101; ++$i) {
    print $fh "$i: This is a line of text in a text file.\n";
}

close $fh;

