# Definition for singly-linked list.
class ListNode
    attr_accessor :val, :next
    def initialize(val = 0, _next = nil)
        @val = val
        @next = _next
    end
end
@param {ListNode} list1
@param {ListNode} list2
@return {ListNode}

def merge_two_lists(list1, list2)
  p list1
  p list1.class
  p list2
  p list2.class
  c2 = list2.val
  until c2.next == nil
    c1 = list1.val
    return ''
  end
end


p merge_two_lists(list1, list2)
# [1,1,2,3,4,4]
# p merge_two_lists(ListNode.new[], ListNode.new[])
# # []
# p merge_two_lists(ListNode.new[], ListNode.new[0])
# # [0]


# class ListNode
#     attr_accessor :val, :next
#     def initialize(val = 0, _next = nil)
#         @val = val
#         @next = _next
#     end
# end
# @param {ListNode} list1
# @param {ListNode} list2
# @return {ListNode}
