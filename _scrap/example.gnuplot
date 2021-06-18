set datafile separator ','

set xdata time
set timefmt "%Y-%m-%dT%H:%M:%S"
set format x "%H:%M:%S"

set key autotitle columnhead
set ylabel "Price (NZD)"
set xlabel "Time"

plot 'plot.csv' \
     using 1:2 with lines, \
  '' using 1:3 with lines, \
  '' using 1:4 with lines
     # using 1:2 with lines, \
  # '' using 1:3 with lines
  # '' using 1:4 with lines, \
  # '' using 1:5 with lines

# P(KC,CMC)=CMC-KC
# plot 'plot.csv' using 1:(P($4,$6)) with lines
