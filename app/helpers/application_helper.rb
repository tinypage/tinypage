module ApplicationHelper
  def json_field_value(data)
    if data.blank?
      ""
    else
      data.to_json
    end
  end

  def icon(name, options = {})
    options[:aria] = true
    options[:nocomment] = true
    path = options.fetch(:path, "icons/#{name}.svg")
    icon = path
    inline_svg_tag(icon, options)
  end

  def dialog
    content_tag(:div, data: { controller: "dialog" }) do
      concat(content_tag(:div, nil, class: "fixed inset-0 bg-stone-500 bg-opacity-75 transition-opacity z-20"))
      concat(content_tag(:div, class: "fixed inset-0 z-30 h-full w-full") do
        content_tag(:div, class: "flex flex-col h-full w-full items-center justify-center p-6 cursor-pointer", data: { action: "click->dialog#close" }) do
          content_tag(:div, class: "cursor-auto grow flex flex-col bg-white max-h-[32rem] w-full max-w-5xl rounded-md border-2 border-stone-700 shadow") do
            yield
          end
        end
      end)
    end
  end
end
