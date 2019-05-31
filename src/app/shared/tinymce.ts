export const tinyMceSettings = {
    plugins: [
      'advlist autolink link image lists table fullscreen'
    ],
    external_plugins: {
      advlist: '/assets/tinymce/plugins/advlist/plugin.min.js',
      autolink: '/assets/tinymce/plugins/autolink/plugin.min.js',
      link: '/assets/tinymce/plugins/link/plugin.min.js',
      image: '/assets/tinymce/plugins/image/plugin.min.js',
      lists: '/assets/tinymce/plugins/lists/plugin.min.js',
      table: '/assets/tinymce/plugins/table/plugin.min.js',
      fullscreen: '/assets/tinymce/plugins/fullscreen/plugin.min.js',
    },
    image_advtab: true,
    content_css: '/assets/tinymce/skins/content/default/content.min.css',
    toolbar: 'insertfile undo redo | styleselect | bold italic | \
      alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | \
      link image | print preview media fullpage | forecolor backcolor emoticons',
    skin_url: '/assets/tinymce/skins/ui/oxide',
    inline: false,
    statusbar: false,
    browser_spellcheck: true,
    height: 320,
};
