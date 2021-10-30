def recursive_count(num = 0)
  # base case
  return if num >= 10
  
  puts num
  recursive_count(num += 1)
end


# while count < 10
#   puts count
#   count += 1
# end

# def talk_to_myself(n)
#   return 'done' if n <= 0.5

#   # this is where our method pauses
#   # it's also where our return values return to
#   talk_to_myself(n / 2)
#   'The sheep goes baaaaaahhhh'
# end

if __FILE__ == $PROGRAM_NAME
  recursive_count
end

# OPTIONAL
# Please add your pseudocode to this file
# And a written explanation of your solution
