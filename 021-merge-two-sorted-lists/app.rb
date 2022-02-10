# Definition for singly-linked list.
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

def merge_two_lists(list1, list2)
  return [] if list1 == nil && list2 == nil
    return list1 if list2 == nil
    return list2 if list1 == nil
    if list1.next == nil && list2.next == nil
        if list1.val > list2.val
            list2.next = list1
            return list2
        else
            list1.next = list2
            return list1
        end
    end


    if list1.val < list2.val
        c1 = list1
        c2 = list2

        until c2 == nil || c1 == nil
            p list1
            p "c2: #{c2.val} c1: #{c1.val}"
        if  (c1.val <= c2.val && c1.next == nil) || (c1.val <= c2.val && c2.val < c1.next.val)
            old_c2n = c2.next
            old_c1n = c1.next
            c1.next = c2
            c1.next.next = old_c1n
            c2 = old_c2n
        else
            c1 = c1.next
        end
    end
    return list1
    else
        c1 = list1
        c2 = list2

        until c2 == nil || c1 == nil
        p list2
        p "c2: #{c2.val} c1: #{c1.val}"
            if  (c2.val <= c1.val && c2.next == nil)  || (c2.val <= c1.val && c1.val < c2.next.val)
                old_c1n = c1.next
                old_c2n = c2.next
                c2.next = c1
                c2.next.next = old_c2n
                c1 = old_c1n
            else
                c2 = c2.next
            end
        end
        return list2
    end
--
Kind regards,
Pang Yew Ken

end
